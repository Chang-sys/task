import {
  c as g,
  m as r,
  p as a,
  a as i,
  h as p,
  q as h,
  u as d,
  g as f,
  o as m,
  b as y,
  w as x,
  k as v,
} from './index.135e7b8b.js'
import { h as C } from './render.f1930b0f.js'
var _ = g({
    name: 'QPage',
    props: { padding: Boolean, styleFn: Function },
    setup(s, { slots: o }) {
      const {
          proxy: { $q: t },
        } = f(),
        e = r(h, a)
      if (e === a)
        return console.error('QPage needs to be a deep child of QLayout'), a
      if (r(d, a) === a)
        return console.error('QPage needs to be child of QPageContainer'), a
      const c = i(() => {
          const n =
            (e.header.space === !0 ? e.header.size : 0) +
            (e.footer.space === !0 ? e.footer.size : 0)
          if (typeof s.styleFn == 'function') {
            const u =
              e.isContainer.value === !0
                ? e.containerHeight.value
                : t.screen.height
            return s.styleFn(n, u)
          }
          return {
            minHeight:
              e.isContainer.value === !0
                ? e.containerHeight.value - n + 'px'
                : t.screen.height === 0
                ? n !== 0
                  ? `calc(100vh - ${n}px)`
                  : '100vh'
                : t.screen.height - n + 'px',
          }
        }),
        l = i(() => `q-page${s.padding === !0 ? ' q-layout-padding' : ''}`)
      return () => p('main', { class: l.value, style: c.value }, C(o.default))
    },
  }),
  P = '/task/assets/quasar-logo-vertical.55e9c854.svg'
const F = Object.assign(
  { name: 'IndexPage' },
  {
    __name: 'IndexPage',
    setup(s) {
      return (o, t) => (
        m(),
        y(
          _,
          { class: 'flex flex-center' },
          {
            default: x(
              () =>
                t[0] ||
                (t[0] = [
                  v(
                    'img',
                    {
                      alt: 'Quasar logo',
                      src: P,
                      style: { width: '200px', height: '200px' },
                    },
                    null,
                    -1
                  ),
                ])
            ),
            _: 1,
          }
        )
      )
    },
  }
)
export { F as default }
