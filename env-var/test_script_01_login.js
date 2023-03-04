// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
   vus: 10,
  iterations: 1000,

  thresholds: {
    "http_reqs{expected_response:false}": ["rate>10"],
  },
};

export default function main() {
  let response

  group('page_1 - https://paypenny-stagging.affleprojects.com/admin/pages/login', function () {
    response = http.get('https://paypenny-stagging.affleprojects.com/admin/pages/login', {
      headers: {
        referer: 'https://www.google.com/',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', {
      headers: {
        origin: 'https://paypenny-stagging.affleprojects.com',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://unpkg.com/leaflet@1.5.1/dist/leaflet.css', {
      headers: {
        origin: 'https://paypenny-stagging.affleprojects.com',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/main.72f8ef96.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/11.db7aa42d.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/main.8bdd577f.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/40.c958741e.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/40.4ce22ffb.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/media/logoUK.9bc1c7e0.png',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', {
      headers: {
        accept: 'application/json, text/plain, */*',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/4.e66cacda.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/41.938c68d3.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/41.4e94eef1.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://api.ipify.org/', {
      headers: {
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/media/vuesax-login-bg.eb4e894d.jpg',
      {
        headers: {
          referer:
            'https://paypenny-stagging.affleprojects.com/admin/static/css/main.72f8ef96.chunk.css',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://paypenny-stagging.affleprojects.com/admin/favicon.png', {
      headers: {
        referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://paypenny-stagging.affleprojects.com/admin/manifest.json', {
      headers: {
        referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://paypenny-stagging.affleprojects.com/v9/admin/login',
      '{"country":"Canada","email":"paypennyadmin@yopmail.com","password":"Paypenny@567","ip_address":"49.207.227.174"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: 'Bearer undefined',
          'content-type': 'application/json;charset=UTF-8',
          referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group('page_2 - https://paypenny-stagging.affleprojects.com/admin', function () {
    response = http.get('https://paypenny-stagging.affleprojects.com/admin', {
      headers: {
        referer: 'https://paypenny-stagging.affleprojects.com/admin/pages/login',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', {
      headers: {
        origin: 'https://paypenny-stagging.affleprojects.com',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get('https://unpkg.com/leaflet@1.5.1/dist/leaflet.css', {
      headers: {
        origin: 'https://paypenny-stagging.affleprojects.com',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/main.72f8ef96.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/11.db7aa42d.chunk.js',
      {
        headers: {
          'if-modified-since': 'Wed, 01 Mar 2023 08:11:57 GMT',
          'if-none-match': 'W/"10f0da-1869c3a6229"',
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/main.8bdd577f.chunk.js',
      {
        headers: {
          'if-modified-since': 'Wed, 01 Mar 2023 08:11:57 GMT',
          'if-none-match': 'W/"21d59-1869c3a6275"',
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/40.c958741e.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/40.4ce22ffb.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600', {
      headers: {
        accept: 'application/json, text/plain, */*',
        referer: 'https://paypenny-stagging.affleprojects.com/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/css/46.616ce7db.chunk.css',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/js/46.635917b2.chunk.js',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://paypenny-stagging.affleprojects.com/admin/static/media/user.9cd81d50.png',
      {
        headers: {
          referer: 'https://paypenny-stagging.affleprojects.com/admin/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get('https://paypenny-stagging.affleprojects.com/admin/manifest.json', {
      headers: {
        referer: 'https://paypenny-stagging.affleprojects.com/admin/',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
