import {
  y as G,
  aB as j,
  w as u,
  p as W,
  N,
  ak as _,
  J as f,
  K as V,
  u as h,
  a as y,
  a8 as k,
  n as g,
  G as p,
  a7 as O,
  o as A,
  L as Z,
  aw as q,
  x as B
}
from'../../chunk-020bd373.js';
import {
  R as v,
  j as t,
  a as e,
  r as b,
  F as X
}
from'../../chunk-29b7dcec.js';
import {
  j as J,
  a as c,
  g as d,
  w as S,
  c as E,
  A as K
}
from'../../chunk-4a04a0b4.js';
import {
  g as Q,
  S as Y,
  R as ee,
  L as se
}
from'../../chunk-9af82d94.js';
import {
  _ as ne
}
from'../../chunk-c3a08f60.js';
import {
  s as te
}
from'../../chunk-9cc3c3e9.js';
import {
  V as ae,
  F as I
}
from'../../chunk-6d75bbd0.js';
import {
  b as ie,
  d as ce,
  g as M
}
from'../../chunk-2d95dd32.js';
function C() {
  return G()
}
const oe = Q,
le = () =>j('https://connect.facebook.net/en_US/sdk.js', 'FB');
let re = J.isDev ? '2247726542166448' : '363146184450773';
const me = async() =>{
  if (window.FB) return window.FB;
  let n = await le();
  return n.init({
    appId: re,
    cookie: !0,
    xfbml: !0,
    version: 'v2.8'
  }),
  n
},
de = () =>j('https://apis.google.com/js/api:client.js', 'gapi'),
ge = async() =>{
  let n = await de();
  return await new Promise(a=>{
    n.load('auth2', () =>{
      a(n.auth2.init({
        client_id: '36897522347-eotiq46nvilc5p10653s4mtbs8405sbn.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      }))
    })
  })
},
pe = v.memo(function () {
  return t('svg', {
    width: '10',
    height: '11',
    viewBox: '0 0 10 11',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      e('path', {
        d: 'M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z'
      }),
      e('path', {
        d: 'M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z'
      })
    ]
  })
});
v.memo(function () {
  return e('svg', {
    width: '7',
    height: '11',
    viewBox: '0 0 7 11',
    xmlns: 'http://www.w3.org/2000/svg',
    children: e('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4.73953 10.9526V5.94653H6.31494L6.6145 4.04838H4.73953V2.8166C4.73953 2.29728 5.00132 1.79111 5.84154 1.79111H6.69366V0.175107C6.69366 0.175107 5.92018 0.046875 5.18033 0.046875C3.63649 0.046875 2.62709 0.955939 2.62709 2.60169V4.04838H0.91095V5.94653H2.62709V10.9526H4.73953Z'
    })
  })
});
const ue = v.memo(function () {
  return e('svg', {
    width: '10',
    height: '9',
    viewBox: '0 0 10 9',
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'tel',
    children: e('path', {
      d: 'M0.631267 4.23359L8.94963 0.522088C9.26472 0.381636 9.63257 0.52552 9.77174 0.843552C9.82141 0.956236 9.83693 1.08093 9.81624 1.20277L8.70026 7.90193C8.63145 8.31346 8.24549 8.59114 7.83779 8.52187C7.7219 8.50206 7.6117 8.45479 7.51702 8.38397L4.70353 6.27916C4.42674 6.07231 4.36827 5.6781 4.57367 5.39854C4.59695 5.36641 4.62386 5.33651 4.65335 5.30942L7.47408 2.69548C7.49943 2.67187 7.50098 2.6322 7.4777 2.6064C7.45752 2.58436 7.42441 2.57962 7.39854 2.59569L3.11829 5.27286C2.96256 5.36984 2.77269 5.39345 2.59885 5.33677L0.655584 4.70362C0.52417 4.66082 0.452255 4.51881 0.49468 4.38657C0.51641 4.31856 0.566078 4.2625 0.631267 4.23354V4.23359Z'
    })
  })
}),
he = v.memo(function () {
  return e('svg', {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    xmlns: 'http://www.w3.org/2000/svg',
    children: e('path', {
      fillRule: 'evenodd',
      d: 'm.6 1 .1.1 3.6 1.4h3.2l3.6-1.4.1-.1.8 1.8-.4 1.9.2.2-.3.3.3.2-.3.3.2.1-.6.8.8 2.5-.8 2.5-2.7-.7-.5.4-1 .7H5.1l-1-.7-.4-.3-.1-.1-2.6.7-.9-2.5.8-2.5-.5-.7.2-.1-.4-.4.2-.2-.2-.3.2-.2L0 2.8.6 1zm3.1 2.5 1 .8-.4.4-1 .9-2.2.6-.4-.5.2-.1-.3-.4.2-.2-.3-.2.2-.2-.3-1.7.5-1.5 2.8 2.1zm7.1 2.7.4-.5-.2-.1.3-.3-.2-.2.3-.2-.1-.3.3-1.7-.5-1.5-3.9 2.9.6.5.9.8 2.1.6zM5.3 8.6l-.5-1.2-1.3.6 1.8.6zM5.2 10l-.2.1-.1 1.1H7l.1.1-.1-1.1-.3-.2H5.2zm3.3-2-1.8.5.5-1.1 1.3.6z'
    })
  })
}),
ve = v.memo(function () {
  return e('svg', {
    width: '13',
    height: '9',
    viewBox: '0 0 13 9',
    xmlns: 'http://www.w3.org/2000/svg',
    children: e('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M11.4289 3.91921L12.1201 4.58746C12.2153 4.67825 12.2153 4.82718 12.1201 4.91797L9.00652 7.93605C8.91132 8.02685 8.75766 8.02685 8.66608 7.93605L6.45637 5.79324C6.43412 5.77145 6.39429 5.77145 6.37204 5.79324L4.16233 7.93605C4.06713 8.02685 3.91347 8.02685 3.82189 7.93605L0.697462 4.91797C0.602265 4.82718 0.602265 4.67825 0.697462 4.58746L1.38868 3.91921C1.48387 3.82842 1.63753 3.82842 1.72911 3.91921L3.93882 6.06203C3.96107 6.08381 4.00142 6.08381 4.02315 6.06203L6.23287 3.91921C6.32806 3.82842 6.48172 3.82842 6.5733 3.91921L8.78353 6.06203C8.80526 6.08381 8.84561 6.08381 8.86734 6.06203L11.0776 3.91921C11.18 3.82842 11.3337 3.82842 11.4289 3.91921ZM2.9949 2.36498C4.87918 0.53817 7.93791 0.53817 9.82219 2.36498L10.0493 2.58655C10.144 2.67735 10.144 2.82627 10.0493 2.91707L9.27326 3.66883C9.22566 3.71605 9.14909 3.71605 9.10149 3.66883L8.79054 3.36739C7.47331 2.09261 5.34379 2.09261 4.02655 3.36739L3.69388 3.69062C3.64628 3.73783 3.56919 3.73783 3.52159 3.69062L2.74604 2.93885C2.65085 2.84806 2.65085 2.69913 2.74604 2.60834L2.9949 2.36498Z'
    })
  })
}),
be = () =>ne(() =>import ('../../chunk-5c5f019a.js'), [
  'assets/chunk-5c5f019a.js',
  'assets/chunk-020bd373.js',
  'assets/chunk-29b7dcec.js',
  'assets/chunk-c3a08f60.js',
  'assets/Emoji.003e400b.css',
  'assets/chunk-b2d80e14.js',
  'assets/chunk-4a04a0b4.js',
  'assets/Share.5ebd3be9.css',
  'assets/chunk-f1acffc9.js'
]),
we = u(() =>{
  const n = W(),
  s = N(),
  a = b.exports.useRef(null),
  i = async function () {
    try {
      const l = await ge();
      if (!n()) return;
      l.attachClickHandler(a.current, {
      }, r=>{
        const m = l.currentUser.get().getBasicProfile(),
        {
          id_token: x
        }
        = r.getAuthResponse();
        c.handleLoginOpen({
          fullName: m.getName(),
          idToken: x,
          openUserId: m.getId(),
          userType: 'google',
          picture: m.Paa
        }).then(_.close).catch(f)
      }, r=>{
        r instanceof Error && f(new Error(String(r)))
      })
    } catch {
    }
  };
  b.exports.useEffect(() =>{
    i(),
    me()
  }, [
  ]);
  async function o() {
    const l = await c.socalToken.getAuthData('telegram');
    return c.handleLoginOpen({
      fullName: l.first_name,
      idToken: Object.entries(l).map(([r,
      m]) =>`${ r }=${ m }`).join(','),
      openUserId: l.id,
      userType: 'telegram'
    }).then(_.close).catch(f)
  }
  return t('div', {
    className: 'other-group',
    children: [
      e('button', {
        id: 'gg_login',
        type: 'button',
        title: 'google',
        ref: a,
        children: e(pe, {
        })
      }),
      e('button', {
        id: 'tg_login',
        type: 'button',
        title: 'telegram',
        onClick: o,
        children: e(ue, {
        })
      }),
      !s && e('button', {
        type: 'button',
        onClick: Ne,
        children: e(he, {
        })
      }),
      e('button', {
        type: 'button',
        onClick: fe,
        children: e(ve, {
        })
      })
    ]
  })
}),
fe = async() =>{
  try {
    let[n,
    s] = await Promise.all([c.getSignMsg(),
    be()]),
    {
      signature: a,
      publicAddress: i
    }
    = await s.signPersonalMessage(n);
    await c.handleLoginSign({
      signStr: a,
      walletName: 'metamask',
      walletUnique: i
    }),
    _.back()
  } catch (n) {
    f(n)
  }
},
Ne = async function () {
  try {
    let n = await c.getSignMsg(),
    {
      signature: s,
      publicAddress: a
    }
    = await te(n);
    await c.handleLoginSign({
      signStr: s,
      walletName: 'metamask',
      walletUnique: a
    }),
    c.init(),
    _.back()
  } catch (n) {
    f(new Error(n.message.split(`

    `) [0]))
  }
};
const ye = u(function () {
  const s = C().bannerData.read(),
  a = c.login,
  i = N(),
  o = V();
  d.isInited && d.rechargeValidNum < 4;
  const l = oe(s, a, o, i);
  return e('img', {
    className: 'img-banner',
    src: l,
    alt: ''
  })
}),
D = 20000;
v.memo(function ({
  numberStr: s
}) {
  return t('svg', {
    viewBox: '500 84',
    children: [
      e('defs', {
        children: t('linearGradient', {
          id: 'grad',
          x1: '0%',
          y1: '0%',
          x2: '100%',
          y2: '0%',
          children: [
            e('stop', {
              offset: '0%',
              style: {
                stopColor: '#B5E916',
                stopOpacity: 1
              }
            }),
            e('stop', {
              offset: '100%',
              style: {
                stopColor: '#43C111',
                stopOpacity: 1
              }
            })
          ]
        })
      }),
      e('text', {
        x: '0',
        y: '64',
        fill: 'url(#grad)',
        children: s
      })
    ]
  })
});
const _e = u(function () {
  const s = h(),
  a = y(),
  i = c.settings.enableLocaleCurrency ? S.convertCurrency(D, 'USD', c.settings.localeCurrencyName) : D,
  o = new k(Math.ceil(i).toPrecision(2)).toNumber();
  return e('div', {
    className: g('container', ke),
    children: t('div', {
      className: 'cont',
      children: [
        t('div', {
          className: 'title nologin-tit',
          children: [
            e('div', {
              dangerouslySetInnerHTML: {
                __html: s('common.signup.desc1')
              },
              className: 'title-top ttu'
            }),
            t('div', {
              className: 'title-two ttu',
              children: [
                e('span', {
                  children: s('common.signup.desc1_sub')
                }),
                e('b', {
                  className: 'cl-primary gradient',
                  children: ` ${ c.settings.enableLocaleCurrency ? S.localCurrency.cs : ' $' } ${ S.numberWithCommas(o) }`
                })
              ]
            })
          ]
        }),
        t('div', {
          className: 'opt-wrap',
          children: [
            e(p, {
              type: 'conic2',
              className: 'btn',
              onClick: () =>a('#/login/regist'),
              children: s('common.signup.desc3')
            }),
            t('div', {
              className: 'other-login',
              children: [
                e('div', {
                  className: 'txt',
                  children: 'or'
                }),
                e(we, {
                })
              ]
            })
          ]
        })
      ]
    })
  })
});
function Ce() {
  const n = h(),
  s = N(),
  {
    isSvip: a,
    vipType: i,
    vipLevel: o,
    vipLevelColor: l
  }
  = c.getUserLevelInfo(c.vipLevel);
  let r = (c.vipInfo.currXP - c.vipInfo.levelStartXP) / (c.vipInfo.levelEndXP - c.vipInfo.levelStartXP) * 100;
  const m = a && o > 55 ? 100 : r < 2 ? 2 : new k(r).toDP(2).toNumber();
  return a && o > 55 && (r = 100),
  e('div', {
    className: g('container', Be),
    children: t('div', {
      className: 'cont',
      children: [
        t('div', {
          className: 'sub-tit',
          children: [
            n('common.hi'),
            ' ',
            t('span', {
              className: 'name',
              children: [
                c.name,
                '!'
              ]
            }),
            ' ',
            n('common.welcome.desc1')
          ]
        }),
        e('div', {
          className: 'vip-title ttu',
          children: n('common.welcome.desc2')
        }),
        e('div', {
          className: 'vip-line',
          children: e('div', {
            className: 'vip-progress',
            style: {
              width: m + '%',
              background: l
            },
            children: !s && t('div', {
              className: 'cur-pre',
              children: [
                Math.floor(r),
                '%'
              ]
            })
          })
        }),
        t('div', {
          className: 'vip-info',
          children: [
            t('div', {
              className: 'cur-lv ttu',
              children: [
                i,
                ' ',
                o
              ]
            }),
            t('div', {
              className: 'next-lv ttu',
              children: [
                i,
                ' ',
                o + 1
              ]
            })
          ]
        })
      ]
    })
  })
}
const Le = u(function () {
  const s = h(),
  a = y(),
  i = d.useBcdLabel();
  let o = '-';
  if (d.bonusItems && d.bonusItems.length > 0) {
    const l = d.bonusItems[d.bonusItems.length - 1];
    l && (o = '+' + new k(l.bonusRatio).mul(100).toString() + '%')
  }
  return e('div', {
    className: g('container dp-bonus', Ie),
    children: t('div', {
      className: 'cont',
      children: [
        t('div', {
          className: 'sub-tit',
          children: [
            s('common.hi'),
            ' ',
            t('span', {
              className: 'name',
              children: [
                c.name,
                '!'
              ]
            }),
            ' ',
            s('common.welcome.desc1')
          ]
        }),
        t('div', {
          className: 'title',
          children: [
            e('div', {
              className: 'rewards-num ttu',
              children: i
            }),
            ' ',
            t('div', {
              className: 'cl-primary gradient',
              children: [
                o,
                ' ',
                e('span', {
                  className: 'ttu',
                  children: s('page.casino.dialog.rewards')
                })
              ]
            })
          ]
        }),
        t('div', {
          className: 'opt-wrap btns',
          children: [
            e(p, {
              type: 'conic',
              onClick: () =>a('#/wallet'),
              children: s('page.common.deposit.play')
            }),
            e(p, {
              type: 'conic3',
              onClick: () =>a('#/wallet/buy'),
              children: s('wallet.buy.title')
            })
          ]
        })
      ]
    })
  })
}),
xe = u(function () {
  const [s,
  a] = b.exports.useState(!1),
  i = O(r=>{
    r.width <= 1100 && r.width >= 740 ? a(!0) : a(!1)
  }, 500),
  o = c.login;
  function l() {
    return o ? d.isInited ? d.rechargeValidNum < 4 ? e(Le, {
    }) : e(Ce, {
    }) : e(A, {
    }) : e(_e, {
    })
  }
  return t('div', {
    ref: i,
    className: g(Se, s && 'small'),
    children: [
      l(),
      e('div', {
        className: 'img-banner-wrap',
        children: e(b.exports.Suspense, {
          children: e(ye, {
          })
        })
      })
    ]
  })
}),
Se = 's608ikl',
ke = 'n1ja5cp8',
Be = 'v1ljsbb0',
Ie = 'r1gxbrys';
function Me() {
  const n = C().bannerData.read();
  return e(b.exports.Suspense, {
    fallback: e(A, {
      className: 'banner-loading'
    }),
    children: e(Y, {
      data: n
    })
  })
}
function De() {
  const n = E.isMobile();
  return e('div', {
    className: Pe,
    children: t('div', {
      className: 'page-max-width-wrap',
      children: [
        e(xe, {
        }),
        !n && e(Me, {
        })
      ]
    })
  })
}
const Pe = 's8spky0',
Re = '/assets/sports.2f749e0a.png',
He = '/assets/casino.74471929.png',
Te = '/assets/sports_icon.ee7aa9c3.png',
je = '/assets/casino_icon.aa1f6594.png';
const P = v.memo(function (s) {
  const a = N();
  return t(Z, {
    href: s.btnLink,
    className: 'nav-item-wrap',
    children: [
      a && t('div', {
        className: 'tit',
        children: [
          e('img', {
            className: 'icon-img',
            src: s.icon,
            alt: ''
          }),
          e('div', {
            className: 'txt ttu',
            children: s.title
          })
        ]
      }),
      t('div', {
        className: g('nav-item', s.isSport && 'sport'),
        children: [
          e('div', {
            className: 'top-img-wrap',
            children: e('img', {
              className: 'top-img',
              src: s.img,
              alt: ''
            })
          }),
          e('div', {
            className: 'wrap',
            children: t('div', {
              className: 'cont',
              children: [
                !a && t('div', {
                  className: 'tit',
                  children: [
                    e('img', {
                      className: 'icon-img',
                      src: s.icon,
                      alt: ''
                    }),
                    e('div', {
                      className: 'txt ttu',
                      children: s.title
                    })
                  ]
                }),
                e('div', {
                  className: 'desc',
                  children: s.desc
                }),
                e(p, {
                  type: s.isSport ? 'conic' : 'conic3',
                  children: s.btnTxt
                })
              ]
            })
          })
        ]
      })
    ]
  })
});
function Ve() {
  const n = h(),
  s = [
    {
      img: He,
      icon: je,
      title: n('common.casino'),
      desc: n('page.casino.home_desc'),
      btnLink: '/casino',
      btnTxt: n('common.goto.casino'),
      isSport: !1
    },
    {
      img: Re,
      icon: Te,
      title: n('common.sports'),
      desc: n('page.casino.home_desc2'),
      btnLink: '/sports',
      btnTxt: n('common.goto.sports'),
      isSport: !0
    }
  ];
  return t('div', {
    className: Ae,
    children: [
      e(P, {
        ...s[0]
      }),
      e(P, {
        ...s[1]
      })
    ]
  })
}
const Ae = 's6jvneh',
Ee = '/assets/applepay.0e9ab5f5.png',
Fe = '/assets/applepay_w.5494fae6.png',
$e = '/assets/googlepay.36a59f80.png',
ze = '/assets/googlepay_w.fe787399.png',
Ue = '/assets/samsungpay.8da55069.png',
Ge = '/assets/samsungpay_w.42acc2ee.png',
We = '/assets/masterpay.9a38df7b.png',
Oe = '/assets/masterpay.9a38df7b.png',
Ze = '/assets/visapay.a1cbd85f.png',
qe = '/assets/visapay_w.f3467bc3.png';
const w = u(function ({
  src: s,
  src_w: a
}) {
  const i = E.isDarken ? s : a;
  return e('img', {
    src: i,
    alt: ''
  })
});
function Xe() {
  q();
  const n = y(),
  s = h();
  return t('div', {
    className: Je,
    children: [
      t('div', {
        className: 'payment-list',
        children: [
          t('div', {
            className: 'top-list',
            children: [
              e(w, {
                src: Ee,
                src_w: Fe
              }),
              e(w, {
                src: $e,
                src_w: ze
              }),
              e(w, {
                src: Ue,
                src_w: Ge
              })
            ]
          }),
          t('div', {
            className: 'bot-list',
            children: [
              e(w, {
                src: We,
                src_w: Oe
              }),
              e(w, {
                src: Ze,
                src_w: qe
              })
            ]
          })
        ]
      }),
      e('div', {
        className: 'payment-opt',
        children: t('div', {
          className: 'payment-cont',
          children: [
            e('div', {
              className: 'payment-title',
              children: s('common.welcome.desc4')
            }),
            e('div', {
              className: 'payment-desc',
              dangerouslySetInnerHTML: {
                __html: s('common.welcome.desc5')
              }
            }),
            e('div', {
              className: 'btn-wrap',
              children: e(p, {
                type: 'conic2',
                onClick: () =>n('#/wallet/buy'),
                children: s('common.deposit')
              })
            })
          ]
        })
      })
    ]
  })
}
const Je = 'sd1yyof',
F = '/assets/ball_1.8c16948f.png',
$ = '/assets/ball_1_w.a971d3f8.png',
Ke = '/assets/ball_5.c6bfb29b.png',
Qe = '/assets/ball_5_w.07c00d38.png',
Ye = '/assets/ball_4.6eff1ed4.png',
es = '/assets/ball_4_w.681d83a9.png',
R = '/assets/bonus.16cf71f6.png',
H = '/assets/rain.c10cc3c6.png';
const L = function ({
  src: s,
  src_w: a,
  className: i
}) {
  const o = V() ? s : a;
  return e('img', {
    src: o,
    className: i,
    alt: 'ball'
  })
},
ss = v.memo(function () {
  const s = h(),
  a = y();
  return t('div', {
    className: g(z, 'register-bonus'),
    children: [
      e(L, {
        className: 'img-ball ball-grey',
        src: F,
        src_w: $
      }),
      e(L, {
        className: 'img-ball ball-color',
        src: Ke,
        src_w: Qe
      }),
      e('img', {
        className: 'img-ball bonus-img',
        onClick: () =>a('#/login/regist'),
        src: R
      }),
      e('div', {
        className: 'left',
        children: t('div', {
          className: 'wrap',
          children: [
            e('p', {
              className: 'tit',
              dangerouslySetInnerHTML: {
                __html: s('common.signup.desc9')
              }
            }),
            e('p', {
              className: 'desc',
              children: s('common.signup.desc10')
            }),
            e('img', {
              alt: 'bonus',
              onClick: () =>a('#/login/regist'),
              className: 'm-bonus-img',
              src: R
            }),
            e(p, {
              type: 'conic4',
              onClick: () =>a('#/login/regist'),
              children: s('common.signup.desc7')
            })
          ]
        })
      })
    ]
  })
}),
T = u(function () {
  const s = h(),
  a = y(),
  i = () =>{
    c.login ? a('/vip-club') : a('#/login/regist')
  };
  return t('div', {
    className: g(z, 'rain-coindrop'),
    children: [
      e(L, {
        className: 'img-ball ball-grey',
        src_w: $,
        src: F
      }),
      e(L, {
        className: 'img-ball ball-color',
        src_w: es,
        src: Ye
      }),
      e('img', {
        alt: 'bonus',
        className: 'img-ball bonus-img',
        onClick: i,
        src: H
      }),
      e('div', {
        className: 'left',
        children: t('div', {
          className: 'wrap',
          children: [
            e('p', {
              className: 'tit',
              dangerouslySetInnerHTML: {
                __html: s('common.signup.desc5')
              }
            }),
            e('p', {
              className: 'desc',
              children: s('common.signup.desc6')
            }),
            e('img', {
              alt: 'bonus',
              onClick: i,
              className: 'm-bonus-img',
              src: H
            }),
            e(p, {
              type: 'conic',
              onClick: i,
              children: c.login ? s('common.signup.desc8') : s('common.signup.desc7')
            })
          ]
        })
      })
    ]
  })
}),
ns = u(function () {
  const s = N(),
  a = c.login ? [
    T
  ] : [
    ss,
    T
  ],
  i = b.exports.useMemo(() =>({
    '--grid-num': s && a.length > 1 ? 1.2 : 1
  }), [
    a.length
  ]),
  {
    scrollNode: o,
    prevEnable: l,
    nextEnable: r,
    slide: m
  }
  = ae({
    className: 'slide-list',
    data: a,
    style: i,
    renderItem(x, U) {
      return e(x, {
      }, U)
    }
  });
  return t('div', {
    className: ts,
    children: [
      !s && a.length > 1 && t(X, {
        children: [
          e('div', {
            className: 'slide-btn slide-prev',
            children: e(p, {
              onClick: () =>m( - 1),
              disabled: !l,
              children: e(B, {
                name: 'Arrow'
              })
            })
          }),
          e('div', {
            className: 'slide-btn slide-next',
            children: e(p, {
              onClick: () =>m(1),
              disabled: !r,
              children: e(B, {
                name: 'Arrow'
              })
            })
          })
        ]
      }),
      o
    ]
  })
}),
ts = 'f14mfal0',
z = 'c16jsxqw';
function as() {
  const n = h(),
  s = C().bestData,
  a = C().recommendData;
  return t('div', {
    className: g(is),
    children: [
      e(De, {
      }),
      t('div', {
        className: g('home-container page-max-width-wrap'),
        children: [
          e(Ve, {
          }),
          e(Xe, {
          }),
          e(I, {
            source: s,
            line: 1,
            showPlayBtn: 2,
            className: 'best-list',
            loop: 0,
            title: n('page.gamelist.betofgame')
          }),
          e(ee, {
          }),
          e(se, {
          }),
          e(ns, {
          }),
          e(I, {
            source: a,
            showPlayBtn: 1,
            line: 1,
            className: 'recommend-list',
            loop: 0,
            title: n('game.slots.recommend_list')
          })
        ]
      })
    ]
  })
}
const is = 's16lovai';
function us() {
  return b.exports.useEffect(() =>{
    K('home_page')
  }, [
  ]),
  e(as, {
  })
}
const hs = ({
  ctx: n
}) =>({
  bannerData: ie(n.lang),
  profitData: ce(),
  bestData: M({
    sectionId: 'home_best'
  }),
  recommendData: M({
    sectionId: 'home_recommend'
  })
});
export {
  us as Page,
  hs as onPageData
};
