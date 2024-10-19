import {
  a as s,
  c as V,
  h as d,
  v as Y,
  i as O,
  x as J,
  y as Z,
  z as F,
  A as ee,
  r as N,
  B as te,
  C as ne,
  g as ae,
  s as E,
  T as le,
  D as ue,
  E as re,
  o as ie,
  j as oe,
  k as M,
  d as se,
} from './index.135e7b8b.js'
import {
  b as j,
  c as ce,
  d as de,
  e as fe,
  a as ve,
  Q as A,
} from './use-router-link.d67972ef.js'
import { b as be } from './render.f1930b0f.js'
const me = { size: { type: [String, Number], default: '1em' }, color: String }
function ge(e) {
  return {
    cSize: s(() => (e.size in j ? `${j[e.size]}px` : e.size)),
    classes: s(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  }
}
var ye = V({
  name: 'QSpinner',
  props: { ...me, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: n, classes: l } = ge(e)
    return () =>
      d(
        'svg',
        {
          class: l.value + ' q-spinner-mat',
          width: n.value,
          height: n.value,
          viewBox: '25 25 50 50',
        },
        [
          d('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      )
  },
})
function he(e, n) {
  const l = e.style
  for (const r in n) l[r] = n[r]
}
function ke(e, n = 250) {
  let l = !1,
    r
  return function () {
    return (
      l === !1 &&
        ((l = !0),
        setTimeout(() => {
          l = !1
        }, n),
        (r = e.apply(this, arguments))),
      r
    )
  }
}
function K(e, n, l, r) {
  l.modifiers.stop === !0 && F(e)
  const i = l.modifiers.color
  let h = l.modifiers.center
  h = h === !0 || r === !0
  const m = document.createElement('span'),
    c = document.createElement('span'),
    x = ee(e),
    { left: B, top: q, width: k, height: a } = n.getBoundingClientRect(),
    g = Math.sqrt(k * k + a * a),
    f = g / 2,
    p = `${(k - g) / 2}px`,
    u = h ? p : `${x.left - B - f}px`,
    v = `${(a - g) / 2}px`,
    R = h ? v : `${x.top - q - f}px`
  ;(c.className = 'q-ripple__inner'),
    he(c, {
      height: `${g}px`,
      width: `${g}px`,
      transform: `translate3d(${u},${R},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (m.className = `q-ripple${i ? ' text-' + i : ''}`),
    m.setAttribute('dir', 'ltr'),
    m.appendChild(c),
    n.appendChild(m)
  const T = () => {
    m.remove(), clearTimeout(L)
  }
  l.abort.push(T)
  let L = setTimeout(() => {
    c.classList.add('q-ripple__inner--enter'),
      (c.style.transform = `translate3d(${p},${v},0) scale3d(1,1,1)`),
      (c.style.opacity = 0.2),
      (L = setTimeout(() => {
        c.classList.remove('q-ripple__inner--enter'),
          c.classList.add('q-ripple__inner--leave'),
          (c.style.opacity = 0),
          (L = setTimeout(() => {
            m.remove(), l.abort.splice(l.abort.indexOf(T), 1)
          }, 275))
      }, 250))
  }, 50)
}
function D(e, { modifiers: n, value: l, arg: r }) {
  const i = Object.assign({}, e.cfg.ripple, n, l)
  e.modifiers = {
    early: i.early === !0,
    stop: i.stop === !0,
    center: i.center === !0,
    color: i.color || r,
    keyCodes: [].concat(i.keyCodes || 13),
  }
}
var pe = Y({
  name: 'ripple',
  beforeMount(e, n) {
    const l = n.instance.$.appContext.config.globalProperties.$q.config || {}
    if (l.ripple === !1) return
    const r = {
      cfg: l,
      enabled: n.value !== !1,
      modifiers: {},
      abort: [],
      start(i) {
        r.enabled === !0 &&
          i.qSkipRipple !== !0 &&
          i.type === (r.modifiers.early === !0 ? 'pointerdown' : 'click') &&
          K(i, e, r, i.qKeyEvent === !0)
      },
      keystart: ke((i) => {
        r.enabled === !0 &&
          i.qSkipRipple !== !0 &&
          O(i, r.modifiers.keyCodes) === !0 &&
          i.type === `key${r.modifiers.early === !0 ? 'down' : 'up'}` &&
          K(i, e, r, !0)
      }, 300),
    }
    D(r, n),
      (e.__qripple = r),
      J(r, 'main', [
        [e, 'pointerdown', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ])
  },
  updated(e, n) {
    if (n.oldValue !== n.value) {
      const l = e.__qripple
      l !== void 0 &&
        ((l.enabled = n.value !== !1),
        l.enabled === !0 && Object(n.value) === n.value && D(l, n))
    }
  },
  beforeUnmount(e) {
    const n = e.__qripple
    n !== void 0 &&
      (n.abort.forEach((l) => {
        l()
      }),
      Z(n, 'main'),
      delete e._qripple)
  },
})
const I = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  qe = Object.keys(I),
  xe = { align: { type: String, validator: (e) => qe.includes(e) } }
function Ee(e) {
  return s(() => {
    const n =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align
    return `${e.vertical === !0 ? 'items' : 'justify'}-${I[n]}`
  })
}
const Q = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  we = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  Ce = ['button', 'submit', 'reset'],
  _e = /[^\s]\/[^\s]/,
  Be = ['flat', 'outline', 'push', 'unelevated']
function Le(e, n) {
  return e.flat === !0
    ? 'flat'
    : e.outline === !0
    ? 'outline'
    : e.push === !0
    ? 'push'
    : e.unelevated === !0
    ? 'unelevated'
    : n
}
const Se = {
    ...ce,
    ...de,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...Be.reduce((e, n) => (e[n] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...xe.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  },
  $e = { ...Se, round: Boolean }
function Te(e) {
  const n = fe(e, we),
    l = Ee(e),
    {
      hasRouterLink: r,
      hasLink: i,
      linkTag: h,
      linkAttrs: m,
      navigateOnClick: c,
    } = ve({ fallbackTag: 'button' }),
    x = s(() => {
      const u = e.fab === !1 && e.fabMini === !1 ? n.value : {}
      return e.padding !== void 0
        ? Object.assign({}, u, {
            padding: e.padding
              .split(/\s+/)
              .map((v) => (v in Q ? Q[v] + 'px' : v))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : u
    }),
    B = s(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    q = s(() => e.disable !== !0 && e.loading !== !0),
    k = s(() => (q.value === !0 ? e.tabindex || 0 : -1)),
    a = s(() => Le(e, 'standard')),
    g = s(() => {
      const u = { tabindex: k.value }
      return (
        i.value === !0
          ? Object.assign(u, m.value)
          : Ce.includes(e.type) === !0 && (u.type = e.type),
        h.value === 'a'
          ? (e.disable === !0
              ? (u['aria-disabled'] = 'true')
              : u.href === void 0 && (u.role = 'button'),
            r.value !== !0 && _e.test(e.type) === !0 && (u.type = e.type))
          : e.disable === !0 &&
            ((u.disabled = ''), (u['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(u, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        u
      )
    }),
    f = s(() => {
      let u
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (u = `text-${e.textColor || e.color}`)
          : (u = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (u = `text-${e.textColor}`)
      const v =
        e.round === !0
          ? 'round'
          : `rectangle${
              B.value === !0
                ? ' q-btn--rounded'
                : e.square === !0
                ? ' q-btn--square'
                : ''
            }`
      return (
        `q-btn--${a.value} q-btn--${v}` +
        (u !== void 0 ? ' ' + u : '') +
        (q.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
          ? ' disabled'
          : '') +
        (e.fab === !0
          ? ' q-btn--fab'
          : e.fabMini === !0
          ? ' q-btn--fab-mini'
          : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      )
    }),
    p = s(
      () =>
        l.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    )
  return {
    classes: f,
    style: x,
    innerClasses: p,
    attributes: g,
    hasLink: i,
    linkTag: h,
    navigateOnClick: c,
    isActionable: q,
  }
}
const { passiveCapture: b } = ue
let w = null,
  C = null,
  _ = null
var Pe = V({
  name: 'QBtn',
  props: {
    ...$e,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: n, emit: l }) {
    const { proxy: r } = ae(),
      {
        classes: i,
        style: h,
        innerClasses: m,
        attributes: c,
        hasLink: x,
        linkTag: B,
        navigateOnClick: q,
        isActionable: k,
      } = Te(e),
      a = N(null),
      g = N(null)
    let f = null,
      p,
      u = null
    const v = s(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      R = s(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: x.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      T = s(() => ({ center: e.round })),
      L = s(() => {
        const t = Math.max(0, Math.min(100, e.percentage))
        return t > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${t - 100}%)`,
            }
          : {}
      }),
      W = s(() => {
        if (e.loading === !0)
          return {
            onMousedown: $,
            onTouchstart: $,
            onClick: $,
            onKeydown: $,
            onKeyup: $,
          }
        if (k.value === !0) {
          const t = { onClick: z, onKeydown: U, onMousedown: G }
          if (r.$q.platform.has.touch === !0) {
            const o = e.onTouchstart !== void 0 ? '' : 'Passive'
            t[`onTouchstart${o}`] = X
          }
          return t
        }
        return { onClick: E }
      }),
      H = s(() => ({
        ref: a,
        class: 'q-btn q-btn-item non-selectable no-outline ' + i.value,
        style: h.value,
        ...c.value,
        ...W.value,
      }))
    function z(t) {
      if (a.value !== null) {
        if (t !== void 0) {
          if (t.defaultPrevented === !0) return
          const o = document.activeElement
          if (
            e.type === 'submit' &&
            o !== document.body &&
            a.value.contains(o) === !1 &&
            o.contains(a.value) === !1
          ) {
            a.value.focus()
            const P = () => {
              document.removeEventListener('keydown', E, !0),
                document.removeEventListener('keyup', P, b),
                a.value !== null && a.value.removeEventListener('blur', P, b)
            }
            document.addEventListener('keydown', E, !0),
              document.addEventListener('keyup', P, b),
              a.value.addEventListener('blur', P, b)
          }
        }
        q(t)
      }
    }
    function U(t) {
      a.value !== null &&
        (l('keydown', t),
        O(t, [13, 32]) === !0 &&
          C !== a.value &&
          (C !== null && S(),
          t.defaultPrevented !== !0 &&
            (a.value.focus(),
            (C = a.value),
            a.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', y, !0),
            a.value.addEventListener('blur', y, b)),
          E(t)))
    }
    function X(t) {
      a.value !== null &&
        (l('touchstart', t),
        t.defaultPrevented !== !0 &&
          (w !== a.value &&
            (w !== null && S(),
            (w = a.value),
            (f = t.target),
            f.addEventListener('touchcancel', y, b),
            f.addEventListener('touchend', y, b)),
          (p = !0),
          u !== null && clearTimeout(u),
          (u = setTimeout(() => {
            ;(u = null), (p = !1)
          }, 200))))
    }
    function G(t) {
      a.value !== null &&
        ((t.qSkipRipple = p === !0),
        l('mousedown', t),
        t.defaultPrevented !== !0 &&
          _ !== a.value &&
          (_ !== null && S(),
          (_ = a.value),
          a.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', y, b)))
    }
    function y(t) {
      if (
        a.value !== null &&
        !(
          t !== void 0 &&
          t.type === 'blur' &&
          document.activeElement === a.value
        )
      ) {
        if (t !== void 0 && t.type === 'keyup') {
          if (C === a.value && O(t, [13, 32]) === !0) {
            const o = new MouseEvent('click', t)
            ;(o.qKeyEvent = !0),
              t.defaultPrevented === !0 && re(o),
              t.cancelBubble === !0 && F(o),
              a.value.dispatchEvent(o),
              E(t),
              (t.qKeyEvent = !0)
          }
          l('keyup', t)
        }
        S()
      }
    }
    function S(t) {
      const o = g.value
      t !== !0 &&
        (w === a.value || _ === a.value) &&
        o !== null &&
        o !== document.activeElement &&
        (o.setAttribute('tabindex', -1), o.focus()),
        w === a.value &&
          (f !== null &&
            (f.removeEventListener('touchcancel', y, b),
            f.removeEventListener('touchend', y, b)),
          (w = f = null)),
        _ === a.value &&
          (document.removeEventListener('mouseup', y, b), (_ = null)),
        C === a.value &&
          (document.removeEventListener('keyup', y, !0),
          a.value !== null && a.value.removeEventListener('blur', y, b),
          (C = null)),
        a.value !== null && a.value.classList.remove('q-btn--active')
    }
    function $(t) {
      E(t), (t.qSkipRipple = !0)
    }
    return (
      te(() => {
        S(!0)
      }),
      Object.assign(r, {
        click: (t) => {
          k.value === !0 && z(t)
        },
      }),
      () => {
        let t = []
        e.icon !== void 0 &&
          t.push(
            d(A, {
              name: e.icon,
              left: e.stack !== !0 && v.value === !0,
              role: 'img',
            })
          ),
          v.value === !0 && t.push(d('span', { class: 'block' }, [e.label])),
          (t = be(n.default, t)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            t.push(
              d(A, {
                name: e.iconRight,
                right: e.stack !== !0 && v.value === !0,
                role: 'img',
              })
            )
        const o = [d('span', { class: 'q-focus-helper', ref: g })]
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            o.push(
              d(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [
                  d('span', {
                    class: 'q-btn__progress-indicator fit block',
                    style: L.value,
                  }),
                ]
              )
            ),
          o.push(
            d(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  m.value,
              },
              t
            )
          ),
          e.loading !== null &&
            o.push(
              d(le, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      d(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        n.loading !== void 0 ? n.loading() : [d(ye)]
                      ),
                    ]
                  : null
              )
            ),
          ne(d(B.value, H.value, o), [[pe, R.value, void 0, T.value]])
        )
      }
    )
  },
})
const Re = {
    class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
  },
  Ne = Object.assign(
    { name: 'ErrorNotFound' },
    {
      __name: 'ErrorNotFound',
      setup(e) {
        return (n, l) => (
          ie(),
          oe('div', Re, [
            M('div', null, [
              l[0] ||
                (l[0] = M(
                  'div',
                  { style: { 'font-size': '30vh' } },
                  ' 404 ',
                  -1
                )),
              l[1] ||
                (l[1] = M(
                  'div',
                  { class: 'text-h2', style: { opacity: '.4' } },
                  ' Oops. Nothing here... ',
                  -1
                )),
              se(Pe, {
                class: 'q-mt-xl',
                color: 'white',
                'text-color': 'blue',
                unelevated: '',
                to: '/',
                label: 'Go Home',
                'no-caps': '',
              }),
            ]),
          ])
        )
      },
    }
  )
export { Ne as default }
