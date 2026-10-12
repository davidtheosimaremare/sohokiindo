import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://shop.hokiindo.co.id/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      next: { revalidate: 300 },
    });

    let html = await res.text();

    // 1. Remove Cloudflare insights beacon to prevent load event hang
    html = html.replace(/<script[^>]*cloudflareinsights[^>]*>[\s\S]*?<\/script>/gi, '');

    // 2. Fix Framer Motion initial SSR opacity:0 so Kategori Utama and other animated sections are immediately 100% visible
    html = html.replace(/opacity:\s*0/gi, 'opacity: 1');
    html = html.replace(/transform:\s*translateY\([^)]+\)/gi, 'transform: none');

    // 3. Rewrite relative paths to absolute URLs pointing to shop.hokiindo.co.id
    html = html.replace(/href="\/(?!\/)/g, 'href="https://shop.hokiindo.co.id/');
    html = html.replace(/src="\/(?!\/)/g, 'src="https://shop.hokiindo.co.id/');
    html = html.replace(/action="\/(?!\/)/g, 'action="https://shop.hokiindo.co.id/');
    html = html.replace(/srcset="\/(?!\/)/gi, 'srcset="https://shop.hokiindo.co.id/');
    html = html.replace(/,\s*\/(?!\/)/g, ', https://shop.hokiindo.co.id/');

    // 4. Force CSS & JavaScript so all SSR hidden elements become visible and clicks open in new tab
    const interceptor = `
      <base href="https://shop.hokiindo.co.id/" target="_blank">
      <style>
        [style*="opacity:0"], [style*="opacity: 0"], [style*="opacity: 0;"], [style*="opacity:0;"] {
          opacity: 1 !important;
          transform: none !important;
          visibility: visible !important;
        }
      </style>
      <script>
        (function() {
          // Immediately make all initial SSR zero-opacity elements visible
          function revealElements() {
            var els = document.querySelectorAll('*');
            for (var i = 0; i < els.length; i++) {
              if (els[i].style && els[i].style.opacity === '0') {
                els[i].style.opacity = '1';
                els[i].style.transform = 'none';
                els[i].style.visibility = 'visible';
              }
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', revealElements);
          } else {
            revealElements();
          }
          setTimeout(revealElements, 100);
          setTimeout(revealElements, 500);

          // Intercept history.pushState so Next.js never navigates this iframe to localhost routes
          try {
            history.pushState = function(state, title, url) {
              if (url && typeof url === 'string') {
                var target = url.startsWith('http') ? url : 'https://shop.hokiindo.co.id' + (url.startsWith('/') ? url : '/' + url);
                window.open(target, '_blank');
              }
            };
            history.replaceState = function() {};
          } catch(e) {}

          // Intercept all link clicks in CAPTURE phase (runs before Next.js router)
          window.addEventListener('click', function(e) {
            var a = e.target.closest('a');
            if (a) {
              var href = a.getAttribute('href') || a.href;
              if (href && href !== '#' && !href.startsWith('javascript:')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                var fullUrl = href.startsWith('http') ? href : 'https://shop.hokiindo.co.id' + (href.startsWith('/') ? href : '/' + href);
                window.open(fullUrl, '_blank');
                return false;
              }
            }
          }, true);

          // Intercept form submissions (e.g. search bar)
          window.addEventListener('submit', function(e) {
            var form = e.target;
            if (form) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              var input = form.querySelector('input[type="text"]');
              var q = input ? input.value : '';
              var target = q ? 'https://shop.hokiindo.co.id/pencarian?q=' + encodeURIComponent(q) : 'https://shop.hokiindo.co.id/';
              window.open(target, '_blank');
              return false;
            }
          }, true);
        })();
      </script>
    `;

    // Inject interceptor at the beginning of <head>
    if (html.includes("<head>")) {
      html = html.replace("<head>", `<head>${interceptor}`);
    } else if (html.includes("<head ")) {
      html = html.replace(/<head[^>]*>/, `$&${interceptor}`);
    }

    // Return without X-Frame-Options
    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    return new NextResponse("Error loading shop.hokiindo.co.id", { status: 500 });
  }
}
