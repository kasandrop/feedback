import {
  a as e,
  j as n,
  R as y,
  r as p,
  F as L
}
from'../../../chunk-29b7dcec.js';
import {
  d as Q,
  a4 as de,
  Q as ue,
  F as he
}
from'../../../chunk-6d75bbd0.js';
import {
  H as Y,
  G as S,
  x as g,
  n as c,
  w as C,
  u as h,
  a as M,
  aa as pe,
  J as I,
  z as J,
  ak as ge,
  E as G,
  o as A,
  L as f,
  j as fe,
  h as ve,
  N as $,
  T as q,
  a5 as k,
  ag as we,
  aQ as P,
  a7 as X,
  P as Ne,
  ad as Se,
  ae as ye,
  l as be,
  K as Z,
  at as ee
}
from'../../../chunk-020bd373.js';
import {
  u as R,
  a as N,
  b as ae,
  G as te
}
from'../../../chunk-a12e2092.js';
import {
  c as F,
  x as re,
  y as se,
  a as z,
  h as U,
  z as xe
}
from'../../../chunk-4a04a0b4.js';
import {
  g as ze,
  R as Ie,
  P as ke,
  C as Ce
}
from'../../../chunk-55f5a04e.js';
import {
  u as Pe
}
from'../../../chunk-6577d736.js';
import {
  D as ne
}
from'../../../chunk-31e12747.js';
import {
  i as Ge,
  j as _e,
  k as Le,
  g as E
}
from'../../../chunk-2d95dd32.js';
import {
  a as $e
}
from'../../../chunk-13cbc225.js';
import '../../../chunk-c3a08f60.js';
import '../../../chunk-d612c08a.js';
function Re({
  item: a,
  isColumn: t
}) {
  return e('div', {
    className: c('media-box', t && 'media-colum'),
    children: a.mediaType === 'video' && a.videoURL ? e('video', {
      poster: a.imageURL,
      src: a.videoURL,
      controls: !0,
      height: '100%',
      width: 'auto'
    }) : e('img', {
      src: a.imageURL,
      alt: ''
    })
  })
}
function Ue(a) {
  const t = F.isMobile();
  return n('div', {
    className: qe,
    children: [
      e('div', {
        className: 'test'
      }),
      e(S, {
        className: 'close-btn',
        children: e(g, {
          name: 'Close',
          onClick: () =>Y.close()
        })
      }),
      e(re, {
        spaceBetween: t ? 0 : 20,
        slidesPerView: 440 / 320,
        centeredSlides: !0,
        initialSlide: a.curIndex,
        navigation: {
          prevEl: '.navigation-prev-photoview',
          nextEl: '.navigation-next-photoview'
        },
        pagination: {
          el: '.swiper-photoview-pagination'
        },
        children: a.imglist.map((r, s) =>e(se, {
          children: e(Re, {
            item: r,
            isColumn: a.isColumn
          })
        }, s))
      }),
      e(S, {
        className: c('navigation-prev-photoview btn-photoview prev'),
        children: e(g, {
          name: 'Arrow'
        })
      }),
      e(S, {
        className: c('navigation-next-photoview btn-photoview next'),
        children: e(g, {
          name: 'Arrow'
        })
      }),
      e('div', {
        className: c(De, 'swiper-photoview-pagination')
      })
    ]
  })
}
function Te(a, t, r) {
  return Y.push(e(Ue, {
    imglist: a,
    isColumn: r,
    curIndex: t
  }), {
    closeable: !0
  })
}
const qe = 's1ag4umz',
De = 'pv9xjo3';
const Me = C(function ({
  makeUrl: t
}) {
  const r = h(),
  s = M(),
  i = R(),
  o = async() =>{
    if (!z.login) {
      s('#/login');
      return
    }
    if (z.vipLevel < 4) {
      I(r('page.vip.unlock', '4'));
      return
    }
    const l = await de('');
    !l || U.post('/comment/add/', {
      content: l.content,
      gameUnique: i
    }).then(u=>{
      s(t({
        page: 1,
        force: !0
      }))
    }).catch(I)
  };
  return n('div', {
    className: Ae,
    children: [
      e(pe, {
        children: z.login && e(Q, {
          userId: z.userId,
          name: z.name
        })
      }),
      n('button', {
        className: 'comment-input-btn',
        onClick: o,
        children: [
          e('p', {
            children: r('page.comment.deliver')
          }),
          e(g, {
            name: 'Emjoy'
          })
        ]
      })
    ]
  })
}),
Ae = 'c1lai1bo',
Fe = y.memo(function ({
  comment: t,
  deleteComment: r
}) {
  const s = p.exports.useRef( - 1),
  i = R(),
  [
    o,
    l
  ] = J(ze(t)),
  u = p.exports.useCallback(m=>{
    s.current < 0 && (s.current = 1, U.post('/comment/reply/list/', {
      commentId: t.commentId,
      page: 1,
      pageSize: 20
    }).then(d=>{
      d && (d.list.length > 3 ? (ge.push(e(Ie, {
        gameUnique: i,
        deleteFn: () =>r(),
        replyHttpInfo: d,
        commentId: t.commentId
      })), m(!1)) : (l({
        replyList: d.list
      }), m(!0)))
    }).catch(I).finally(() =>s.current = - 1))
  }, [
  ]);
  return e(ke, {
    gameUnique: i,
    commentInfo: o.comment,
    replyInfoList: o.replyList,
    deleteComment: r,
    inPop: !1,
    getAllReplies: u
  })
});
const je = y.memo(function ({
  loading: t,
  comment: r,
  nextHref: s,
  deleteComment: i
}) {
  const o = h(),
  l = r ? r.list || [
  ] : [
  ];
  if (!r || l.length === 0) return e('div', {
    className: Be,
    children: e(G, {
    })
  });
  const u = r.totalPage - r.page;
  return e('div', {
    className: Ee,
    children: n('div', {
      className: 'overflow-inner',
      children: [
        l.map((m, d) =>e(Fe, {
          deleteComment: () =>i(d),
          comment: m
        }, `${ m.commentId }-${ d }`)),
        u > 0 && e('div', {
          className: 'loading-more',
          children: t ? e(A, {
          }) : s && n(f, {
            className: 'more-link',
            href: s,
            children: [
              e('p', {
                children: o('page.comment.viewmore')
              }),
              e(g, {
                name: 'Arrow'
              })
            ]
          })
        })
      ]
    })
  })
}),
Be = 'l1pm6qv9',
Ee = 'c1g37ya0';
const We = y.memo(function () {
  const t = h(),
  r = fe(),
  {
    urlParsed: s
  }
  = ve(),
  i = s.search.sort || 'createTime',
  {
    gameComment: o
  }
  = N(),
  [
    l,
    u
  ] = p.exports.useTransition(),
  [
    m,
    d
  ] = p.exports.useState(o),
  w = m.read(),
  v = p.exports.useRef(null);
  v.current = p.exports.useMemo(() =>{
    const b = v.current;
    return b && w.page !== 1 && w.list.unshift(...b.list),
    w
  }, [
    w
  ]);
  function x(b) {
    b.force && (b.force = Date.now());
    const B = {
      ...s.search,
      ...b
    };
    return b.force || delete B.force,
    `${ s.pathname }?${ new URLSearchParams(B).toString() }`
  }
  p.exports.useEffect(() =>{
    o !== m && u(() =>{
      d(o)
    })
  }, [
    o
  ]);
  const _ = v.current,
  me = b=>{
    _.list.splice(b, 1),
    _.total -= 1,
    v.current = {
      ..._
    },
    r()
  };
  return n('div', {
    className: c(Oe, 'comment-wrap'),
    children: [
      n('div', {
        className: 'comment-num-title',
        children: [
          e('div', {
            className: 'cut-l tit',
            children: e('p', {
              children: t('common.comments')
            })
          }),
          n(Ce, {
            iconElement: e(g, {
              name: 'Tighten'
            }),
            children: [
              e(f, {
                className: c('click-pop-item', i === 'createTime' && 'select'),
                href: x({
                  sort: 'createTime',
                  page: 1,
                  force: !0
                }),
                children: t('page.comment.newest')
              }),
              e(f, {
                className: c('click-pop-item', i === 'replyCount' && 'select'),
                href: x({
                  sort: 'replyCount',
                  page: 1,
                  force: !0
                }),
                children: t('page.comment.top')
              }),
              e(f, {
                className: c('click-pop-item', i === 'likeCount' && 'select'),
                href: x({
                  sort: 'likeCount',
                  page: 1,
                  force: !0
                }),
                children: t('page.comment.likes')
              })
            ]
          })
        ]
      }),
      e(Me, {
        makeUrl: x
      }),
      e(je, {
        deleteComment: me,
        loading: l,
        nextHref: w.page < w.totalPage ? x({
          page: w.page + 1
        }) : void 0,
        comment: _
      })
    ]
  })
}),
Oe = 'cvn95ea';
function ie() {
  return e(p.exports.Suspense, {
    fallback: e(A, {
    }),
    children: e(We, {
    })
  })
}
function He() {
  const a = h();
  return {
    rtpDes: {
      color: 'color_2',
      label: a('game.title.rtp'),
      isPercent: !0,
      order: 1
    },
    providerName: {
      label: a('title.provider'),
      order: 2
    },
    maxWin: {
      color: 'color_2',
      label: a('title.max.win'),
      order: 3
    },
    subType: {
      label: a('common.type'),
      order: 4
    },
    reelDesign: {
      label: a('common.reel.design'),
      order: 5
    },
    hitRate: {
      label: a('game.title.hit.rate'),
      color: 'color_2',
      isPercent: !0,
      order: 6
    },
    freeSpins: {
      label: a('game.title.free.spins'),
      order: 7,
      isSpin: !0
    },
    supportMobile: {
      label: a('common.mobile'),
      order: 8
    },
    volatility: {
      label: a('common.volatility'),
      color: 'color_3',
      isVolatility: !0,
      order: 9
    },
    winWays: {
      label: a('common.win.ways'),
      order: 10
    },
    stakeRange: {
      label: a('common.stakes.range'),
      color: 'color_2',
      order: 11
    }
  }
}
const j = y.memo(function ({
  data: t
}) {
  const r = h(),
  s = He(),
  i = Object.keys(t);
  return n('div', {
    className: c('props-info', Qe),
    children: [
      e('div', {
        className: 'tit',
        children: r('common.game.info')
      }),
      e('div', {
        className: 'info-list',
        children: i.map((o, l) =>e(Ke, {
          config: s[o],
          val: t[o]
        }, l))
      })
    ]
  })
});
function Ve(a, t) {
  if (t === null) return '--';
  if (a.isVolatility) switch (t) {
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    default:
      return 'High'
  } else return a.isSpin ? t > 0 ? 'Yes' : 'No' : typeof t == 'boolean' ? t ? 'Yes' : 'No' : a.isPercent ? t + '%' : String(t)
}
function Ke({
  config: a,
  val: t = 'null'
}) {
  if (!a) return null;
  const r = a.label,
  s = a.order,
  i = t === null,
  o = a.color && !i ? a.color : '';
  return n('div', {
    className: c('info-item', i && 'disabled'),
    style: {
      order: s
    },
    children: [
      e('div', {
        className: 'label',
        children: r
      }),
      e('div', {
        className: c('val', o),
        children: Ve(a, t)
      })
    ]
  })
}
const Qe = 's1mhd57s';
function W({
  show: a,
  setShow: t
}) {
  const r = h();
  return n('div', {
    className: c('cl-primary show-btn', a && 'more'),
    onClick: t,
    children: [
      r(a ? 'common.show_less' : 'common.show_more'),
      ' ',
      e(g, {
        name: 'Arrow'
      })
    ]
  })
}
function Ye({
  showComments: a,
  onSetComments: t,
  isSmall: r
}) {
  const s = h(),
  i = $(),
  o = N().gameInfo.read(),
  [
    l,
    u
  ] = J({
    show: !1
  }),
  m = p.exports.useCallback(() =>{
    u({
      show: !l.show
    })
  }, [
    l.show
  ]),
  d = o.releaseTime > 0 ? new Date(o.releaseTime).toLocaleDateString() : '--';
  if (i) {
    const w = {
      providerName: o.providerName,
      supportMobile: o.supportMobile,
      ...o.slotsInfo
    },
    v = o.details.length > 300;
    return n('div', {
      className: aa,
      children: [
        !v && e(D, {
          details: o.details
        }),
        n(q, {
          visible: l.show,
          className: l.show ? '' : 'mark',
          minHeight: v ? 200 : 0,
          children: [
            v && e(D, {
              details: o.details
            }),
            e(j, {
              data: w
            }),
            e(oe, {
              tags: o.tags
            })
          ]
        }),
        n('div', {
          className: 'btns',
          children: [
            e(W, {
              show: l.show,
              setShow: m
            }),
            o.categoryId === 18 && e(f, {
              className: 'info-btn',
              href: `/game/${ o.gameUnique }/detail`,
              children: s('page.game.moreinfo')
            })
          ]
        })
      ]
    })
  }
  return n('div', {
    className: c(ea, r && 'child-small-screen'),
    children: [
      n('div', {
        className: 'game-info',
        children: [
          e(k, {
            className: 'game-banner',
            src: o.thumbnail,
            args: 'w=200',
            alt: ''
          }),
          n('div', {
            className: 'desc',
            children: [
              e('div', {
                className: 'name',
                children: o.fullName
              }),
              e('div', {
                className: 'relate',
                children: n('div', {
                  className: 'provider',
                  children: [
                    'By ',
                    e(f, {
                      href: `/provider/${ o.providerName }`,
                      children: o.providerName
                    })
                  ]
                })
              }),
              n('div', {
                className: 'release',
                children: [
                  s('common.release'),
                  d
                ]
              })
            ]
          }),
          e(f, {
            className: 'info-btn',
            href: `/game/${ o.gameUnique }/detail`,
            children: s('page.game.moreinfo')
          })
        ]
      }),
      e(q, {
        visible: l.show,
        children: e(Je, {
          isSmall: r
        })
      }),
      n('div', {
        className: 'option',
        children: [
          e(W, {
            show: l.show,
            setShow: m
          }),
          n('div', {
            className: 'comments',
            children: [
              s('common.comments'),
              e(we, {
                type: 'rangeslider',
                onChange: t,
                value: a
              })
            ]
          })
        ]
      })
    ]
  })
}
function Je({
  isSmall: a
}) {
  const t = N().gameInfo.read(),
  r = {
    providerName: t.providerName,
    supportMobile: t.supportMobile,
    ...t.slotsInfo
  };
  return n('div', {
    className: c(a && 'child-small-screen', Ze),
    children: [
      e('div', {
        className: 'left-cont',
        children: e(j, {
          data: r
        })
      }),
      e('div', {
        className: 'right-cont',
        children: n('div', {
          className: 'cont-scroll',
          children: [
            e(oe, {
              tags: t.tags
            }),
            e(D, {
              details: t.details
            })
          ]
        })
      })
    ]
  })
}
function D({
  details: a
}) {
  const t = h();
  if (a.length === 0) return null;
  const r = a.split(/\n/).filter(s=>s);
  return n('div', {
    className: 'about-wrap',
    children: [
      e('div', {
        className: 'tit',
        children: t('page.game.about')
      }),
      e('div', {
        className: 'about-detail',
        children: r.map((s, i) =>e('p', {
          children: P(s)
        }, i))
      })
    ]
  })
}
function oe({
  tags: a
}) {
  const t = h();
  return a ? n('div', {
    className: c('tag-wrap', Xe),
    children: [
      e('div', {
        className: 'tit',
        children: t('page.game.features.tags')
      }),
      e('div', {
        className: 'tag-list',
        children: a.map((r, s) =>e(f, {
          href: `/tagname/${ r }`,
          className: 'tag-item',
          children: r
        }, s))
      })
    ]
  }) : null
}
const Xe = 'stmtvyc',
Ze = 's1t5ushy',
ea = 's6a207h',
aa = 'm1naez7c',
ta = '/assets/white.d03e40c1.png',
ra = [
  {
    filename: '00.png',
    frame: {
      x: 129,
      y: 1,
      w: 123,
      h: 123
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 47,
      y: 48,
      w: 123,
      h: 123
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '01.png',
    frame: {
      x: 1,
      y: 125,
      w: 125,
      h: 126
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 48,
      y: 46,
      w: 125,
      h: 126
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '02.png',
    frame: {
      x: 826,
      y: 268,
      w: 133,
      h: 133
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 42,
      y: 43,
      w: 133,
      h: 133
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '03.png',
    frame: {
      x: 781,
      y: 699,
      w: 152,
      h: 161
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 35,
      y: 28,
      w: 152,
      h: 161
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '04.png',
    frame: {
      x: 314,
      y: 682,
      w: 159,
      h: 158
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 28,
      y: 25,
      w: 159,
      h: 158
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '05.png',
    frame: {
      x: 457,
      y: 531,
      w: 158,
      h: 149
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 24,
      y: 26,
      w: 158,
      h: 149
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '06.png',
    frame: {
      x: 813,
      y: 403,
      w: 143,
      h: 141
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 29,
      y: 32,
      w: 143,
      h: 141
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '07.png',
    frame: {
      x: 128,
      y: 126,
      w: 126,
      h: 126
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 40,
      w: 126,
      h: 126
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '08.png',
    frame: {
      x: 254,
      y: 1,
      w: 123,
      h: 123
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 45,
      y: 42,
      w: 123,
      h: 123
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '09.png',
    frame: {
      x: 256,
      y: 126,
      w: 125,
      h: 126
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 40,
      w: 125,
      h: 126
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '10.png',
    frame: {
      x: 272,
      y: 385,
      w: 132,
      h: 134
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 36,
      y: 35,
      w: 132,
      h: 134
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '11.png',
    frame: {
      x: 617,
      y: 534,
      w: 156,
      h: 150
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 27,
      y: 26,
      w: 156,
      h: 150
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '12.png',
    frame: {
      x: 775,
      y: 546,
      w: 157,
      h: 151
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 32,
      y: 27,
      w: 157,
      h: 151
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '13.png',
    frame: {
      x: 1,
      y: 520,
      w: 148,
      h: 145
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 40,
      y: 34,
      w: 148,
      h: 145
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '14.png',
    frame: {
      x: 552,
      y: 256,
      w: 135,
      h: 132
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 48,
      y: 43,
      w: 135,
      h: 132
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '15.png',
    frame: {
      x: 379,
      y: 1,
      w: 123,
      h: 123
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 46,
      y: 43,
      w: 123,
      h: 123
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '16.png',
    frame: {
      x: 629,
      y: 1,
      w: 123,
      h: 124
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 45,
      y: 41,
      w: 123,
      h: 124
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '17.png',
    frame: {
      x: 383,
      y: 126,
      w: 126,
      h: 126
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 39,
      w: 126,
      h: 126
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '18.png',
    frame: {
      x: 1,
      y: 384,
      w: 134,
      h: 133
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 39,
      y: 31,
      w: 134,
      h: 133
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '19.png',
    frame: {
      x: 475,
      y: 686,
      w: 149,
      h: 158
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 36,
      y: 20,
      w: 149,
      h: 158
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '20.png',
    frame: {
      x: 1,
      y: 670,
      w: 157,
      h: 156
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 29,
      y: 25,
      w: 157,
      h: 156
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '21.png',
    frame: {
      x: 151,
      y: 521,
      w: 157,
      h: 147
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 25,
      y: 32,
      w: 157,
      h: 147
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '22.png',
    frame: {
      x: 406,
      y: 388,
      w: 144,
      h: 138
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 28,
      y: 33,
      w: 144,
      h: 138
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '23.png',
    frame: {
      x: 636,
      y: 127,
      w: 126,
      h: 127
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 40,
      w: 126,
      h: 127
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '24.png',
    frame: {
      x: 754,
      y: 1,
      w: 124,
      h: 124
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 46,
      y: 41,
      w: 124,
      h: 124
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '25.png',
    frame: {
      x: 1,
      y: 1,
      w: 126,
      h: 122
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 44,
      y: 36,
      w: 126,
      h: 122
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '26.png',
    frame: {
      x: 893,
      y: 127,
      w: 129,
      h: 139
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 30,
      w: 129,
      h: 139
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '27.png',
    frame: {
      x: 683,
      y: 390,
      w: 128,
      h: 142
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 32,
      w: 128,
      h: 142
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '28.png',
    frame: {
      x: 552,
      y: 390,
      w: 129,
      h: 139
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 43,
      y: 37,
      w: 129,
      h: 139
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '29.png',
    frame: {
      x: 142,
      y: 254,
      w: 134,
      h: 129
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 41,
      y: 45,
      w: 134,
      h: 129
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '30.png',
    frame: {
      x: 504,
      y: 1,
      w: 123,
      h: 123
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 46,
      y: 43,
      w: 123,
      h: 123
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '31.png',
    frame: {
      x: 764,
      y: 127,
      w: 127,
      h: 127
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 44,
      y: 41,
      w: 127,
      h: 127
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '32.png',
    frame: {
      x: 689,
      y: 256,
      w: 135,
      h: 132
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 41,
      y: 43,
      w: 135,
      h: 132
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '33.png',
    frame: {
      x: 160,
      y: 678,
      w: 152,
      h: 157
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 34,
      y: 26,
      w: 152,
      h: 157
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '34.png',
    frame: {
      x: 626,
      y: 699,
      w: 153,
      h: 159
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 31,
      y: 20,
      w: 153,
      h: 159
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '35.png',
    frame: {
      x: 310,
      y: 528,
      w: 145,
      h: 148
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 31,
      y: 22,
      w: 145,
      h: 148
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '36.png',
    frame: {
      x: 137,
      y: 385,
      w: 133,
      h: 133
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 35,
      y: 28,
      w: 133,
      h: 133
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '37.png',
    frame: {
      x: 880,
      y: 1,
      w: 124,
      h: 124
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 44,
      y: 41,
      w: 124,
      h: 124
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '38.png',
    frame: {
      x: 511,
      y: 127,
      w: 123,
      h: 126
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 51,
      y: 43,
      w: 123,
      h: 126
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '39.png',
    frame: {
      x: 1,
      y: 254,
      w: 139,
      h: 128
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 41,
      y: 41,
      w: 139,
      h: 128
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '40.png',
    frame: {
      x: 278,
      y: 254,
      w: 138,
      h: 129
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 34,
      y: 41,
      w: 138,
      h: 129
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  },
  {
    filename: '41.png',
    frame: {
      x: 418,
      y: 255,
      w: 132,
      h: 131
    },
    rotated: !1,
    trimmed: !0,
    spriteSourceSize: {
      x: 36,
      y: 39,
      w: 132,
      h: 131
    },
    sourceSize: {
      w: 200,
      h: 200
    }
  }
],
sa = {
  app: 'https://www.codeandweb.com/texturepacker',
  version: '1.0',
  image: 'white.png',
  format: 'RGBA8888',
  size: {
    w: 1023,
    h: 861
  },
  scale: '1',
  smartupdate: '$TexturePacker:SmartUpdate:aa4981359266e574e2f23c84c6f00aed:8d37480774902e5f35da9bb049fb5bd7:c794f86960ed6f7dd4dfce5a2714f155$'
},
O = {
  frames: ra,
  meta: sa
},
na = '/assets/black.218e449a.png';
const ia = C(function () {
  const a = F.isDarken ? {
    image: na,
    config: O
  }
   : {
    image: ta,
    config: O
  },
  [
    t
  ] = Pe({
    ...a,
    fps: 12,
    options: {
      repeat: - 1
    }
  });
  return e('div', {
    className: `${ oa } game-loading`,
    children: t
  })
}),
oa = 'w1rla4hh';
function la() {
  const a = ae();
  return a ? e(a.view, {
  }) : e(ia, {
  })
}
const le = y.memo(function ({
  categoryId: t,
  fullName: r,
  gameUnique: s,
  info: i
}) {
  const o = h();
  function l(m) {
    return m === 4 ? {
      label: o('page.common.footer.sports.live'),
      path: '/gamelist/live'
    }
     : m === 18 ? {
      label: o('common.title.bcbrand'),
      path: '/gamelist/brand'
    }
     : {
      label: o('common.slots'),
      path: '/gamelist/slots'
    }
  }
  const u = [
    l(t),
    {
      label: r,
      path: `/game/${ s }`
    }
  ];
  return i && u.push({
    label: o('common.info'),
    path: ''
  }),
  e(ue, {
    list: u
  })
});
function ce({
  hide: a
}) {
  const t = h(),
  {
    introduction: r
  }
  = N().gameIntroduction.read();
  return n('div', {
    className: c(ca, 'game-description'),
    style: {
      display: a ? 'none' : 'block'
    },
    children: [
      e('div', {
        className: 'tit',
        children: t('page.game.about')
      }),
      r === '' ? e(G, {
      }) : e('div', {
        className: 'game-content',
        dangerouslySetInnerHTML: {
          __html: P(r)
        }
      })
    ]
  })
}
const ca = 's155iq4u';
function ma() {
  const a = R();
  return be(() =>{
    (document.scrollingElement || document.body).scrollTop = 0
  }, [
    a
  ]),
  n(te, {
    children: [
      e(pa, {
      }),
      e(da, {
      })
    ]
  }, a)
}
const da = y.memo(function () {
  const t = $(),
  [
    r,
    s
  ] = p.exports.useState(!!t),
  i = X(o=>{
    o.width <= 962 ? s(!0) : s(!1)
  });
  return e('div', {
    className: c(ga, 'page-max-width-wrap', r && 'small-screen'),
    ref: i,
    children: e(ua, {
      isSmall: r
    })
  })
}),
ua = y.memo(function ({
  isSmall: t
}) {
  const r = h(),
  [
    s,
    i
  ] = p.exports.useState(0),
  o = R(),
  l = N(),
  u = l.gameRelated,
  m = l.gameInfo,
  d = p.exports.useCallback(() =>m.read().gameIdentity.gameInfoId, [
    m
  ]),
  w = m.read().fullName,
  [
    v,
    x
  ] = p.exports.useState(!0);
  return n(L, {
    children: [
      e(ha, {
      }),
      e(la, {
      }),
      n('div', {
        className: 'tabs',
        children: [
          e(S, {
            className: c(s === 0 && 'active'),
            onClick: () =>i(0),
            children: w
          }),
          e(S, {
            className: c(s === 1 && 'active'),
            onClick: () =>i(1),
            children: r('common.description')
          })
        ]
      }),
      n('div', {
        style: {
          display: s === 0 ? 'block' : 'none'
        },
        children: [
          e(Ye, {
            showComments: v,
            onSetComments: () =>x(!v),
            isSmall: t
          }),
          n('div', {
            className: 'game-data',
            children: [
              n('div', {
                className: c('left-data', !v && 'full-data'),
                children: [
                  e(he, {
                    source: u,
                    originalId: d,
                    className: 'related-games',
                    line: 1,
                    title: r('page.gamelist.relatedgame'),
                    link: `/gamelist/game-related?gameUnique=${ o }`
                  }),
                  e('div', {
                    className: 'latest-tit',
                    children: r('common.latestbet')
                  }),
                  e('div', {
                    className: 'latest',
                    children: e(Ne, {
                      id: `tabs-${ o }`
                    })
                  })
                ]
              }),
              v && e('div', {
                className: 'right-data',
                children: e(ie, {
                })
              })
            ]
          })
        ]
      }),
      e(ce, {
        hide: s === 0
      })
    ]
  })
});
function ha() {
  const a = N().gameInfo.read();
  return n('div', {
    className: fa,
    children: [
      e(le, {
        gameUnique: a.gameUnique,
        categoryId: a.categoryId,
        fullName: a.fullName
      }),
      a.categoryId !== 18 && n('div', {
        className: 'provider',
        children: [
          e('span', {
            className: 'tit_by',
            children: ' By '
          }),
          e(f, {
            href: `/provider/${ a.providerName }`,
            className: 'under_txt',
            children: a.providerName
          })
        ]
      })
    ]
  })
}
function pa() {
  const a = N().gameInfo.read();
  return e(ne, {
    disabled: a.disabled,
    name: a.fullName
  })
}
const ga = 's1o3yrjt';
Se({
  cl1: [
    '#99a4b0',
    ye('#5f6975', 0.8)
  ],
  cl2: [
    '#f5f6f7',
    '#7BC514'
  ]
});
const fa = 't1tuhu22';
const va = C(function ({
  logo: t,
  logo_w: r
}) {
  const s = Z();
  return e(k, {
    src: s ? t : r,
    args: 'w=200',
    alt: ''
  })
}),
wa = y.memo(function () {
  const t = h(),
  r = N().gameInfo.read(),
  s = r.providerInfo;
  return n('div', {
    className: Na,
    children: [
      e('div', {
        className: 'tit',
        children: t('page.game.about.provider')
      }),
      n('div', {
        className: 'provider-wrap',
        children: [
          e('div', {
            className: 'provider-banner',
            children: e(va, {
              logo: s.logo,
              logo_w: s.logoWhite
            })
          }),
          e('div', {
            className: 'provider-introduce',
            dangerouslySetInnerHTML: {
              __html: P(s.introduction)
            }
          }),
          n(f, {
            href: `/provider/${ r.providerName }`,
            className: 'opt-btn',
            children: [
              s.totalGame,
              ' ',
              t('title.games'),
              ' ',
              e(g, {
                name: 'Arrow'
              })
            ]
          }),
          e(f, {
            href: `/provider/${ r.providerName }`,
            className: 'opt-btn',
            children: t('page.game.moreinfo')
          })
        ]
      })
    ]
  })
}),
Na = 's19bzmt9';
function H({
  num: a,
  size: t,
  activeNum: r = 0
}) {
  return e('div', {
    className: c('star-wrap', za),
    children: new Array(5).fill(null).map((s, i) =>e(g, {
      className: c(t, r - 1 >= i && 'active', i >= a && 'hide'),
      name: 'Favorites1'
    }, i))
  })
}
function Sa({
  gameUnique: a,
  myScore: t,
  setUpdate: r
}) {
  const [s,
  i] = p.exports.useState(0),
  [
    o,
    l
  ] = p.exports.useState(!1),
  u = h(),
  m = p.exports.useCallback(function (d) {
    if (t === d) return;
    if (o) return !1;
    if (z.vipLevel < 4) {
      I(u('page.vip.unlock', '4'));
      return
    }
    l(!0);
    const w = u('common.game.feedback');
    U.post('/comment/star/tap/', {
      gameUnique: a,
      rank: d
    }).then(v=>{
      I(w),
      l(!1),
      r(d)
    }).catch(v=>{
      l(!1),
      I(v)
    })
  }, [
    t
  ]);
  return e('div', {
    className: c('star-wrap', Ia),
    children: [
      1,
      2,
      3,
      4,
      5
    ].map(d=>e(g, {
      onMouseEnter: () =>i(d),
      onClick: () =>m(d),
      onMouseLeave: () =>i(0),
      className: c(t >= d && 'active', s >= d && 'active', s > 0 && d > s && d <= t && 'disactive', 'big'),
      name: t >= d || s >= d ? 'Favorites1' : 'Star'
    }, d))
  })
}
function ya(a) {
  return new Array(5).fill(null).map((t, r) =>{
    var s;
    return {
      star: 5 - r,
      percent: (s = a[`${ 5 - r }`]) != null ? s : '0'
    }
  })
}
function ba(a) {
  return U.post('/comment/star/scores/', {
    gameUnique: a
  })
}
const xa = C(function ({
  gameUnique: t
}) {
  const r = h(),
  s = z.login,
  [
    i,
    o
  ] = p.exports.useState(0),
  {
    data: l,
    error: u
  }
  = ee(() =>ba(t), [
    s,
    i
  ]);
  return u ? n('div', {
    className: T,
    children: [
      e('div', {
        className: 'tit',
        children: r('common.ratings')
      }),
      e('div', {
        className: 'ratings-wrap',
        style: {
          height: '250px'
        },
        children: e(G, {
          children: u.message
        })
      })
    ]
  }) : l ? n('div', {
    className: T,
    children: [
      e('div', {
        className: 'tit',
        children: r('common.ratings')
      }),
      n('div', {
        className: 'ratings-wrap',
        children: [
          n('div', {
            className: 'top-wrap',
            children: [
              n('div', {
                className: 'game-star',
                children: [
                  n('div', {
                    className: 'grade-num',
                    children: [
                      e('span', {
                        className: 'avg',
                        children: l.avg ? Number(l.avg).toFixed(1) : 0
                      }),
                      e('span', {
                        className: 'm-txt',
                        children: '/5'
                      })
                    ]
                  }),
                  n('div', {
                    className: '',
                    children: [
                      e(H, {
                        num: 5,
                        activeNum: Math.ceil(Number(l.avg))
                      }),
                      e('div', {
                        className: 'txt',
                        children: 'out of 5'
                      })
                    ]
                  })
                ]
              }),
              e('div', {
                className: 'star-progress',
                children: ya(l.scores).map((m, d) =>n('div', {
                  className: 'progress-item',
                  children: [
                    e(H, {
                      num: m.star,
                      size: 'small'
                    }),
                    e('div', {
                      className: 'progress-bg',
                      children: e('div', {
                        className: 'progress',
                        style: {
                          width: m.percent + '%'
                        }
                      })
                    })
                  ]
                }, d))
              })
            ]
          }),
          n('div', {
            className: 'bottom-wrap',
            children: [
              n('div', {
                className: 'rate-game',
                children: [
                  e('div', {
                    className: 'txt',
                    title: r('page.game.rate.game'),
                    children: r('page.game.rate.game')
                  }),
                  e(Sa, {
                    gameUnique: t,
                    myScore: l.my,
                    setUpdate: o
                  })
                ]
              }),
              n('div', {
                className: 'rate-user',
                children: [
                  e('div', {
                    className: 'user-avatar',
                    children: l.users.map(m=>e(Q, {
                      userId: m,
                      name: ''
                    }, m))
                  }),
                  n('div', {
                    className: 'rate-num',
                    children: [
                      l.count,
                      ' ',
                      r('common.ratings')
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  }) : n('div', {
    className: T,
    children: [
      e('div', {
        className: 'tit',
        children: r('common.ratings')
      }),
      e('div', {
        className: 'ratings-wrap',
        style: {
          height: '200px'
        },
        children: e(A, {
        })
      })
    ]
  })
}),
T = 'srd866k',
za = 'si7w5jc',
Ia = 'hhpyzpd';
function V({
  gameId: a
}) {
  const t = h(),
  r = N().gameDetailsRelated.read();
  return Z(),
  n('div', {
    className: ka,
    children: [
      e('div', {
        className: 'tit',
        children: t('page.gamelist.relatedgame')
      }),
      n('div', {
        className: 'related-wrap',
        children: [
          !r.pageList && e(G, {
          }),
          r.pageList && r.pageList.list.map((s, i) =>n('div', {
            className: 'related-item',
            children: [
              e(f, {
                href: `/game/${ s.gameUnique }`,
                className: 'img-link',
                children: e(k, {
                  src: s.thumbnail,
                  args: 'w=100',
                  alt: ''
                })
              }),
              n('div', {
                className: 'game-info',
                children: [
                  e(f, {
                    href: `/game/${ s.gameUnique }`,
                    className: 'name',
                    title: s.fullName,
                    children: s.fullName
                  }),
                  n('div', {
                    className: 'provider',
                    children: [
                      'By ',
                      e(f, {
                        className: 'provider-name',
                        title: s.providerName,
                        href: `/provider/${ s.providerName }`,
                        children: s.providerName
                      })
                    ]
                  })
                ]
              }),
              n('div', {
                className: 'user-inr',
                children: [
                  n('div', {
                    className: 'star-wrap',
                    children: [
                      e('div', {
                        className: 'star cl-primary',
                        children: s.rateScore.toFixed(1)
                      }),
                      new Array(5).fill(null).map((o, l) =>e(g, {
                        className: c(s.rateScore - 1 >= l && 'active'),
                        name: 'Favorites1'
                      }, l))
                    ]
                  }),
                  n('div', {
                    children: [
                      s.rateNum,
                      ' ',
                      t('common.ratings')
                    ]
                  })
                ]
              })
            ]
          }, i))
        ]
      }),
      n(f, {
        href: `/gamelist/game-next/?gameUnique=${ a }`,
        className: 'related-opt cl-primary',
        children: [
          t('common.showall'),
          ' ',
          e(g, {
            name: 'Arrow'
          })
        ]
      })
    ]
  })
}
const ka = 's1v06qay';
const Ca = C(function () {
  const t = ae(),
  r = h(),
  s = M();
  if (!t) return null;
  const i = t.gameActions,
  o = i.likeNum > 999 ? (i.likeNum / 1000).toFixed(1) + 'k' : i.likeNum,
  l = i.favoriteNum > 999 ? (i.favoriteNum / 1000).toFixed(1) + 'k' : i.favoriteNum;
  return n('div', {
    className: $a,
    children: [
      n(S, {
        className: c('game-opt-item like', i.like && 'active'),
        onClick: () =>i.doChange('like'),
        children: [
          n('div', {
            className: 'opt-wrap',
            children: [
              e(g, {
                name: 'Like'
              }),
              e('div', {
                children: o
              })
            ]
          }),
          e('div', {
            className: 'sub-tit',
            children: r('page.user.profile.likes')
          })
        ]
      }),
      n(S, {
        className: c('game-opt-item favorite', i.favorite && 'active'),
        onClick: () =>i.doChange('favorite'),
        children: [
          n('div', {
            className: 'opt-wrap',
            children: [
              e(g, {
                name: 'Favorites1'
              }),
              e('div', {
                children: l
              })
            ]
          }),
          e('div', {
            className: 'sub-tit',
            children: r('common.favorites')
          })
        ]
      }),
      n(S, {
        className: 'game-opt-item',
        onClick: () =>{
          s(`#/social_share/${ i.game.gameUnique }`)
        },
        children: [
          e('div', {
            className: 'opt-wrap',
            children: e(g, {
              name: 'Send',
              className: 'send-icon'
            })
          }),
          e('div', {
            className: 'sub-tit',
            children: r('page.share.shareBtn')
          })
        ]
      })
    ]
  })
});
function Pa({
  desc: a,
  fullName: t
}) {
  const [r,
  s] = p.exports.useState(!1),
  i = h();
  return a.length === 0 ? null : a.length <= 300 ? n(L, {
    children: [
      n('div', {
        className: 'tit-reviews',
        children: [
          t,
          ' ',
          i('common.reviews')
        ]
      }),
      e('div', {
        className: c(K),
        children: e('div', {
          className: 'txt-cont',
          children: P(a)
        })
      })
    ]
  }) : n(L, {
    children: [
      n('div', {
        className: 'tit-reviews',
        children: [
          t,
          ' ',
          i('common.reviews')
        ]
      }),
      n('div', {
        className: c(K, r && 'show-all'),
        children: [
          e(q, {
            visible: r,
            minHeight: 21 * 3 + 2,
            children: e('div', {
              className: 'txt-cont',
              children: P(a)
            })
          }),
          n('div', {
            className: 'show-btn cl-primary',
            onClick: () =>s(!r),
            children: [
              i(r ? 'common.show_less' : 'common.show_more'),
              ' ',
              e(g, {
                name: 'Arrow'
              })
            ]
          })
        ]
      })
    ]
  })
}
function Ga() {
  const a = h(),
  t = M(),
  r = $(),
  s = N().gameInfo.read(),
  i = s.releaseTime > 0 ? new Date(s.releaseTime).toLocaleDateString() : '--';
  return n('div', {
    className: La,
    children: [
      e('div', {
        className: 'bg-img-wrap',
        children: e(k, {
          className: 'game-banner',
          src: s.thumbnail,
          args: 'w=100&cs=tinysrgb&blur=50',
          alt: ''
        })
      }),
      n('div', {
        className: 'container',
        children: [
          n('div', {
            className: 'game-header',
            children: [
              e(k, {
                className: 'game-banner',
                src: s.thumbnail,
                args: 'w=200',
                alt: ''
              }),
              n('div', {
                className: 'desc',
                children: [
                  n('div', {
                    className: 'name',
                    children: [
                      n('div', {
                        className: 'txt',
                        children: [
                          s.fullName,
                          ' '
                        ]
                      }),
                      !r && e(S, {
                        className: 'info-btn',
                        type: 'conic',
                        onClick: () =>t(`/game/${ s.gameUnique }`),
                        children: a('common.playnow')
                      })
                    ]
                  }),
                  n('div', {
                    className: 'relate',
                    children: [
                      n('div', {
                        className: 'provider',
                        children: [
                          'By ',
                          e(f, {
                            href: `/provider/${ s.providerName }`,
                            children: s.providerName
                          })
                        ]
                      }),
                      n('div', {
                        className: 'release',
                        children: [
                          a('common.release'),
                          ' ',
                          i
                        ]
                      }),
                      e(Ca, {
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          r && e(S, {
            className: 'info-btn',
            type: 'conic',
            onClick: () =>t(`/game/${ s.gameUnique }`),
            children: a('common.playnow')
          }),
          e('div', {
            className: 'game-desc-wrap',
            children: e(Pa, {
              desc: s.details,
              fullName: s.fullName
            })
          }),
          e(_a, {
          })
        ]
      })
    ]
  })
}
function _a() {
  const a = h(),
  t = N().gameInfo.read(),
  r = F.isMobile() && t.landscapePreviews && t.landscapePreviews.length > 0,
  s = r ? t.landscapePreviews : t.previews;
  return s.length === 0 ? null : n('div', {
    className: Ra,
    children: [
      n('div', {
        className: 'tit-wrap',
        children: [
          e('div', {
            className: 'tit',
            children: a('common.game.preview')
          }),
          e(S, {
            className: c('navigation-prev-gameinfo-banner gameinfo-swiper-btn prev'),
            children: e(g, {
              name: 'Arrow'
            })
          }),
          e(S, {
            className: c('navigation-next-gameinfo-banner gameinfo-swiper-btn next'),
            children: e(g, {
              name: 'Arrow'
            })
          })
        ]
      }),
      n('div', {
        className: 'cont',
        children: [
          e(re, {
            autoplay: {
              delay: 10000,
              disableOnInteraction: !1,
              pauseOnMouseEnter: !0
            },
            loop: !0,
            speed: 1000,
            threshold: 6,
            slidesPerView: 'auto',
            spaceBetween: 10,
            loopedSlides: 2,
            navigation: {
              prevEl: '.navigation-prev-gameinfo-banner',
              nextEl: '.navigation-next-gameinfo-banner'
            },
            pagination: {
              el: '.swiper-gameinfo-banner-pagination'
            },
            children: s.map((i, o) =>e(se, {
              className: c(r && 'media-colum'),
              onClick: () =>Te(s, o, r),
              children: e('div', {
                className: 'media-box',
                children: e(k, {
                  src: i.imageURL,
                  args: 'w=600',
                  alt: ''
                })
              })
            }, o))
          }),
          e('div', {
            className: c(Ua, 'swiper-gameinfo-banner-pagination')
          })
        ]
      })
    ]
  })
}
const La = 's1vypnac',
K = 'du4blza',
$a = 'lk16df5',
Ra = 'b1oznhu5',
Ua = 'p157jipt';
const Ta = y.memo(function () {
  const t = N().gameInfo.read(),
  r = h();
  return n('div', {
    className: qa,
    children: [
      e('div', {
        className: 'tit',
        children: r('page.game.features.tags')
      }),
      (!t.tags || t.tags.length === 0) && e(G, {
      }),
      t.tags && t.tags.length > 0 && e('div', {
        className: 'tag-list',
        children: t.tags.map((s, i) =>e(f, {
          href: `/tagname/${ s }`,
          className: 'tag-item',
          children: s
        }, i))
      })
    ]
  })
}),
qa = 't1kuyu0k';
const Da = C(function ({
  fullName: t
}) {
  const r = h(),
  {
    data: s
  }
  = ee(() =>xe({
    title: t,
    content: 'I Love This Game!'
  }));
  return n('div', {
    className: Ma,
    children: [
      e('p', {
        className: 'share-title tit',
        children: r('game.share.game')
      }),
      e('div', {
        className: 'share-list',
        children: s && s.filter(i=>i.src).slice(0, 8).map((i, o) =>e('a', {
          href: i.src,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: c('share-item', o > 2 && 'disabled'),
          children: e('img', {
            className: 'icon',
            src: i.icon
          })
        }, o))
      })
    ]
  })
}),
Ma = 'smq8f59';
function st() {
  return n(te, {
    children: [
      e(ja, {
      }),
      e(Aa, {
      })
    ]
  })
}
const Aa = function () {
  const t = $(),
  [
    r,
    s
  ] = p.exports.useState(!!t),
  i = X(o=>{
    o.width <= 962 ? s(!0) : s(!1)
  });
  return e('div', {
    className: c(Ba, 'page-max-width-wrap', r && 'small-screen'),
    ref: i,
    children: e(Fa, {
      isSmall: r
    })
  })
},
Fa = y.memo(function ({
  isSmall: t
}) {
  const r = N().gameInfo.read(),
  s = {
    providerName: r.providerName,
    supportMobile: r.supportMobile,
    ...r.slotsInfo
  };
  return n(L, {
    children: [
      n('div', {
        className: 'left-cont',
        children: [
          e(le, {
            gameUnique: r.gameUnique,
            categoryId: r.categoryId,
            fullName: r.fullName,
            info: !0
          }),
          e(Ga, {
          }),
          e(j, {
            data: s
          }),
          e(xa, {
            gameUnique: r.gameUnique
          }),
          e(wa, {
          }),
          t && e(V, {
            gameId: r.gameUnique
          }),
          e(ce, {
          })
        ]
      }),
      n('div', {
        className: 'right-cont',
        children: [
          e(Ta, {
          }),
          !t && e(V, {
            gameId: r.gameUnique
          }),
          e(Da, {
            fullName: r.fullName
          }),
          e(ie, {
          })
        ]
      })
    ]
  })
});
function ja() {
  const a = N().gameInfo.read();
  return e(ne, {
    disabled: a.disabled,
    name: a.fullName
  })
}
const Ba = 'sb0llw7';
function Ea() {
  return e(ma, {
  })
}
const Wa = ({
  ctx: a
}) =>{
  const {
    urlParsed: t,
    routeParams: r,
    lang: s
  }
  = a,
  i = parseInt(t.search.page || '1'),
  o = t.search.sort || 'createTime',
  l = r.gameUnique,
  u = Ge(l);
  return {
    gameInfo: u,
    gameComment: _e(l, i, o),
    gameIntroduction: Le(l),
    gameRelated: E({
      gameUnique: l,
      sectionId: 'game_related'
    }),
    gameDetailsRelated: E({
      gameUnique: l,
      sectionId: 'game_next',
      pageSize: 4
    }),
    documentProps: u.then(m=>({
      ...$e(s, m.fullName, m.providerName, m.slotsInfo.rtpDes, m.tags),
      keywords: m.seoKeywords
    }))
  }
},
Oa = async a=>a.routeParams.gameUnique === 'crash-trenball' ? {
  pageContext: {
    redirectTo: '/game/crash?type=trenball'
  }
}
 : {
  pageContext: {
  }
},
nt = Object.freeze(Object.defineProperty({
  __proto__: null,
  Page: Ea,
  onPageData: Wa,
  onBeforeRender: Oa
}, Symbol.toStringTag, {
  value: 'Module'
}));
export {
  st as G,
  Oa as a,
  nt as i,
  Wa as o
};
