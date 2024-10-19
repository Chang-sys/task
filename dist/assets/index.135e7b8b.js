/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ts(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const ne = {},
  It = [],
  $e = () => {},
  Bo = () => !1,
  On = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  As = (e) => e.startsWith('onUpdate:'),
  ae = Object.assign,
  Os = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Vo = Object.prototype.hasOwnProperty,
  Q = (e, t) => Vo.call(e, t),
  H = Array.isArray,
  Lt = (e) => Mn(e) === '[object Map]',
  ii = (e) => Mn(e) === '[object Set]',
  B = (e) => typeof e == 'function',
  ue = (e) => typeof e == 'string',
  pt = (e) => typeof e == 'symbol',
  le = (e) => e !== null && typeof e == 'object',
  oi = (e) => (le(e) || B(e)) && B(e.then) && B(e.catch),
  li = Object.prototype.toString,
  Mn = (e) => li.call(e),
  Uo = (e) => Mn(e).slice(8, -1),
  ci = (e) => Mn(e) === '[object Object]',
  Ms = (e) =>
    ue(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Wt = Ts(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  In = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Ko = /-(\w)/g,
  Le = In((e) => e.replace(Ko, (t, n) => (n ? n.toUpperCase() : ''))),
  Wo = /\B([A-Z])/g,
  Rt = In((e) => e.replace(Wo, '-$1').toLowerCase()),
  Ln = In((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Wn = In((e) => (e ? `on${Ln(e)}` : '')),
  dt = (e, t) => !Object.is(e, t),
  qn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  ai = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    })
  },
  qo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  zo = (e) => {
    const t = ue(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Zs
const kn = () =>
  Zs ||
  (Zs =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {})
function Is(e) {
  if (H(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ue(s) ? Yo(s) : Is(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ue(e) || le(e)) return e
}
const Go = /;(?![^(]*\))/g,
  Jo = /:([^]+)/,
  Qo = /\/\*[^]*?\*\//g
function Yo(e) {
  const t = {}
  return (
    e
      .replace(Qo, '')
      .split(Go)
      .forEach((n) => {
        if (n) {
          const s = n.split(Jo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Ls(e) {
  let t = ''
  if (ue(e)) t = e
  else if (H(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ls(e[n])
      s && (t += s + ' ')
    }
  else if (le(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Xo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Zo = Ts(Xo)
function ui(e) {
  return !!e || e === ''
}
const fi = (e) => !!(e && e.__v_isRef === !0),
  el = (e) =>
    ue(e)
      ? e
      : e == null
      ? ''
      : H(e) || (le(e) && (e.toString === li || !B(e.toString)))
      ? fi(e)
        ? el(e.value)
        : JSON.stringify(e, di, 2)
      : String(e),
  di = (e, t) =>
    fi(t)
      ? di(e, t.value)
      : Lt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[zn(s, i) + ' =>'] = r), n),
            {}
          ),
        }
      : ii(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => zn(n)) }
      : pt(t)
      ? zn(t)
      : le(t) && !H(t) && !ci(t)
      ? String(t)
      : t,
  zn = (e, t = '') => {
    var n
    return pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ae
class tl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ae),
      !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Ae
      try {
        return (Ae = this), t()
      } finally {
        Ae = n
      }
    }
  }
  on() {
    Ae = this
  }
  off() {
    Ae = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function nl() {
  return Ae
}
let ie
const Gn = new WeakSet()
class hi {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ae && Ae.active && Ae.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Gn.has(this) && (Gn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || gi(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), er(this), mi(this)
    const t = ie,
      n = He
    ;(ie = this), (He = !0)
    try {
      return this.fn()
    } finally {
      _i(this), (ie = t), (He = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ns(t)
      ;(this.deps = this.depsTail = void 0),
        er(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Gn.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty()
  }
  runIfDirty() {
    us(this) && this.run()
  }
  get dirty() {
    return us(this)
  }
}
let pi = 0,
  qt,
  zt
function gi(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = zt), (zt = e)
    return
  }
  ;(e.next = qt), (qt = e)
}
function ks() {
  pi++
}
function Fs() {
  if (--pi > 0) return
  if (zt) {
    let t = zt
    for (zt = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; qt; ) {
    let t = qt
    for (qt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function mi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function _i(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    s.version === -1 ? (s === n && (n = r), Ns(s), sl(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (vi(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function vi(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === en)
  )
    return
  e.globalVersion = en
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !us(e))) {
    e.flags &= -3
    return
  }
  const n = ie,
    s = He
  ;(ie = e), (He = !0)
  try {
    mi(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || dt(r, e._value)) && ((e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;(ie = n), (He = s), _i(e), (e.flags &= -3)
  }
}
function Ns(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) Ns(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function sl(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let He = !0
const bi = []
function gt() {
  bi.push(He), (He = !1)
}
function mt() {
  const e = bi.pop()
  He = e === void 0 ? !0 : e
}
function er(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = ie
    ie = void 0
    try {
      t()
    } finally {
      ie = n
    }
  }
}
let en = 0
class rl {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class $s {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!ie || !He || ie === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== ie)
      (n = this.activeLink = new rl(ie, this)),
        ie.deps
          ? ((n.prevDep = ie.depsTail),
            (ie.depsTail.nextDep = n),
            (ie.depsTail = n))
          : (ie.deps = ie.depsTail = n),
        yi(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;(s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = ie.depsTail),
        (n.nextDep = void 0),
        (ie.depsTail.nextDep = n),
        (ie.depsTail = n),
        ie.deps === n && (ie.deps = s)
    }
    return n
  }
  trigger(t) {
    this.version++, en++, this.notify(t)
  }
  notify(t) {
    ks()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      Fs()
    }
  }
}
function yi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) yi(s)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const fs = new WeakMap(),
  Et = Symbol(''),
  ds = Symbol(''),
  tn = Symbol('')
function me(e, t, n) {
  if (He && ie) {
    let s = fs.get(e)
    s || fs.set(e, (s = new Map()))
    let r = s.get(n)
    r || (s.set(n, (r = new $s())), (r.map = s), (r.key = n)), r.track()
  }
}
function Ze(e, t, n, s, r, i) {
  const o = fs.get(e)
  if (!o) {
    en++
    return
  }
  const c = (l) => {
    l && l.trigger()
  }
  if ((ks(), t === 'clear')) o.forEach(c)
  else {
    const l = H(e),
      h = l && Ms(n)
    if (l && n === 'length') {
      const u = Number(s)
      o.forEach((f, p) => {
        ;(p === 'length' || p === tn || (!pt(p) && p >= u)) && c(f)
      })
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(tn)), t)
      ) {
        case 'add':
          l ? h && c(o.get('length')) : (c(o.get(Et)), Lt(e) && c(o.get(ds)))
          break
        case 'delete':
          l || (c(o.get(Et)), Lt(e) && c(o.get(ds)))
          break
        case 'set':
          Lt(e) && c(o.get(Et))
          break
      }
  }
  Fs()
}
function At(e) {
  const t = q(e)
  return t === e ? t : (me(t, 'iterate', tn), De(e) ? t : t.map(be))
}
function Hs(e) {
  return me((e = q(e)), 'iterate', tn), e
}
const il = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jn(this, Symbol.iterator, be)
  },
  concat(...e) {
    return At(this).concat(...e.map((t) => (H(t) ? At(t) : t)))
  },
  entries() {
    return Jn(this, 'entries', (e) => ((e[1] = be(e[1])), e))
  },
  every(e, t) {
    return Qe(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Qe(this, 'filter', e, t, (n) => n.map(be), arguments)
  },
  find(e, t) {
    return Qe(this, 'find', e, t, be, arguments)
  },
  findIndex(e, t) {
    return Qe(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Qe(this, 'findLast', e, t, be, arguments)
  },
  findLastIndex(e, t) {
    return Qe(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Qe(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Qn(this, 'includes', e)
  },
  indexOf(...e) {
    return Qn(this, 'indexOf', e)
  },
  join(e) {
    return At(this).join(e)
  },
  lastIndexOf(...e) {
    return Qn(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Qe(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Bt(this, 'pop')
  },
  push(...e) {
    return Bt(this, 'push', e)
  },
  reduce(e, ...t) {
    return tr(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return tr(this, 'reduceRight', e, t)
  },
  shift() {
    return Bt(this, 'shift')
  },
  some(e, t) {
    return Qe(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Bt(this, 'splice', e)
  },
  toReversed() {
    return At(this).toReversed()
  },
  toSorted(e) {
    return At(this).toSorted(e)
  },
  toSpliced(...e) {
    return At(this).toSpliced(...e)
  },
  unshift(...e) {
    return Bt(this, 'unshift', e)
  },
  values() {
    return Jn(this, 'values', be)
  },
}
function Jn(e, t, n) {
  const s = Hs(e),
    r = s[t]()
  return (
    s !== e &&
      !De(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return i.value && (i.value = n(i.value)), i
      })),
    r
  )
}
const ol = Array.prototype
function Qe(e, t, n, s, r, i) {
  const o = Hs(e),
    c = o !== e && !De(e),
    l = o[t]
  if (l !== ol[t]) {
    const f = l.apply(e, i)
    return c ? be(f) : f
  }
  let h = n
  o !== e &&
    (c
      ? (h = function (f, p) {
          return n.call(this, be(f), p, e)
        })
      : n.length > 2 &&
        (h = function (f, p) {
          return n.call(this, f, p, e)
        }))
  const u = l.call(o, h, s)
  return c && r ? r(u) : u
}
function tr(e, t, n, s) {
  const r = Hs(e)
  let i = n
  return (
    r !== e &&
      (De(e)
        ? n.length > 3 &&
          (i = function (o, c, l) {
            return n.call(this, o, c, l, e)
          })
        : (i = function (o, c, l) {
            return n.call(this, o, be(c), l, e)
          })),
    r[t](i, ...s)
  )
}
function Qn(e, t, n) {
  const s = q(e)
  me(s, 'iterate', tn)
  const r = s[t](...n)
  return (r === -1 || r === !1) && Bs(n[0]) ? ((n[0] = q(n[0])), s[t](...n)) : r
}
function Bt(e, t, n = []) {
  gt(), ks()
  const s = q(e)[t].apply(e, n)
  return Fs(), mt(), s
}
const ll = Ts('__proto__,__v_isRef,__isVue'),
  wi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(pt)
  )
function cl(e) {
  pt(e) || (e = String(e))
  const t = q(this)
  return me(t, 'has', e), t.hasOwnProperty(e)
}
class xi {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? vl : Ri) : i ? Ci : Si).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = H(t)
    if (!r) {
      let l
      if (o && (l = il[n])) return l
      if (n === 'hasOwnProperty') return cl
    }
    const c = Reflect.get(t, n, _e(t) ? t : s)
    return (pt(n) ? wi.has(n) : ll(n)) || (r || me(t, 'get', n), i)
      ? c
      : _e(c)
      ? o && Ms(n)
        ? c
        : c.value
      : le(c)
      ? r
        ? Ti(c)
        : Dt(c)
      : c
  }
}
class Ei extends xi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._isShallow) {
      const l = St(i)
      if (
        (!De(s) && !St(s) && ((i = q(i)), (s = q(s))), !H(t) && _e(i) && !_e(s))
      )
        return l ? !1 : ((i.value = s), !0)
    }
    const o = H(t) && Ms(n) ? Number(n) < t.length : Q(t, n),
      c = Reflect.set(t, n, s, _e(t) ? t : r)
    return (
      t === q(r) && (o ? dt(s, i) && Ze(t, 'set', n, s) : Ze(t, 'add', n, s)), c
    )
  }
  deleteProperty(t, n) {
    const s = Q(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && Ze(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!pt(n) || !wi.has(n)) && me(t, 'has', n), s
  }
  ownKeys(t) {
    return me(t, 'iterate', H(t) ? 'length' : Et), Reflect.ownKeys(t)
  }
}
class al extends xi {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const ul = new Ei(),
  fl = new al(),
  dl = new Ei(!0)
const hs = (e) => e,
  pn = (e) => Reflect.getPrototypeOf(e)
function hl(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = q(r),
      o = Lt(i),
      c = e === 'entries' || (e === Symbol.iterator && o),
      l = e === 'keys' && o,
      h = r[e](...s),
      u = n ? hs : t ? ps : be
    return (
      !t && me(i, 'iterate', l ? ds : Et),
      {
        next() {
          const { value: f, done: p } = h.next()
          return p
            ? { value: f, done: p }
            : { value: c ? [u(f[0]), u(f[1])] : u(f), done: p }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function gn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function pl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = q(i),
        c = q(r)
      e || (dt(r, c) && me(o, 'get', r), me(o, 'get', c))
      const { has: l } = pn(o),
        h = t ? hs : e ? ps : be
      if (l.call(o, r)) return h(i.get(r))
      if (l.call(o, c)) return h(i.get(c))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return !e && me(q(r), 'iterate', Et), Reflect.get(r, 'size', r)
    },
    has(r) {
      const i = this.__v_raw,
        o = q(i),
        c = q(r)
      return (
        e || (dt(r, c) && me(o, 'has', r), me(o, 'has', c)),
        r === c ? i.has(r) : i.has(r) || i.has(c)
      )
    },
    forEach(r, i) {
      const o = this,
        c = o.__v_raw,
        l = q(c),
        h = t ? hs : e ? ps : be
      return (
        !e && me(l, 'iterate', Et),
        c.forEach((u, f) => r.call(i, h(u), h(f), o))
      )
    },
  }
  return (
    ae(
      n,
      e
        ? {
            add: gn('add'),
            set: gn('set'),
            delete: gn('delete'),
            clear: gn('clear'),
          }
        : {
            add(r) {
              !t && !De(r) && !St(r) && (r = q(r))
              const i = q(this)
              return (
                pn(i).has.call(i, r) || (i.add(r), Ze(i, 'add', r, r)), this
              )
            },
            set(r, i) {
              !t && !De(i) && !St(i) && (i = q(i))
              const o = q(this),
                { has: c, get: l } = pn(o)
              let h = c.call(o, r)
              h || ((r = q(r)), (h = c.call(o, r)))
              const u = l.call(o, r)
              return (
                o.set(r, i),
                h ? dt(i, u) && Ze(o, 'set', r, i) : Ze(o, 'add', r, i),
                this
              )
            },
            delete(r) {
              const i = q(this),
                { has: o, get: c } = pn(i)
              let l = o.call(i, r)
              l || ((r = q(r)), (l = o.call(i, r))), c && c.call(i, r)
              const h = i.delete(r)
              return l && Ze(i, 'delete', r, void 0), h
            },
            clear() {
              const r = q(this),
                i = r.size !== 0,
                o = r.clear()
              return i && Ze(r, 'clear', void 0, void 0), o
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = hl(r, e, t)
    }),
    n
  )
}
function Ds(e, t) {
  const n = pl(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(Q(n, r) && r in s ? n : s, r, i)
}
const gl = { get: Ds(!1, !1) },
  ml = { get: Ds(!1, !0) },
  _l = { get: Ds(!0, !1) }
const Si = new WeakMap(),
  Ci = new WeakMap(),
  Ri = new WeakMap(),
  vl = new WeakMap()
function bl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function yl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bl(Uo(e))
}
function Dt(e) {
  return St(e) ? e : js(e, !1, ul, gl, Si)
}
function Pi(e) {
  return js(e, !1, dl, ml, Ci)
}
function Ti(e) {
  return js(e, !0, fl, _l, Ri)
}
function js(e, t, n, s, r) {
  if (!le(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = yl(e)
  if (o === 0) return e
  const c = new Proxy(e, o === 2 ? s : n)
  return r.set(e, c), c
}
function Gt(e) {
  return St(e) ? Gt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function St(e) {
  return !!(e && e.__v_isReadonly)
}
function De(e) {
  return !!(e && e.__v_isShallow)
}
function Bs(e) {
  return e ? !!e.__v_raw : !1
}
function q(e) {
  const t = e && e.__v_raw
  return t ? q(t) : e
}
function Fn(e) {
  return !Q(e, '__v_skip') && Object.isExtensible(e) && ai(e, '__v_skip', !0), e
}
const be = (e) => (le(e) ? Dt(e) : e),
  ps = (e) => (le(e) ? Ti(e) : e)
function _e(e) {
  return e ? e.__v_isRef === !0 : !1
}
function Ai(e) {
  return Oi(e, !1)
}
function wl(e) {
  return Oi(e, !0)
}
function Oi(e, t) {
  return _e(e) ? e : new xl(e, t)
}
class xl {
  constructor(t, n) {
    ;(this.dep = new $s()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : be(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || De(t) || St(t)
    ;(t = s ? t : q(t)),
      dt(t, n) &&
        ((this._rawValue = t),
        (this._value = s ? t : be(t)),
        this.dep.trigger())
  }
}
function kt(e) {
  return _e(e) ? e.value : e
}
const El = {
  get: (e, t, n) => (t === '__v_raw' ? e : kt(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return _e(r) && !_e(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Mi(e) {
  return Gt(e) ? e : new Proxy(e, El)
}
class Sl {
  constructor(t, n, s) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new $s(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = en - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ie !== this))
      return gi(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return vi(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function Cl(e, t, n = !1) {
  let s, r
  return B(e) ? (s = e) : ((s = e.get), (r = e.set)), new Sl(s, r, n)
}
const mn = {},
  En = new WeakMap()
let wt
function Rl(e, t = !1, n = wt) {
  if (n) {
    let s = En.get(n)
    s || En.set(n, (s = [])), s.push(e)
  }
}
function Pl(e, t, n = ne) {
  const {
      immediate: s,
      deep: r,
      once: i,
      scheduler: o,
      augmentJob: c,
      call: l,
    } = n,
    h = (O) => (r ? O : De(O) || r === !1 || r === 0 ? et(O, 1) : et(O))
  let u,
    f,
    p,
    g,
    x = !1,
    T = !1
  if (
    (_e(e)
      ? ((f = () => e.value), (x = De(e)))
      : Gt(e)
      ? ((f = () => h(e)), (x = !0))
      : H(e)
      ? ((T = !0),
        (x = e.some((O) => Gt(O) || De(O))),
        (f = () =>
          e.map((O) => {
            if (_e(O)) return O.value
            if (Gt(O)) return h(O)
            if (B(O)) return l ? l(O, 2) : O()
          })))
      : B(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (p) {
              gt()
              try {
                p()
              } finally {
                mt()
              }
            }
            const O = wt
            wt = u
            try {
              return l ? l(e, 3, [g]) : e(g)
            } finally {
              wt = O
            }
          })
      : (f = $e),
    t && r)
  ) {
    const O = f,
      U = r === !0 ? 1 / 0 : r
    f = () => et(O(), U)
  }
  const D = nl(),
    k = () => {
      u.stop(), D && Os(D.effects, u)
    }
  if (i && t) {
    const O = t
    t = (...U) => {
      O(...U), k()
    }
  }
  let M = T ? new Array(e.length).fill(mn) : mn
  const F = (O) => {
    if (!(!(u.flags & 1) || (!u.dirty && !O)))
      if (t) {
        const U = u.run()
        if (r || x || (T ? U.some((te, Z) => dt(te, M[Z])) : dt(U, M))) {
          p && p()
          const te = wt
          wt = u
          try {
            const Z = [U, M === mn ? void 0 : T && M[0] === mn ? [] : M, g]
            l ? l(t, 3, Z) : t(...Z), (M = U)
          } finally {
            wt = te
          }
        }
      } else u.run()
  }
  return (
    c && c(F),
    (u = new hi(f)),
    (u.scheduler = o ? () => o(F, !1) : F),
    (g = (O) => Rl(O, !1, u)),
    (p = u.onStop =
      () => {
        const O = En.get(u)
        if (O) {
          if (l) l(O, 4)
          else for (const U of O) U()
          En.delete(u)
        }
      }),
    t ? (s ? F(!0) : (M = u.run())) : o ? o(F.bind(null, !0), !0) : u.run(),
    (k.pause = u.pause.bind(u)),
    (k.resume = u.resume.bind(u)),
    (k.stop = k),
    k
  )
}
function et(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, _e(e))) et(e.value, t, n)
  else if (H(e)) for (let s = 0; s < e.length; s++) et(e[s], t, n)
  else if (ii(e) || Lt(e))
    e.forEach((s) => {
      et(s, t, n)
    })
  else if (ci(e)) {
    for (const s in e) et(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && et(e[s], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function fn(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Nn(r, t, n)
  }
}
function je(e, t, n, s) {
  if (B(e)) {
    const r = fn(e, t, n, s)
    return (
      r &&
        oi(r) &&
        r.catch((i) => {
          Nn(i, t, n)
        }),
      r
    )
  }
  if (H(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(je(e[i], t, n, s))
    return r
  }
}
function Nn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || ne
  if (t) {
    let c = t.parent
    const l = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; c; ) {
      const u = c.ec
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, l, h) === !1) return
      }
      c = c.parent
    }
    if (i) {
      gt(), fn(i, null, 10, [e, l, h]), mt()
      return
    }
  }
  Tl(e, n, r, s, o)
}
function Tl(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const ye = []
let We = -1
const Ft = []
let lt = null,
  Ot = 0
const Ii = Promise.resolve()
let Sn = null
function Li(e) {
  const t = Sn || Ii
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Al(e) {
  let t = We + 1,
    n = ye.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = ye[s],
      i = nn(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function Vs(e) {
  if (!(e.flags & 1)) {
    const t = nn(e),
      n = ye[ye.length - 1]
    !n || (!(e.flags & 2) && t >= nn(n)) ? ye.push(e) : ye.splice(Al(t), 0, e),
      (e.flags |= 1),
      ki()
  }
}
function ki() {
  Sn || (Sn = Ii.then(Ni))
}
function Ol(e) {
  H(e)
    ? Ft.push(...e)
    : lt && e.id === -1
    ? lt.splice(Ot + 1, 0, e)
    : e.flags & 1 || (Ft.push(e), (e.flags |= 1)),
    ki()
}
function nr(e, t, n = We + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      ye.splice(n, 1),
        n--,
        s.flags & 4 && (s.flags &= -2),
        s(),
        s.flags & 4 || (s.flags &= -2)
    }
  }
}
function Fi(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)].sort((n, s) => nn(n) - nn(s))
    if (((Ft.length = 0), lt)) {
      lt.push(...t)
      return
    }
    for (lt = t, Ot = 0; Ot < lt.length; Ot++) {
      const n = lt[Ot]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(lt = null), (Ot = 0)
  }
}
const nn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Ni(e) {
  const t = $e
  try {
    for (We = 0; We < ye.length; We++) {
      const n = ye[We]
      n &&
        !(n.flags & 8) &&
        (n.flags & 4 && (n.flags &= -2),
        fn(n, n.i, n.i ? 15 : 14),
        n.flags & 4 || (n.flags &= -2))
    }
  } finally {
    for (; We < ye.length; We++) {
      const n = ye[We]
      n && (n.flags &= -2)
    }
    ;(We = -1),
      (ye.length = 0),
      Fi(),
      (Sn = null),
      (ye.length || Ft.length) && Ni()
  }
}
let Ee = null,
  $i = null
function Cn(e) {
  const t = Ee
  return (Ee = e), ($i = (e && e.type.__scopeId) || null), t
}
function Ml(e, t = Ee, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && dr(-1)
    const i = Cn(t)
    let o
    try {
      o = e(...r)
    } finally {
      Cn(i), s._d && dr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Ju(e, t) {
  if (Ee === null) return e
  const n = Bn(Ee),
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, c, l = ne] = t[r]
    i &&
      (B(i) && (i = { mounted: i, updated: i }),
      i.deep && et(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: c,
        modifiers: l,
      }))
  }
  return e
}
function _t(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const c = r[o]
    i && (c.oldValue = i[o].value)
    let l = c.dir[s]
    l && (gt(), je(l, n, 8, [e.el, c, e, t]), mt())
  }
}
const Il = Symbol('_vte'),
  Hi = (e) => e.__isTeleport,
  ct = Symbol('_leaveCb'),
  _n = Symbol('_enterCb')
function Ll() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    qi(() => {
      e.isMounted = !0
    }),
    zi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Ie = [Function, Array],
  Di = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ie,
    onEnter: Ie,
    onAfterEnter: Ie,
    onEnterCancelled: Ie,
    onBeforeLeave: Ie,
    onLeave: Ie,
    onAfterLeave: Ie,
    onLeaveCancelled: Ie,
    onBeforeAppear: Ie,
    onAppear: Ie,
    onAfterAppear: Ie,
    onAppearCancelled: Ie,
  },
  ji = (e) => {
    const t = e.subTree
    return t.component ? ji(t.component) : t
  },
  kl = {
    name: 'BaseTransition',
    props: Di,
    setup(e, { slots: t }) {
      const n = Mc(),
        s = Ll()
      return () => {
        const r = t.default && Ui(t.default(), !0)
        if (!r || !r.length) return
        const i = Bi(r),
          o = q(e),
          { mode: c } = o
        if (s.isLeaving) return Yn(i)
        const l = sr(i)
        if (!l) return Yn(i)
        let h = gs(l, o, s, n, (p) => (h = p))
        l.type !== xe && sn(l, h)
        const u = n.subTree,
          f = u && sr(u)
        if (f && f.type !== xe && !xt(l, f) && ji(n).type !== xe) {
          const p = gs(f, o, s, n)
          if ((sn(f, p), c === 'out-in' && l.type !== xe))
            return (
              (s.isLeaving = !0),
              (p.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete p.afterLeave
              }),
              Yn(i)
            )
          c === 'in-out' &&
            l.type !== xe &&
            (p.delayLeave = (g, x, T) => {
              const D = Vi(s, f)
              ;(D[String(f.key)] = f),
                (g[ct] = () => {
                  x(), (g[ct] = void 0), delete h.delayedLeave
                }),
                (h.delayedLeave = T)
            })
        }
        return i
      }
    },
  }
function Bi(e) {
  let t = e[0]
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== xe) {
        t = n
        break
      }
  }
  return t
}
const Fl = kl
function Vi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function gs(e, t, n, s, r) {
  const {
      appear: i,
      mode: o,
      persisted: c = !1,
      onBeforeEnter: l,
      onEnter: h,
      onAfterEnter: u,
      onEnterCancelled: f,
      onBeforeLeave: p,
      onLeave: g,
      onAfterLeave: x,
      onLeaveCancelled: T,
      onBeforeAppear: D,
      onAppear: k,
      onAfterAppear: M,
      onAppearCancelled: F,
    } = t,
    O = String(e.key),
    U = Vi(n, e),
    te = (V, W) => {
      V && je(V, s, 9, W)
    },
    Z = (V, W) => {
      const se = W[1]
      te(V, W),
        H(V) ? V.every((I) => I.length <= 1) && se() : V.length <= 1 && se()
    },
    he = {
      mode: o,
      persisted: c,
      beforeEnter(V) {
        let W = l
        if (!n.isMounted)
          if (i) W = D || l
          else return
        V[ct] && V[ct](!0)
        const se = U[O]
        se && xt(e, se) && se.el[ct] && se.el[ct](), te(W, [V])
      },
      enter(V) {
        let W = h,
          se = u,
          I = f
        if (!n.isMounted)
          if (i) (W = k || h), (se = M || u), (I = F || f)
          else return
        let z = !1
        const fe = (V[_n] = (ke) => {
          z ||
            ((z = !0),
            ke ? te(I, [V]) : te(se, [V]),
            he.delayedLeave && he.delayedLeave(),
            (V[_n] = void 0))
        })
        W ? Z(W, [V, fe]) : fe()
      },
      leave(V, W) {
        const se = String(e.key)
        if ((V[_n] && V[_n](!0), n.isUnmounting)) return W()
        te(p, [V])
        let I = !1
        const z = (V[ct] = (fe) => {
          I ||
            ((I = !0),
            W(),
            fe ? te(T, [V]) : te(x, [V]),
            (V[ct] = void 0),
            U[se] === e && delete U[se])
        })
        ;(U[se] = e), g ? Z(g, [V, z]) : z()
      },
      clone(V) {
        const W = gs(V, t, n, s, r)
        return r && r(W), W
      },
    }
  return he
}
function Yn(e) {
  if ($n(e)) return (e = ht(e)), (e.children = null), e
}
function sr(e) {
  if (!$n(e)) return Hi(e.type) && e.children ? Bi(e.children) : e
  const { shapeFlag: t, children: n } = e
  if (n) {
    if (t & 16) return n[0]
    if (t & 32 && B(n.default)) return n.default()
  }
}
function sn(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), sn(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Ui(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === qe
      ? (o.patchFlag & 128 && r++, (s = s.concat(Ui(o.children, t, c))))
      : (t || o.type !== xe) && s.push(c != null ? ht(o, { key: c }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Us(e, t) {
  return B(e) ? (() => ae({ name: e.name }, t, { setup: e }))() : e
}
function Ki(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function ms(e, t, n, s, r = !1) {
  if (H(e)) {
    e.forEach((x, T) => ms(x, t && (H(t) ? t[T] : t), n, s, r))
    return
  }
  if (Jt(s) && !r) return
  const i = s.shapeFlag & 4 ? Bn(s.component) : s.el,
    o = r ? null : i,
    { i: c, r: l } = e,
    h = t && t.r,
    u = c.refs === ne ? (c.refs = {}) : c.refs,
    f = c.setupState,
    p = q(f),
    g = f === ne ? () => !1 : (x) => Q(p, x)
  if (
    (h != null &&
      h !== l &&
      (ue(h)
        ? ((u[h] = null), g(h) && (f[h] = null))
        : _e(h) && (h.value = null)),
    B(l))
  )
    fn(l, c, 12, [o, u])
  else {
    const x = ue(l),
      T = _e(l)
    if (x || T) {
      const D = () => {
        if (e.f) {
          const k = x ? (g(l) ? f[l] : u[l]) : l.value
          r
            ? H(k) && Os(k, i)
            : H(k)
            ? k.includes(i) || k.push(i)
            : x
            ? ((u[l] = [i]), g(l) && (f[l] = u[l]))
            : ((l.value = [i]), e.k && (u[e.k] = l.value))
        } else
          x
            ? ((u[l] = o), g(l) && (f[l] = o))
            : T && ((l.value = o), e.k && (u[e.k] = o))
      }
      o ? ((D.id = -1), Te(D, n)) : D()
    }
  }
}
kn().requestIdleCallback
kn().cancelIdleCallback
const Jt = (e) => !!e.type.__asyncLoader,
  $n = (e) => e.type.__isKeepAlive
function Nl(e, t) {
  Wi(e, 'a', t)
}
function $l(e, t) {
  Wi(e, 'da', t)
}
function Wi(e, t, n = de) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Hn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) $n(r.parent.vnode) && Hl(s, t, n, r), (r = r.parent)
  }
}
function Hl(e, t, n, s) {
  const r = Hn(t, e, s, !0)
  Gi(() => {
    Os(s[t], r)
  }, n)
}
function Hn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          gt()
          const c = dn(n),
            l = je(t, n, e, o)
          return c(), mt(), l
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const nt =
    (e) =>
    (t, n = de) => {
      ;(!on || e === 'sp') && Hn(e, (...s) => t(...s), n)
    },
  Dl = nt('bm'),
  qi = nt('m'),
  jl = nt('bu'),
  Bl = nt('u'),
  zi = nt('bum'),
  Gi = nt('um'),
  Vl = nt('sp'),
  Ul = nt('rtg'),
  Kl = nt('rtc')
function Wl(e, t = de) {
  Hn('ec', e, t)
}
const Ji = 'components'
function ql(e, t) {
  return Gl(Ji, e, !0, t) || e
}
const zl = Symbol.for('v-ndc')
function Gl(e, t, n = !0, s = !1) {
  const r = Ee || de
  if (r) {
    const i = r.type
    if (e === Ji) {
      const c = Nc(i, !1)
      if (c && (c === t || c === Le(t) || c === Ln(Le(t)))) return i
    }
    const o = rr(r[e] || i[e], t) || rr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function rr(e, t) {
  return e && (e[t] || e[Le(t)] || e[Ln(Le(t))])
}
const _s = (e) => (e ? (bo(e) ? Bn(e) : _s(e.parent)) : null),
  Qt = ae(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ks(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Vs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Li.bind(e.proxy)),
    $watch: (e) => gc.bind(e),
  }),
  Xn = (e, t) => e !== ne && !e.__isScriptSetup && Q(e, t),
  Jl = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: c,
        appContext: l,
      } = e
      let h
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Xn(s, t)) return (o[t] = 1), s[t]
          if (r !== ne && Q(r, t)) return (o[t] = 2), r[t]
          if ((h = e.propsOptions[0]) && Q(h, t)) return (o[t] = 3), i[t]
          if (n !== ne && Q(n, t)) return (o[t] = 4), n[t]
          vs && (o[t] = 0)
        }
      }
      const u = Qt[t]
      let f, p
      if (u) return t === '$attrs' && me(e.attrs, 'get', ''), u(e)
      if ((f = c.__cssModules) && (f = f[t])) return f
      if (n !== ne && Q(n, t)) return (o[t] = 4), n[t]
      if (((p = l.config.globalProperties), Q(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return Xn(r, t)
        ? ((r[t] = n), !0)
        : s !== ne && Q(s, t)
        ? ((s[t] = n), !0)
        : Q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let c
      return (
        !!n[o] ||
        (e !== ne && Q(e, o)) ||
        Xn(t, o) ||
        ((c = i[0]) && Q(c, o)) ||
        Q(s, o) ||
        Q(Qt, o) ||
        Q(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function ir(e) {
  return H(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let vs = !0
function Ql(e) {
  const t = Ks(e),
    n = e.proxy,
    s = e.ctx
  ;(vs = !1), t.beforeCreate && or(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: c,
    provide: l,
    inject: h,
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: g,
    updated: x,
    activated: T,
    deactivated: D,
    beforeDestroy: k,
    beforeUnmount: M,
    destroyed: F,
    unmounted: O,
    render: U,
    renderTracked: te,
    renderTriggered: Z,
    errorCaptured: he,
    serverPrefetch: V,
    expose: W,
    inheritAttrs: se,
    components: I,
    directives: z,
    filters: fe,
  } = t
  if ((h && Yl(h, s, null), o))
    for (const ee in o) {
      const G = o[ee]
      B(G) && (s[ee] = G.bind(n))
    }
  if (r) {
    const ee = r.call(n, n)
    le(ee) && (e.data = Dt(ee))
  }
  if (((vs = !0), i))
    for (const ee in i) {
      const G = i[ee],
        Je = B(G) ? G.bind(n, n) : B(G.get) ? G.get.bind(n, n) : $e,
        st = !B(G) && B(G.set) ? G.set.bind(n) : $e,
        Ve = Ne({ get: Je, set: st })
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (we) => (Ve.value = we),
      })
    }
  if (c) for (const ee in c) Qi(c[ee], s, n, ee)
  if (l) {
    const ee = B(l) ? l.call(n) : l
    Reflect.ownKeys(ee).forEach((G) => {
      vn(G, ee[G])
    })
  }
  u && or(u, e, 'c')
  function ce(ee, G) {
    H(G) ? G.forEach((Je) => ee(Je.bind(n))) : G && ee(G.bind(n))
  }
  if (
    (ce(Dl, f),
    ce(qi, p),
    ce(jl, g),
    ce(Bl, x),
    ce(Nl, T),
    ce($l, D),
    ce(Wl, he),
    ce(Kl, te),
    ce(Ul, Z),
    ce(zi, M),
    ce(Gi, O),
    ce(Vl, V),
    H(W))
  )
    if (W.length) {
      const ee = e.exposed || (e.exposed = {})
      W.forEach((G) => {
        Object.defineProperty(ee, G, {
          get: () => n[G],
          set: (Je) => (n[G] = Je),
        })
      })
    } else e.exposed || (e.exposed = {})
  U && e.render === $e && (e.render = U),
    se != null && (e.inheritAttrs = se),
    I && (e.components = I),
    z && (e.directives = z),
    V && Ki(e)
}
function Yl(e, t, n = $e) {
  H(e) && (e = bs(e))
  for (const s in e) {
    const r = e[s]
    let i
    le(r)
      ? 'default' in r
        ? (i = tt(r.from || s, r.default, !0))
        : (i = tt(r.from || s))
      : (i = tt(r)),
      _e(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function or(e, t, n) {
  je(H(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Qi(e, t, n, s) {
  let r = s.includes('.') ? uo(n, s) : () => n[s]
  if (ue(e)) {
    const i = t[e]
    B(i) && bn(r, i)
  } else if (B(e)) bn(r, e.bind(n))
  else if (le(e))
    if (H(e)) e.forEach((i) => Qi(i, t, n, s))
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler]
      B(i) && bn(r, i, e)
    }
}
function Ks(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    c = i.get(t)
  let l
  return (
    c
      ? (l = c)
      : !r.length && !n && !s
      ? (l = t)
      : ((l = {}), r.length && r.forEach((h) => Rn(l, h, o, !0)), Rn(l, t, o)),
    le(t) && i.set(t, l),
    l
  )
}
function Rn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && Rn(e, i, n, !0), r && r.forEach((o) => Rn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const c = Xl[o] || (n && n[o])
      e[o] = c ? c(e[o], t[o]) : t[o]
    }
  return e
}
const Xl = {
  data: lr,
  props: cr,
  emits: cr,
  methods: Kt,
  computed: Kt,
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  components: Kt,
  directives: Kt,
  watch: ec,
  provide: lr,
  inject: Zl,
}
function lr(e, t) {
  return t
    ? e
      ? function () {
          return ae(
            B(e) ? e.call(this, this) : e,
            B(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Zl(e, t) {
  return Kt(bs(e), bs(t))
}
function bs(e) {
  if (H(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Kt(e, t) {
  return e ? ae(Object.create(null), e, t) : t
}
function cr(e, t) {
  return e
    ? H(e) && H(t)
      ? [...new Set([...e, ...t])]
      : ae(Object.create(null), ir(e), ir(t != null ? t : {}))
    : t
}
function ec(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ae(Object.create(null), e)
  for (const s in t) n[s] = ve(e[s], t[s])
  return n
}
function Yi() {
  return {
    app: null,
    config: {
      isNativeTag: Bo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let tc = 0
function nc(e, t) {
  return function (s, r = null) {
    B(s) || (s = ae({}, s)), r != null && !le(r) && (r = null)
    const i = Yi(),
      o = new WeakSet(),
      c = []
    let l = !1
    const h = (i.app = {
      _uid: tc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Hc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...f) {
        return (
          o.has(u) ||
            (u && B(u.install)
              ? (o.add(u), u.install(h, ...f))
              : B(u) && (o.add(u), u(h, ...f))),
          h
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), h
      },
      component(u, f) {
        return f ? ((i.components[u] = f), h) : i.components[u]
      },
      directive(u, f) {
        return f ? ((i.directives[u] = f), h) : i.directives[u]
      },
      mount(u, f, p) {
        if (!l) {
          const g = h._ceVNode || Se(s, r)
          return (
            (g.appContext = i),
            p === !0 ? (p = 'svg') : p === !1 && (p = void 0),
            f && t ? t(g, u) : e(g, u, p),
            (l = !0),
            (h._container = u),
            (u.__vue_app__ = h),
            Bn(g.component)
          )
        }
      },
      onUnmount(u) {
        c.push(u)
      },
      unmount() {
        l &&
          (je(c, h._instance, 16),
          e(null, h._container),
          delete h._container.__vue_app__)
      },
      provide(u, f) {
        return (i.provides[u] = f), h
      },
      runWithContext(u) {
        const f = Nt
        Nt = h
        try {
          return u()
        } finally {
          Nt = f
        }
      },
    })
    return h
  }
}
let Nt = null
function vn(e, t) {
  if (de) {
    let n = de.provides
    const s = de.parent && de.parent.provides
    s === n && (n = de.provides = Object.create(s)), (n[e] = t)
  }
}
function tt(e, t, n = !1) {
  const s = de || Ee
  if (s || Nt) {
    const r = Nt
      ? Nt._context.provides
      : s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && B(t) ? t.call(s && s.proxy) : t
  }
}
const Xi = {},
  Zi = () => Object.create(Xi),
  eo = (e) => Object.getPrototypeOf(e) === Xi
function sc(e, t, n, s = !1) {
  const r = {},
    i = Zi()
  ;(e.propsDefaults = Object.create(null)), to(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Pi(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function rc(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    c = q(r),
    [l] = e.propsOptions
  let h = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let f = 0; f < u.length; f++) {
        let p = u[f]
        if (Dn(e.emitsOptions, p)) continue
        const g = t[p]
        if (l)
          if (Q(i, p)) g !== i[p] && ((i[p] = g), (h = !0))
          else {
            const x = Le(p)
            r[x] = ys(l, c, x, g, e, !1)
          }
        else g !== i[p] && ((i[p] = g), (h = !0))
      }
    }
  } else {
    to(e, t, r, i) && (h = !0)
    let u
    for (const f in c)
      (!t || (!Q(t, f) && ((u = Rt(f)) === f || !Q(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (r[f] = ys(l, c, f, void 0, e, !0))
          : delete r[f])
    if (i !== c)
      for (const f in i) (!t || (!Q(t, f) && !0)) && (delete i[f], (h = !0))
  }
  h && Ze(e.attrs, 'set', '')
}
function to(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    c
  if (t)
    for (let l in t) {
      if (Wt(l)) continue
      const h = t[l]
      let u
      r && Q(r, (u = Le(l)))
        ? !i || !i.includes(u)
          ? (n[u] = h)
          : ((c || (c = {}))[u] = h)
        : Dn(e.emitsOptions, l) ||
          ((!(l in s) || h !== s[l]) && ((s[l] = h), (o = !0)))
    }
  if (i) {
    const l = q(n),
      h = c || ne
    for (let u = 0; u < i.length; u++) {
      const f = i[u]
      n[f] = ys(r, l, f, h[f], e, !Q(h, f))
    }
  }
  return o
}
function ys(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const c = Q(o, 'default')
    if (c && s === void 0) {
      const l = o.default
      if (o.type !== Function && !o.skipFactory && B(l)) {
        const { propsDefaults: h } = r
        if (n in h) s = h[n]
        else {
          const u = dn(r)
          ;(s = h[n] = l.call(null, t)), u()
        }
      } else s = l
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !c ? (s = !1) : o[1] && (s === '' || s === Rt(n)) && (s = !0))
  }
  return s
}
const ic = new WeakMap()
function no(e, t, n = !1) {
  const s = n ? ic : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    c = []
  let l = !1
  if (!B(e)) {
    const u = (f) => {
      l = !0
      const [p, g] = no(f, t, !0)
      ae(o, p), g && c.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!i && !l) return le(e) && s.set(e, It), It
  if (H(i))
    for (let u = 0; u < i.length; u++) {
      const f = Le(i[u])
      ar(f) && (o[f] = ne)
    }
  else if (i)
    for (const u in i) {
      const f = Le(u)
      if (ar(f)) {
        const p = i[u],
          g = (o[f] = H(p) || B(p) ? { type: p } : ae({}, p)),
          x = g.type
        let T = !1,
          D = !0
        if (H(x))
          for (let k = 0; k < x.length; ++k) {
            const M = x[k],
              F = B(M) && M.name
            if (F === 'Boolean') {
              T = !0
              break
            } else F === 'String' && (D = !1)
          }
        else T = B(x) && x.name === 'Boolean'
        ;(g[0] = T), (g[1] = D), (T || Q(g, 'default')) && c.push(f)
      }
    }
  const h = [o, c]
  return le(e) && s.set(e, h), h
}
function ar(e) {
  return e[0] !== '$' && !Wt(e)
}
const so = (e) => e[0] === '_' || e === '$stable',
  Ws = (e) => (H(e) ? e.map(ze) : [ze(e)]),
  oc = (e, t, n) => {
    if (t._n) return t
    const s = Ml((...r) => Ws(t(...r)), n)
    return (s._c = !1), s
  },
  ro = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (so(r)) continue
      const i = e[r]
      if (B(i)) t[r] = oc(r, i, s)
      else if (i != null) {
        const o = Ws(i)
        t[r] = () => o
      }
    }
  },
  io = (e, t) => {
    const n = Ws(t)
    e.slots.default = () => n
  },
  oo = (e, t, n) => {
    for (const s in t) (n || s !== '_') && (e[s] = t[s])
  },
  lc = (e, t, n) => {
    const s = (e.slots = Zi())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (oo(s, t, n), n && ai(s, '_', r, !0)) : ro(t, s)
    } else t && io(e, t)
  },
  cc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ne
    if (s.shapeFlag & 32) {
      const c = t._
      c
        ? n && c === 1
          ? (i = !1)
          : oo(r, t, n)
        : ((i = !t.$stable), ro(t, r)),
        (o = t)
    } else t && (io(e, t), (o = { default: 1 }))
    if (i) for (const c in r) !so(c) && o[c] == null && delete r[c]
  },
  Te = xc
function ac(e) {
  return uc(e)
}
function uc(e, t) {
  const n = kn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: c,
      createComment: l,
      setText: h,
      setElementText: u,
      parentNode: f,
      nextSibling: p,
      setScopeId: g = $e,
      insertStaticContent: x,
    } = e,
    T = (
      a,
      d,
      m,
      b = null,
      _ = null,
      y = null,
      C = void 0,
      S = null,
      E = !!d.dynamicChildren
    ) => {
      if (a === d) return
      a && !xt(a, d) && ((b = v(a)), we(a, _, y, !0), (a = null)),
        d.patchFlag === -2 && ((E = !1), (d.dynamicChildren = null))
      const { type: w, ref: $, shapeFlag: P } = d
      switch (w) {
        case jn:
          D(a, d, m, b)
          break
        case xe:
          k(a, d, m, b)
          break
        case yn:
          a == null && M(d, m, b, C)
          break
        case qe:
          I(a, d, m, b, _, y, C, S, E)
          break
        default:
          P & 1
            ? U(a, d, m, b, _, y, C, S, E)
            : P & 6
            ? z(a, d, m, b, _, y, C, S, E)
            : (P & 64 || P & 128) && w.process(a, d, m, b, _, y, C, S, E, L)
      }
      $ != null && _ && ms($, a && a.ref, y, d || a, !d)
    },
    D = (a, d, m, b) => {
      if (a == null) s((d.el = c(d.children)), m, b)
      else {
        const _ = (d.el = a.el)
        d.children !== a.children && h(_, d.children)
      }
    },
    k = (a, d, m, b) => {
      a == null ? s((d.el = l(d.children || '')), m, b) : (d.el = a.el)
    },
    M = (a, d, m, b) => {
      ;[a.el, a.anchor] = x(a.children, d, m, b, a.el, a.anchor)
    },
    F = ({ el: a, anchor: d }, m, b) => {
      let _
      for (; a && a !== d; ) (_ = p(a)), s(a, m, b), (a = _)
      s(d, m, b)
    },
    O = ({ el: a, anchor: d }) => {
      let m
      for (; a && a !== d; ) (m = p(a)), r(a), (a = m)
      r(d)
    },
    U = (a, d, m, b, _, y, C, S, E) => {
      d.type === 'svg' ? (C = 'svg') : d.type === 'math' && (C = 'mathml'),
        a == null ? te(d, m, b, _, y, C, S, E) : V(a, d, _, y, C, S, E)
    },
    te = (a, d, m, b, _, y, C, S) => {
      let E, w
      const { props: $, shapeFlag: P, transition: N, dirs: j } = a
      if (
        ((E = a.el = o(a.type, y, $ && $.is, $)),
        P & 8
          ? u(E, a.children)
          : P & 16 && he(a.children, E, null, b, _, Zn(a, y), C, S),
        j && _t(a, null, b, 'created'),
        Z(E, a, a.scopeId, C, b),
        $)
      ) {
        for (const re in $)
          re !== 'value' && !Wt(re) && i(E, re, null, $[re], y, b)
        'value' in $ && i(E, 'value', null, $.value, y),
          (w = $.onVnodeBeforeMount) && Ke(w, b, a)
      }
      j && _t(a, null, b, 'beforeMount')
      const K = fc(_, N)
      K && N.beforeEnter(E),
        s(E, d, m),
        ((w = $ && $.onVnodeMounted) || K || j) &&
          Te(() => {
            w && Ke(w, b, a), K && N.enter(E), j && _t(a, null, b, 'mounted')
          }, _)
    },
    Z = (a, d, m, b, _) => {
      if ((m && g(a, m), b)) for (let y = 0; y < b.length; y++) g(a, b[y])
      if (_) {
        let y = _.subTree
        if (
          d === y ||
          (ho(y.type) && (y.ssContent === d || y.ssFallback === d))
        ) {
          const C = _.vnode
          Z(a, C, C.scopeId, C.slotScopeIds, _.parent)
        }
      }
    },
    he = (a, d, m, b, _, y, C, S, E = 0) => {
      for (let w = E; w < a.length; w++) {
        const $ = (a[w] = S ? at(a[w]) : ze(a[w]))
        T(null, $, d, m, b, _, y, C, S)
      }
    },
    V = (a, d, m, b, _, y, C) => {
      const S = (d.el = a.el)
      let { patchFlag: E, dynamicChildren: w, dirs: $ } = d
      E |= a.patchFlag & 16
      const P = a.props || ne,
        N = d.props || ne
      let j
      if (
        (m && vt(m, !1),
        (j = N.onVnodeBeforeUpdate) && Ke(j, m, d, a),
        $ && _t(d, a, m, 'beforeUpdate'),
        m && vt(m, !0),
        ((P.innerHTML && N.innerHTML == null) ||
          (P.textContent && N.textContent == null)) &&
          u(S, ''),
        w
          ? W(a.dynamicChildren, w, S, m, b, Zn(d, _), y)
          : C || G(a, d, S, null, m, b, Zn(d, _), y, !1),
        E > 0)
      ) {
        if (E & 16) se(S, P, N, m, _)
        else if (
          (E & 2 && P.class !== N.class && i(S, 'class', null, N.class, _),
          E & 4 && i(S, 'style', P.style, N.style, _),
          E & 8)
        ) {
          const K = d.dynamicProps
          for (let re = 0; re < K.length; re++) {
            const Y = K[re],
              Ce = P[Y],
              pe = N[Y]
            ;(pe !== Ce || Y === 'value') && i(S, Y, Ce, pe, _, m)
          }
        }
        E & 1 && a.children !== d.children && u(S, d.children)
      } else !C && w == null && se(S, P, N, m, _)
      ;((j = N.onVnodeUpdated) || $) &&
        Te(() => {
          j && Ke(j, m, d, a), $ && _t(d, a, m, 'updated')
        }, b)
    },
    W = (a, d, m, b, _, y, C) => {
      for (let S = 0; S < d.length; S++) {
        const E = a[S],
          w = d[S],
          $ =
            E.el && (E.type === qe || !xt(E, w) || E.shapeFlag & 70)
              ? f(E.el)
              : m
        T(E, w, $, null, b, _, y, C, !0)
      }
    },
    se = (a, d, m, b, _) => {
      if (d !== m) {
        if (d !== ne)
          for (const y in d) !Wt(y) && !(y in m) && i(a, y, d[y], null, _, b)
        for (const y in m) {
          if (Wt(y)) continue
          const C = m[y],
            S = d[y]
          C !== S && y !== 'value' && i(a, y, S, C, _, b)
        }
        'value' in m && i(a, 'value', d.value, m.value, _)
      }
    },
    I = (a, d, m, b, _, y, C, S, E) => {
      const w = (d.el = a ? a.el : c('')),
        $ = (d.anchor = a ? a.anchor : c(''))
      let { patchFlag: P, dynamicChildren: N, slotScopeIds: j } = d
      j && (S = S ? S.concat(j) : j),
        a == null
          ? (s(w, m, b), s($, m, b), he(d.children || [], m, $, _, y, C, S, E))
          : P > 0 && P & 64 && N && a.dynamicChildren
          ? (W(a.dynamicChildren, N, m, _, y, C, S),
            (d.key != null || (_ && d === _.subTree)) && lo(a, d, !0))
          : G(a, d, m, $, _, y, C, S, E)
    },
    z = (a, d, m, b, _, y, C, S, E) => {
      ;(d.slotScopeIds = S),
        a == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, m, b, C, E)
            : fe(d, m, b, _, y, C, E)
          : ke(a, d, E)
    },
    fe = (a, d, m, b, _, y, C) => {
      const S = (a.component = Oc(a, b, _))
      if (($n(a) && (S.ctx.renderer = L), Ic(S, !1, C), S.asyncDep)) {
        if ((_ && _.registerDep(S, ce, C), !a.el)) {
          const E = (S.subTree = Se(xe))
          k(null, E, d, m)
        }
      } else ce(S, a, d, m, _, y, C)
    },
    ke = (a, d, m) => {
      const b = (d.component = a.component)
      if (yc(a, d, m))
        if (b.asyncDep && !b.asyncResolved) {
          ee(b, d, m)
          return
        } else (b.next = d), b.update()
      else (d.el = a.el), (b.vnode = d)
    },
    ce = (a, d, m, b, _, y, C) => {
      const S = () => {
        if (a.isMounted) {
          let { next: P, bu: N, u: j, parent: K, vnode: re } = a
          {
            const Re = co(a)
            if (Re) {
              P && ((P.el = re.el), ee(a, P, C)),
                Re.asyncDep.then(() => {
                  a.isUnmounted || S()
                })
              return
            }
          }
          let Y = P,
            Ce
          vt(a, !1),
            P ? ((P.el = re.el), ee(a, P, C)) : (P = re),
            N && qn(N),
            (Ce = P.props && P.props.onVnodeBeforeUpdate) && Ke(Ce, K, P, re),
            vt(a, !0)
          const pe = es(a),
            Fe = a.subTree
          ;(a.subTree = pe),
            T(Fe, pe, f(Fe.el), v(Fe), a, _, y),
            (P.el = pe.el),
            Y === null && wc(a, pe.el),
            j && Te(j, _),
            (Ce = P.props && P.props.onVnodeUpdated) &&
              Te(() => Ke(Ce, K, P, re), _)
        } else {
          let P
          const { el: N, props: j } = d,
            { bm: K, m: re, parent: Y, root: Ce, type: pe } = a,
            Fe = Jt(d)
          if (
            (vt(a, !1),
            K && qn(K),
            !Fe && (P = j && j.onVnodeBeforeMount) && Ke(P, Y, d),
            vt(a, !0),
            N && oe)
          ) {
            const Re = () => {
              ;(a.subTree = es(a)), oe(N, a.subTree, a, _, null)
            }
            Fe && pe.__asyncHydrate ? pe.__asyncHydrate(N, a, Re) : Re()
          } else {
            Ce.ce && Ce.ce._injectChildStyle(pe)
            const Re = (a.subTree = es(a))
            T(null, Re, m, b, a, _, y), (d.el = Re.el)
          }
          if ((re && Te(re, _), !Fe && (P = j && j.onVnodeMounted))) {
            const Re = d
            Te(() => Ke(P, Y, Re), _)
          }
          ;(d.shapeFlag & 256 ||
            (Y && Jt(Y.vnode) && Y.vnode.shapeFlag & 256)) &&
            a.a &&
            Te(a.a, _),
            (a.isMounted = !0),
            (d = m = b = null)
        }
      }
      a.scope.on()
      const E = (a.effect = new hi(S))
      a.scope.off()
      const w = (a.update = E.run.bind(E)),
        $ = (a.job = E.runIfDirty.bind(E))
      ;($.i = a), ($.id = a.uid), (E.scheduler = () => Vs($)), vt(a, !0), w()
    },
    ee = (a, d, m) => {
      d.component = a
      const b = a.vnode.props
      ;(a.vnode = d),
        (a.next = null),
        rc(a, d.props, b, m),
        cc(a, d.children, m),
        gt(),
        nr(a),
        mt()
    },
    G = (a, d, m, b, _, y, C, S, E = !1) => {
      const w = a && a.children,
        $ = a ? a.shapeFlag : 0,
        P = d.children,
        { patchFlag: N, shapeFlag: j } = d
      if (N > 0) {
        if (N & 128) {
          st(w, P, m, b, _, y, C, S, E)
          return
        } else if (N & 256) {
          Je(w, P, m, b, _, y, C, S, E)
          return
        }
      }
      j & 8
        ? ($ & 16 && Me(w, _, y), P !== w && u(m, P))
        : $ & 16
        ? j & 16
          ? st(w, P, m, b, _, y, C, S, E)
          : Me(w, _, y, !0)
        : ($ & 8 && u(m, ''), j & 16 && he(P, m, b, _, y, C, S, E))
    },
    Je = (a, d, m, b, _, y, C, S, E) => {
      ;(a = a || It), (d = d || It)
      const w = a.length,
        $ = d.length,
        P = Math.min(w, $)
      let N
      for (N = 0; N < P; N++) {
        const j = (d[N] = E ? at(d[N]) : ze(d[N]))
        T(a[N], j, m, null, _, y, C, S, E)
      }
      w > $ ? Me(a, _, y, !0, !1, P) : he(d, m, b, _, y, C, S, E, P)
    },
    st = (a, d, m, b, _, y, C, S, E) => {
      let w = 0
      const $ = d.length
      let P = a.length - 1,
        N = $ - 1
      for (; w <= P && w <= N; ) {
        const j = a[w],
          K = (d[w] = E ? at(d[w]) : ze(d[w]))
        if (xt(j, K)) T(j, K, m, null, _, y, C, S, E)
        else break
        w++
      }
      for (; w <= P && w <= N; ) {
        const j = a[P],
          K = (d[N] = E ? at(d[N]) : ze(d[N]))
        if (xt(j, K)) T(j, K, m, null, _, y, C, S, E)
        else break
        P--, N--
      }
      if (w > P) {
        if (w <= N) {
          const j = N + 1,
            K = j < $ ? d[j].el : b
          for (; w <= N; )
            T(null, (d[w] = E ? at(d[w]) : ze(d[w])), m, K, _, y, C, S, E), w++
        }
      } else if (w > N) for (; w <= P; ) we(a[w], _, y, !0), w++
      else {
        const j = w,
          K = w,
          re = new Map()
        for (w = K; w <= N; w++) {
          const Pe = (d[w] = E ? at(d[w]) : ze(d[w]))
          Pe.key != null && re.set(Pe.key, w)
        }
        let Y,
          Ce = 0
        const pe = N - K + 1
        let Fe = !1,
          Re = 0
        const jt = new Array(pe)
        for (w = 0; w < pe; w++) jt[w] = 0
        for (w = j; w <= P; w++) {
          const Pe = a[w]
          if (Ce >= pe) {
            we(Pe, _, y, !0)
            continue
          }
          let Ue
          if (Pe.key != null) Ue = re.get(Pe.key)
          else
            for (Y = K; Y <= N; Y++)
              if (jt[Y - K] === 0 && xt(Pe, d[Y])) {
                Ue = Y
                break
              }
          Ue === void 0
            ? we(Pe, _, y, !0)
            : ((jt[Ue - K] = w + 1),
              Ue >= Re ? (Re = Ue) : (Fe = !0),
              T(Pe, d[Ue], m, null, _, y, C, S, E),
              Ce++)
        }
        const Ys = Fe ? dc(jt) : It
        for (Y = Ys.length - 1, w = pe - 1; w >= 0; w--) {
          const Pe = K + w,
            Ue = d[Pe],
            Xs = Pe + 1 < $ ? d[Pe + 1].el : b
          jt[w] === 0
            ? T(null, Ue, m, Xs, _, y, C, S, E)
            : Fe && (Y < 0 || w !== Ys[Y] ? Ve(Ue, m, Xs, 2) : Y--)
        }
      }
    },
    Ve = (a, d, m, b, _ = null) => {
      const { el: y, type: C, transition: S, children: E, shapeFlag: w } = a
      if (w & 6) {
        Ve(a.component.subTree, d, m, b)
        return
      }
      if (w & 128) {
        a.suspense.move(d, m, b)
        return
      }
      if (w & 64) {
        C.move(a, d, m, L)
        return
      }
      if (C === qe) {
        s(y, d, m)
        for (let P = 0; P < E.length; P++) Ve(E[P], d, m, b)
        s(a.anchor, d, m)
        return
      }
      if (C === yn) {
        F(a, d, m)
        return
      }
      if (b !== 2 && w & 1 && S)
        if (b === 0) S.beforeEnter(y), s(y, d, m), Te(() => S.enter(y), _)
        else {
          const { leave: P, delayLeave: N, afterLeave: j } = S,
            K = () => s(y, d, m),
            re = () => {
              P(y, () => {
                K(), j && j()
              })
            }
          N ? N(y, K, re) : re()
        }
      else s(y, d, m)
    },
    we = (a, d, m, b = !1, _ = !1) => {
      const {
        type: y,
        props: C,
        ref: S,
        children: E,
        dynamicChildren: w,
        shapeFlag: $,
        patchFlag: P,
        dirs: N,
        cacheIndex: j,
      } = a
      if (
        (P === -2 && (_ = !1),
        S != null && ms(S, null, m, a, !0),
        j != null && (d.renderCache[j] = void 0),
        $ & 256)
      ) {
        d.ctx.deactivate(a)
        return
      }
      const K = $ & 1 && N,
        re = !Jt(a)
      let Y
      if ((re && (Y = C && C.onVnodeBeforeUnmount) && Ke(Y, d, a), $ & 6))
        hn(a.component, m, b)
      else {
        if ($ & 128) {
          a.suspense.unmount(m, b)
          return
        }
        K && _t(a, null, d, 'beforeUnmount'),
          $ & 64
            ? a.type.remove(a, d, m, L, b)
            : w && !w.hasOnce && (y !== qe || (P > 0 && P & 64))
            ? Me(w, d, m, !1, !0)
            : ((y === qe && P & 384) || (!_ && $ & 16)) && Me(E, d, m),
          b && Pt(a)
      }
      ;((re && (Y = C && C.onVnodeUnmounted)) || K) &&
        Te(() => {
          Y && Ke(Y, d, a), K && _t(a, null, d, 'unmounted')
        }, m)
    },
    Pt = (a) => {
      const { type: d, el: m, anchor: b, transition: _ } = a
      if (d === qe) {
        Tt(m, b)
        return
      }
      if (d === yn) {
        O(a)
        return
      }
      const y = () => {
        r(m), _ && !_.persisted && _.afterLeave && _.afterLeave()
      }
      if (a.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: C, delayLeave: S } = _,
          E = () => C(m, y)
        S ? S(a.el, y, E) : E()
      } else y()
    },
    Tt = (a, d) => {
      let m
      for (; a !== d; ) (m = p(a)), r(a), (a = m)
      r(d)
    },
    hn = (a, d, m) => {
      const { bum: b, scope: _, job: y, subTree: C, um: S, m: E, a: w } = a
      ur(E),
        ur(w),
        b && qn(b),
        _.stop(),
        y && ((y.flags |= 8), we(C, a, d, m)),
        S && Te(S, d),
        Te(() => {
          a.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Me = (a, d, m, b = !1, _ = !1, y = 0) => {
      for (let C = y; C < a.length; C++) we(a[C], d, m, b, _)
    },
    v = (a) => {
      if (a.shapeFlag & 6) return v(a.component.subTree)
      if (a.shapeFlag & 128) return a.suspense.next()
      const d = p(a.anchor || a.el),
        m = d && d[Il]
      return m ? p(m) : d
    }
  let A = !1
  const R = (a, d, m) => {
      a == null
        ? d._vnode && we(d._vnode, null, null, !0)
        : T(d._vnode || null, a, d, null, null, null, m),
        (d._vnode = a),
        A || ((A = !0), nr(), Fi(), (A = !1))
    },
    L = {
      p: T,
      um: we,
      m: Ve,
      r: Pt,
      mt: fe,
      mc: he,
      pc: G,
      pbc: W,
      n: v,
      o: e,
    }
  let J, oe
  return t && ([J, oe] = t(L)), { render: R, hydrate: J, createApp: nc(R, J) }
}
function Zn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function vt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function fc(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function lo(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (H(s) && H(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let c = r[i]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[i] = at(r[i])), (c.el = o.el)),
        !n && c.patchFlag !== -2 && lo(o, c)),
        c.type === jn && (c.el = o.el)
    }
}
function dc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, c
  const l = e.length
  for (s = 0; s < l; s++) {
    const h = e[s]
    if (h !== 0) {
      if (((r = n[n.length - 1]), e[r] < h)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (c = (i + o) >> 1), e[n[c]] < h ? (i = c + 1) : (o = c)
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function co(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : co(t)
}
function ur(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const hc = Symbol.for('v-scx'),
  pc = () => tt(hc)
function bn(e, t, n) {
  return ao(e, t, n)
}
function ao(e, t, n = ne) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    c = ae({}, n),
    l = (t && s) || (!t && i !== 'post')
  let h
  if (on) {
    if (i === 'sync') {
      const g = pc()
      h = g.__watcherHandles || (g.__watcherHandles = [])
    } else if (!l) {
      const g = () => {}
      return (g.stop = $e), (g.resume = $e), (g.pause = $e), g
    }
  }
  const u = de
  c.call = (g, x, T) => je(g, u, x, T)
  let f = !1
  i === 'post'
    ? (c.scheduler = (g) => {
        Te(g, u && u.suspense)
      })
    : i !== 'sync' &&
      ((f = !0),
      (c.scheduler = (g, x) => {
        x ? g() : Vs(g)
      })),
    (c.augmentJob = (g) => {
      t && (g.flags |= 4),
        f && ((g.flags |= 2), u && ((g.id = u.uid), (g.i = u)))
    })
  const p = Pl(e, t, c)
  return on && (h ? h.push(p) : l && p()), p
}
function gc(e, t, n) {
  const s = this.proxy,
    r = ue(e) ? (e.includes('.') ? uo(s, e) : () => s[e]) : e.bind(s, s)
  let i
  B(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = dn(this),
    c = ao(r, i.bind(s), n)
  return o(), c
}
function uo(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const mc = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Rt(t)}Modifiers`]
function _c(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ne
  let r = n
  const i = t.startsWith('update:'),
    o = i && mc(s, t.slice(7))
  o &&
    (o.trim && (r = n.map((u) => (ue(u) ? u.trim() : u))),
    o.number && (r = n.map(qo)))
  let c,
    l = s[(c = Wn(t))] || s[(c = Wn(Le(t)))]
  !l && i && (l = s[(c = Wn(Rt(t)))]), l && je(l, e, 6, r)
  const h = s[c + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), je(h, e, 6, r)
  }
}
function fo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    c = !1
  if (!B(e)) {
    const l = (h) => {
      const u = fo(h, t, !0)
      u && ((c = !0), ae(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !i && !c
    ? (le(e) && s.set(e, null), null)
    : (H(i) ? i.forEach((l) => (o[l] = null)) : ae(o, i),
      le(e) && s.set(e, o),
      o)
}
function Dn(e, t) {
  return !e || !On(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Rt(t)) || Q(e, t))
}
function es(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: c,
      emit: l,
      render: h,
      renderCache: u,
      props: f,
      data: p,
      setupState: g,
      ctx: x,
      inheritAttrs: T,
    } = e,
    D = Cn(e)
  let k, M
  try {
    if (n.shapeFlag & 4) {
      const O = r || s,
        U = O
      ;(k = ze(h.call(U, O, u, f, g, p, x))), (M = c)
    } else {
      const O = t
      ;(k = ze(
        O.length > 1 ? O(f, { attrs: c, slots: o, emit: l }) : O(f, null)
      )),
        (M = t.props ? c : vc(c))
    }
  } catch (O) {
    ;(Yt.length = 0), Nn(O, e, 1), (k = Se(xe))
  }
  let F = k
  if (M && T !== !1) {
    const O = Object.keys(M),
      { shapeFlag: U } = F
    O.length &&
      U & 7 &&
      (i && O.some(As) && (M = bc(M, i)), (F = ht(F, M, !1, !0)))
  }
  return (
    n.dirs &&
      ((F = ht(F, null, !1, !0)),
      (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && sn(F, n.transition),
    (k = F),
    Cn(D),
    k
  )
}
const vc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || On(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  bc = (e, t) => {
    const n = {}
    for (const s in e) (!As(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function yc(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: c, patchFlag: l } = t,
    h = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? fr(s, o, h) : !!o
    if (l & 8) {
      const u = t.dynamicProps
      for (let f = 0; f < u.length; f++) {
        const p = u[f]
        if (o[p] !== s[p] && !Dn(h, p)) return !0
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? fr(s, o, h)
        : !0
      : !!o
  return !1
}
function fr(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Dn(n, i)) return !0
  }
  return !1
}
function wc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const ho = (e) => e.__isSuspense
function xc(e, t) {
  t && t.pendingBranch
    ? H(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ol(e)
}
const qe = Symbol.for('v-fgt'),
  jn = Symbol.for('v-txt'),
  xe = Symbol.for('v-cmt'),
  yn = Symbol.for('v-stc'),
  Yt = []
let Oe = null
function po(e = !1) {
  Yt.push((Oe = e ? null : []))
}
function Ec() {
  Yt.pop(), (Oe = Yt[Yt.length - 1] || null)
}
let rn = 1
function dr(e) {
  ;(rn += e), e < 0 && Oe && (Oe.hasOnce = !0)
}
function go(e) {
  return (
    (e.dynamicChildren = rn > 0 ? Oe || It : null),
    Ec(),
    rn > 0 && Oe && Oe.push(e),
    e
  )
}
function Qu(e, t, n, s, r, i) {
  return go(vo(e, t, n, s, r, i, !0))
}
function mo(e, t, n, s, r) {
  return go(Se(e, t, n, s, r, !0))
}
function Pn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function xt(e, t) {
  return e.type === t.type && e.key === t.key
}
const _o = ({ key: e }) => (e != null ? e : null),
  wn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ue(e) || _e(e) || B(e)
        ? { i: Ee, r: e, k: t, f: !!n }
        : e
      : null
  )
function vo(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === qe ? 0 : 1,
  o = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _o(t),
    ref: t && wn(t),
    scopeId: $i,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee,
  }
  return (
    c
      ? (qs(l, n), i & 128 && e.normalize(l))
      : n && (l.shapeFlag |= ue(n) ? 8 : 16),
    rn > 0 &&
      !o &&
      Oe &&
      (l.patchFlag > 0 || i & 6) &&
      l.patchFlag !== 32 &&
      Oe.push(l),
    l
  )
}
const Se = Sc
function Sc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === zl) && (e = xe), Pn(e))) {
    const c = ht(e, t, !0)
    return (
      n && qs(c, n),
      rn > 0 &&
        !i &&
        Oe &&
        (c.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = c) : Oe.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if (($c(e) && (e = e.__vccOpts), t)) {
    t = Cc(t)
    let { class: c, style: l } = t
    c && !ue(c) && (t.class = Ls(c)),
      le(l) && (Bs(l) && !H(l) && (l = ae({}, l)), (t.style = Is(l)))
  }
  const o = ue(e) ? 1 : ho(e) ? 128 : Hi(e) ? 64 : le(e) ? 4 : B(e) ? 2 : 0
  return vo(e, t, n, s, r, o, i, !0)
}
function Cc(e) {
  return e ? (Bs(e) || eo(e) ? ae({}, e) : e) : null
}
function ht(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: l } = e,
    h = t ? Pc(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && _o(h),
      ref:
        t && t.ref
          ? n && i
            ? H(i)
              ? i.concat(wn(t))
              : [i, wn(t)]
            : wn(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== qe ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ht(e.ssContent),
      ssFallback: e.ssFallback && ht(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return l && s && sn(u, l.clone(u)), u
}
function Rc(e = ' ', t = 0) {
  return Se(jn, null, e, t)
}
function Yu(e, t) {
  const n = Se(yn, null, e)
  return (n.staticCount = t), n
}
function Xu(e = '', t = !1) {
  return t ? (po(), mo(xe, null, e)) : Se(xe, null, e)
}
function ze(e) {
  return e == null || typeof e == 'boolean'
    ? Se(xe)
    : H(e)
    ? Se(qe, null, e.slice())
    : Pn(e)
    ? at(e)
    : Se(jn, null, String(e))
}
function at(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ht(e)
}
function qs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (H(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), qs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !eo(t)
        ? (t._ctx = Ee)
        : r === 3 &&
          Ee &&
          (Ee.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: Ee }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Rc(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Pc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Ls([t.class, s.class]))
      else if (r === 'style') t.style = Is([t.style, s.style])
      else if (On(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(H(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ke(e, t, n, s = null) {
  je(e, t, 7, [n, s])
}
const Tc = Yi()
let Ac = 0
function Oc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Tc,
    i = {
      uid: Ac++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new tl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: no(s, r),
      emitsOptions: fo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: s.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = _c.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let de = null
const Mc = () => de || Ee
let Tn, ws
{
  const e = kn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(Tn = t('__VUE_INSTANCE_SETTERS__', (n) => (de = n))),
    (ws = t('__VUE_SSR_SETTERS__', (n) => (on = n)))
}
const dn = (e) => {
    const t = de
    return (
      Tn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Tn(t)
      }
    )
  },
  hr = () => {
    de && de.scope.off(), Tn(null)
  }
function bo(e) {
  return e.vnode.shapeFlag & 4
}
let on = !1
function Ic(e, t = !1, n = !1) {
  t && ws(t)
  const { props: s, children: r } = e.vnode,
    i = bo(e)
  sc(e, s, i, t), lc(e, r, n)
  const o = i ? Lc(e, t) : void 0
  return t && ws(!1), o
}
function Lc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Jl))
  const { setup: s } = n
  if (s) {
    gt()
    const r = (e.setupContext = s.length > 1 ? Fc(e) : null),
      i = dn(e),
      o = fn(s, e, 0, [e.props, r]),
      c = oi(o)
    if ((mt(), i(), (c || e.sp) && !Jt(e) && Ki(e), c)) {
      if ((o.then(hr, hr), t))
        return o
          .then((l) => {
            pr(e, l, t)
          })
          .catch((l) => {
            Nn(l, e, 0)
          })
      e.asyncDep = o
    } else pr(e, o, t)
  } else yo(e, t)
}
function pr(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : le(t) && (e.setupState = Mi(t)),
    yo(e, n)
}
let gr
function yo(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && gr && !s.render) {
      const r = s.template || Ks(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          h = ae(ae({ isCustomElement: i, delimiters: c }, o), l)
        s.render = gr(r, h)
      }
    }
    e.render = s.render || $e
  }
  {
    const r = dn(e)
    gt()
    try {
      Ql(e)
    } finally {
      mt(), r()
    }
  }
}
const kc = {
  get(e, t) {
    return me(e, 'get', ''), e[t]
  },
}
function Fc(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, kc),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Bn(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Mi(Fn(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Qt) return Qt[n](e)
          },
          has(t, n) {
            return n in t || n in Qt
          },
        }))
    : e.proxy
}
function Nc(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function $c(e) {
  return B(e) && '__vccOpts' in e
}
const Ne = (e, t) => Cl(e, t, on)
function zs(e, t, n) {
  const s = arguments.length
  return s === 2
    ? le(t) && !H(t)
      ? Pn(t)
        ? Se(e, null, [t])
        : Se(e, t)
      : Se(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Pn(n) && (n = [n]),
      Se(e, t, n))
}
const Hc = '3.5.12'
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let xs
const mr = typeof window != 'undefined' && window.trustedTypes
if (mr)
  try {
    xs = mr.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const wo = xs ? (e) => xs.createHTML(e) : (e) => e,
  Dc = 'http://www.w3.org/2000/svg',
  jc = 'http://www.w3.org/1998/Math/MathML',
  Xe = typeof document != 'undefined' ? document : null,
  _r = Xe && Xe.createElement('template'),
  Bc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Xe.createElementNS(Dc, e)
          : t === 'mathml'
          ? Xe.createElementNS(jc, e)
          : n
          ? Xe.createElement(e, { is: n })
          : Xe.createElement(e)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Xe.createTextNode(e),
    createComment: (e) => Xe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Xe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        _r.innerHTML = wo(
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
            ? `<math>${e}</math>`
            : e
        )
        const c = _r.content
        if (s === 'svg' || s === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  rt = 'transition',
  Vt = 'animation',
  ln = Symbol('_vtc'),
  xo = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Vc = ae({}, Di, xo),
  Uc = (e) => ((e.displayName = 'Transition'), (e.props = Vc), e),
  Zu = Uc((e, { slots: t }) => zs(Fl, Kc(e), t)),
  bt = (e, t = []) => {
    H(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  vr = (e) => (e ? (H(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Kc(e) {
  const t = {}
  for (const I in e) I in xo || (t[I] = e[I])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: c = `${n}-enter-to`,
      appearFromClass: l = i,
      appearActiveClass: h = o,
      appearToClass: u = c,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    x = Wc(r),
    T = x && x[0],
    D = x && x[1],
    {
      onBeforeEnter: k,
      onEnter: M,
      onEnterCancelled: F,
      onLeave: O,
      onLeaveCancelled: U,
      onBeforeAppear: te = k,
      onAppear: Z = M,
      onAppearCancelled: he = F,
    } = t,
    V = (I, z, fe) => {
      yt(I, z ? u : c), yt(I, z ? h : o), fe && fe()
    },
    W = (I, z) => {
      ;(I._isLeaving = !1), yt(I, f), yt(I, g), yt(I, p), z && z()
    },
    se = (I) => (z, fe) => {
      const ke = I ? Z : M,
        ce = () => V(z, I, fe)
      bt(ke, [z, ce]),
        br(() => {
          yt(z, I ? l : i), it(z, I ? u : c), vr(ke) || yr(z, s, T, ce)
        })
    }
  return ae(t, {
    onBeforeEnter(I) {
      bt(k, [I]), it(I, i), it(I, o)
    },
    onBeforeAppear(I) {
      bt(te, [I]), it(I, l), it(I, h)
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(I, z) {
      I._isLeaving = !0
      const fe = () => W(I, z)
      it(I, f),
        it(I, p),
        Gc(),
        br(() => {
          !I._isLeaving || (yt(I, f), it(I, g), vr(O) || yr(I, s, D, fe))
        }),
        bt(O, [I, fe])
    },
    onEnterCancelled(I) {
      V(I, !1), bt(F, [I])
    },
    onAppearCancelled(I) {
      V(I, !0), bt(he, [I])
    },
    onLeaveCancelled(I) {
      W(I), bt(U, [I])
    },
  })
}
function Wc(e) {
  if (e == null) return null
  if (le(e)) return [ts(e.enter), ts(e.leave)]
  {
    const t = ts(e)
    return [t, t]
  }
}
function ts(e) {
  return zo(e)
}
function it(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[ln] || (e[ln] = new Set())).add(t)
}
function yt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[ln]
  n && (n.delete(t), n.size || (e[ln] = void 0))
}
function br(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let qc = 0
function yr(e, t, n, s) {
  const r = (e._endId = ++qc),
    i = () => {
      r === e._endId && s()
    }
  if (n != null) return setTimeout(i, n)
  const { type: o, timeout: c, propCount: l } = zc(e, t)
  if (!o) return s()
  const h = o + 'end'
  let u = 0
  const f = () => {
      e.removeEventListener(h, p), i()
    },
    p = (g) => {
      g.target === e && ++u >= l && f()
    }
  setTimeout(() => {
    u < l && f()
  }, c + 1),
    e.addEventListener(h, p)
}
function zc(e, t) {
  const n = window.getComputedStyle(e),
    s = (x) => (n[x] || '').split(', '),
    r = s(`${rt}Delay`),
    i = s(`${rt}Duration`),
    o = wr(r, i),
    c = s(`${Vt}Delay`),
    l = s(`${Vt}Duration`),
    h = wr(c, l)
  let u = null,
    f = 0,
    p = 0
  t === rt
    ? o > 0 && ((u = rt), (f = o), (p = i.length))
    : t === Vt
    ? h > 0 && ((u = Vt), (f = h), (p = l.length))
    : ((f = Math.max(o, h)),
      (u = f > 0 ? (o > h ? rt : Vt) : null),
      (p = u ? (u === rt ? i.length : l.length) : 0))
  const g =
    u === rt && /\b(transform|all)(,|$)/.test(s(`${rt}Property`).toString())
  return { type: u, timeout: f, propCount: p, hasTransform: g }
}
function wr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => xr(n) + xr(e[s])))
}
function xr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Gc() {
  return document.body.offsetHeight
}
function Jc(e, t, n) {
  const s = e[ln]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const Er = Symbol('_vod'),
  Qc = Symbol('_vsh'),
  Yc = Symbol(''),
  Xc = /(^|;)\s*display\s*:/
function Zc(e, t, n) {
  const s = e.style,
    r = ue(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (ue(t))
        for (const o of t.split(';')) {
          const c = o.slice(0, o.indexOf(':')).trim()
          n[c] == null && xn(s, c, '')
        }
      else for (const o in t) n[o] == null && xn(s, o, '')
    for (const o in n) o === 'display' && (i = !0), xn(s, o, n[o])
  } else if (r) {
    if (t !== n) {
      const o = s[Yc]
      o && (n += ';' + o), (s.cssText = n), (i = Xc.test(n))
    }
  } else t && e.removeAttribute('style')
  Er in e && ((e[Er] = i ? s.display : ''), e[Qc] && (s.display = 'none'))
}
const Sr = /\s*!important$/
function xn(e, t, n) {
  if (H(n)) n.forEach((s) => xn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = ea(e, t)
    Sr.test(n)
      ? e.setProperty(Rt(s), n.replace(Sr, ''), 'important')
      : (e[s] = n)
  }
}
const Cr = ['Webkit', 'Moz', 'ms'],
  ns = {}
function ea(e, t) {
  const n = ns[t]
  if (n) return n
  let s = Le(t)
  if (s !== 'filter' && s in e) return (ns[t] = s)
  s = Ln(s)
  for (let r = 0; r < Cr.length; r++) {
    const i = Cr[r] + s
    if (i in e) return (ns[t] = i)
  }
  return t
}
const Rr = 'http://www.w3.org/1999/xlink'
function Pr(e, t, n, s, r, i = Zo(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Rr, t.slice(6, t.length))
      : e.setAttributeNS(Rr, t, n)
    : n == null || (i && !ui(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? '' : pt(n) ? String(n) : n)
}
function Tr(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? wo(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const c = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(c !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = ui(n))
      : n == null && c === 'string'
      ? ((n = ''), (o = !0))
      : c === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function ta(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function na(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Ar = Symbol('_vei')
function sa(e, t, n, s, r = null) {
  const i = e[Ar] || (e[Ar] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [c, l] = ra(t)
    if (s) {
      const h = (i[t] = la(s, r))
      ta(e, c, h, l)
    } else o && (na(e, c, o, l), (i[t] = void 0))
  }
}
const Or = /(?:Once|Passive|Capture)$/
function ra(e) {
  let t
  if (Or.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Or)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Rt(e.slice(2)), t]
}
let ss = 0
const ia = Promise.resolve(),
  oa = () => ss || (ia.then(() => (ss = 0)), (ss = Date.now()))
function la(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    je(ca(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = oa()), n
}
function ca(e, t) {
  if (H(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Mr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  aa = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Jc(e, s, o)
      : t === 'style'
      ? Zc(e, n, s)
      : On(t)
      ? As(t) || sa(e, t, n, s, i)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : ua(e, t, s, o)
        )
      ? (Tr(e, t, s),
        !e.tagName.includes('-') &&
          (t === 'value' || t === 'checked' || t === 'selected') &&
          Pr(e, t, s, o, i, t !== 'value'))
      : e._isVueCE && (/[A-Z]/.test(t) || !ue(s))
      ? Tr(e, Le(t), s, i, t)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        Pr(e, t, s, o))
  }
function ua(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Mr(t) && B(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Mr(t) && ue(n) ? !1 : t in e
}
const fa = ae({ patchProp: aa }, Bc)
let Ir
function da() {
  return Ir || (Ir = ac(fa))
}
const ha = (...e) => {
  const t = da().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = ga(s)
      if (!r) return
      const i = t._component
      !B(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = '')
      const o = n(r, !1, pa(r))
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    t
  )
}
function pa(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function ga(e) {
  return ue(e) ? document.querySelector(e) : e
}
function Gs(e, t, n, s) {
  return Object.defineProperty(e, t, { get: n, set: s, enumerable: !0 }), e
}
const Ct = Ai(!1)
let Es
function ma(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    []
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[4] || n[2] || '0',
    platform: t[0] || '',
  }
}
function _a(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  )
}
const Eo = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
function va(e) {
  const t = e.toLowerCase(),
    n = _a(t),
    s = ma(t, n),
    r = {
      mobile: !1,
      desktop: !1,
      cordova: !1,
      capacitor: !1,
      nativeMobile: !1,
      electron: !1,
      bex: !1,
      linux: !1,
      mac: !1,
      win: !1,
      cros: !1,
      chrome: !1,
      firefox: !1,
      opera: !1,
      safari: !1,
      vivaldi: !1,
      edge: !1,
      edgeChromium: !1,
      ie: !1,
      webkit: !1,
      android: !1,
      ios: !1,
      ipad: !1,
      iphone: !1,
      ipod: !1,
      kindle: !1,
      winphone: !1,
      blackberry: !1,
      playbook: !1,
      silk: !1,
    }
  s.browser &&
    ((r[s.browser] = !0),
    (r.version = s.version),
    (r.versionNumber = parseInt(s.version, 10))),
    s.platform && (r[s.platform] = !0)
  const i =
    r.android ||
    r.ios ||
    r.bb ||
    r.blackberry ||
    r.ipad ||
    r.iphone ||
    r.ipod ||
    r.kindle ||
    r.playbook ||
    r.silk ||
    r['windows phone']
  if (
    (i === !0 || t.indexOf('mobile') !== -1
      ? (r.mobile = !0)
      : (r.desktop = !0),
    r['windows phone'] && ((r.winphone = !0), delete r['windows phone']),
    r.edga || r.edgios || r.edg
      ? ((r.edge = !0), (s.browser = 'edge'))
      : r.crios
      ? ((r.chrome = !0), (s.browser = 'chrome'))
      : r.fxios && ((r.firefox = !0), (s.browser = 'firefox')),
    (r.ipod || r.ipad || r.iphone) && (r.ios = !0),
    r.vivaldi && ((s.browser = 'vivaldi'), (r.vivaldi = !0)),
    (r.chrome ||
      r.opr ||
      r.safari ||
      r.vivaldi ||
      (r.mobile === !0 && r.ios !== !0 && i !== !0)) &&
      (r.webkit = !0),
    r.opr && ((s.browser = 'opera'), (r.opera = !0)),
    r.safari &&
      (r.blackberry || r.bb
        ? ((s.browser = 'blackberry'), (r.blackberry = !0))
        : r.playbook
        ? ((s.browser = 'playbook'), (r.playbook = !0))
        : r.android
        ? ((s.browser = 'android'), (r.android = !0))
        : r.kindle
        ? ((s.browser = 'kindle'), (r.kindle = !0))
        : r.silk && ((s.browser = 'silk'), (r.silk = !0))),
    (r.name = s.browser),
    (r.platform = s.platform),
    t.indexOf('electron') !== -1)
  )
    r.electron = !0
  else if (document.location.href.indexOf('-extension://') !== -1) r.bex = !0
  else {
    if (
      (window.Capacitor !== void 0
        ? ((r.capacitor = !0),
          (r.nativeMobile = !0),
          (r.nativeMobileWrapper = 'capacitor'))
        : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
          ((r.cordova = !0),
          (r.nativeMobile = !0),
          (r.nativeMobileWrapper = 'cordova')),
      Ct.value === !0 && (Es = { is: { ...r } }),
      Eo === !0 &&
        r.mac === !0 &&
        ((r.desktop === !0 && r.safari === !0) ||
          (r.nativeMobile === !0 &&
            r.android !== !0 &&
            r.ios !== !0 &&
            r.ipad !== !0)))
    ) {
      delete r.mac, delete r.desktop
      const o =
        Math.min(window.innerHeight, window.innerWidth) > 414
          ? 'ipad'
          : 'iphone'
      Object.assign(r, { mobile: !0, ios: !0, platform: o, [o]: !0 })
    }
    r.mobile !== !0 &&
      window.navigator.userAgentData &&
      window.navigator.userAgentData.mobile &&
      (delete r.desktop, (r.mobile = !0))
  }
  return r
}
const Lr = navigator.userAgent || navigator.vendor || window.opera,
  ba = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Ge = {
    userAgent: Lr,
    is: va(Lr),
    has: { touch: Eo },
    within: { iframe: window.self !== window.top },
  },
  Ss = {
    install(e) {
      const { $q: t } = e
      Ct.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Ge), (Ct.value = !1)
          }),
          (t.platform = Dt(this)))
        : (t.platform = this)
    },
  }
{
  let e
  Gs(Ge.has, 'webStorage', () => {
    if (e !== void 0) return e
    try {
      if (window.localStorage) return (e = !0), !0
    } catch {}
    return (e = !1), !1
  }),
    Object.assign(Ss, Ge),
    Ct.value === !0 && (Object.assign(Ss, Es, ba), (Es = null))
}
function ef(e) {
  return Fn(Us(e))
}
function tf(e) {
  return Fn(e)
}
const Vn = (e, t) => {
    const n = Dt(e)
    for (const s in e)
      Gs(
        t,
        s,
        () => n[s],
        (r) => {
          n[s] = r
        }
      )
    return t
  },
  Un = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 }
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(Un, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      })
    },
  })
  window.addEventListener('qtest', null, e),
    window.removeEventListener('qtest', null, e)
} catch {}
function cn() {}
function nf(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  )
}
function sf(e) {
  e.stopPropagation()
}
function rf(e) {
  e.cancelable !== !1 && e.preventDefault()
}
function of(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation()
}
function lf(e, t, n) {
  const s = `__q_${t}_evt`
  ;(e[s] = e[s] !== void 0 ? e[s].concat(n) : n),
    n.forEach((r) => {
      r[0].addEventListener(r[1], e[r[2]], Un[r[3]])
    })
}
function cf(e, t) {
  const n = `__q_${t}_evt`
  e[n] !== void 0 &&
    (e[n].forEach((s) => {
      s[0].removeEventListener(s[1], e[s[2]], Un[s[3]])
    }),
    (e[n] = void 0))
}
function ya(e, t = 250, n) {
  let s = null
  function r() {
    const i = arguments,
      o = () => {
        ;(s = null), n !== !0 && e.apply(this, i)
      }
    s !== null ? clearTimeout(s) : n === !0 && e.apply(this, i),
      (s = setTimeout(o, t))
  }
  return (
    (r.cancel = () => {
      s !== null && clearTimeout(s)
    }),
    r
  )
}
const rs = ['sm', 'md', 'lg', 'xl'],
  { passive: kr } = Un
var wa = Vn(
  {
    width: 0,
    height: 0,
    name: 'xs',
    sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
    lt: { sm: !0, md: !0, lg: !0, xl: !0 },
    gt: { xs: !1, sm: !1, md: !1, lg: !1 },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
  },
  {
    setSizes: cn,
    setDebounce: cn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0))
        return
      }
      const { visualViewport: n } = window,
        s = n || window,
        r = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || Ge.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, r.clientWidth),
                Math.max(window.innerHeight, r.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - r.clientWidth,
                n.height * n.scale + window.innerHeight - r.clientHeight,
              ],
        o = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0
      this.__update = (f) => {
        const [p, g] = i()
        if ((g !== this.height && (this.height = g), p !== this.width))
          this.width = p
        else if (f !== !0) return
        let x = this.sizes
        ;(this.gt.xs = p >= x.sm),
          (this.gt.sm = p >= x.md),
          (this.gt.md = p >= x.lg),
          (this.gt.lg = p >= x.xl),
          (this.lt.sm = p < x.sm),
          (this.lt.md = p < x.md),
          (this.lt.lg = p < x.lg),
          (this.lt.xl = p < x.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (x =
            (this.xs === !0 && 'xs') ||
            (this.sm === !0 && 'sm') ||
            (this.md === !0 && 'md') ||
            (this.lg === !0 && 'lg') ||
            'xl'),
          x !== this.name &&
            (o === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${x}`)),
            (this.name = x))
      }
      let c,
        l = {},
        h = 16
      ;(this.setSizes = (f) => {
        rs.forEach((p) => {
          f[p] !== void 0 && (l[p] = f[p])
        })
      }),
        (this.setDebounce = (f) => {
          h = f
        })
      const u = () => {
        const f = getComputedStyle(document.body)
        f.getPropertyValue('--q-size-sm') &&
          rs.forEach((p) => {
            this.sizes[p] = parseInt(f.getPropertyValue(`--q-size-${p}`), 10)
          }),
          (this.setSizes = (p) => {
            rs.forEach((g) => {
              p[g] && (this.sizes[g] = p[g])
            }),
              this.__update(!0)
          }),
          (this.setDebounce = (p) => {
            c !== void 0 && s.removeEventListener('resize', c, kr),
              (c = p > 0 ? ya(this.__update, p) : this.__update),
              s.addEventListener('resize', c, kr)
          }),
          this.setDebounce(h),
          Object.keys(l).length !== 0
            ? (this.setSizes(l), (l = void 0))
            : this.__update(),
          o === !0 &&
            this.name === 'xs' &&
            document.body.classList.add('screen--xs')
      }
      Ct.value === !0 ? t.push(u) : u()
    },
  }
)
const ge = Vn(
  { isActive: !1, mode: !1 },
  {
    __media: void 0,
    set(e) {
      ;(ge.mode = e),
        e === 'auto'
          ? (ge.__media === void 0 &&
              ((ge.__media = window.matchMedia('(prefers-color-scheme: dark)')),
              (ge.__updateMedia = () => {
                ge.set('auto')
              }),
              ge.__media.addListener(ge.__updateMedia)),
            (e = ge.__media.matches))
          : ge.__media !== void 0 &&
            (ge.__media.removeListener(ge.__updateMedia),
            (ge.__media = void 0)),
        (ge.isActive = e === !0),
        document.body.classList.remove(`body--${e === !0 ? 'light' : 'dark'}`),
        document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`)
    },
    toggle() {
      ge.set(ge.isActive === !1)
    },
    install({ $q: e, ssrContext: t }) {
      const { dark: n } = e.config
      ;(e.dark = this),
        this.__installed !== !0 && this.set(n !== void 0 ? n : !1)
    },
  }
)
function xa(e, t, n = document.body) {
  if (typeof e != 'string') throw new TypeError('Expected a string as propName')
  if (typeof t != 'string') throw new TypeError('Expected a string as value')
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element')
  n.style.setProperty(`--q-${e}`, t)
}
let So = !1
function Ea(e) {
  So = e.isComposing === !0
}
function Sa(e) {
  return (
    So === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  )
}
function af(e, t) {
  return Sa(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function Co(e) {
  if (e.ios === !0) return 'ios'
  if (e.android === !0) return 'android'
}
function Ca({ is: e, has: t, within: n }, s) {
  const r = [
    e.desktop === !0 ? 'desktop' : 'mobile',
    `${t.touch === !1 ? 'no-' : ''}touch`,
  ]
  if (e.mobile === !0) {
    const i = Co(e)
    i !== void 0 && r.push('platform-' + i)
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper
    r.push(i),
      r.push('native-mobile'),
      e.ios === !0 &&
        (s[i] === void 0 || s[i].iosStatusBarPadding !== !1) &&
        r.push('q-ios-padding')
  } else e.electron === !0 ? r.push('electron') : e.bex === !0 && r.push('bex')
  return n.iframe === !0 && r.push('within-iframe'), r
}
function Ra() {
  const { is: e } = Ge,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '))
  if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'),
        n.delete('platform-ios'),
        n.delete('platform-android'),
        n.add('desktop')
    else if (e.mobile === !0) {
      n.delete('desktop'),
        n.add('mobile'),
        n.delete('platform-ios'),
        n.delete('platform-android')
      const r = Co(e)
      r !== void 0 && n.add(`platform-${r}`)
    }
  }
  Ge.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    Ge.within.iframe === !0 && n.add('within-iframe')
  const s = Array.from(n).join(' ')
  t !== s && (document.body.className = s)
}
function Pa(e) {
  for (const t in e) xa(t, e[t])
}
var Ta = {
  install(e) {
    if (this.__installed !== !0) {
      if (Ct.value === !0) Ra()
      else {
        const { $q: t } = e
        t.config.brand !== void 0 && Pa(t.config.brand)
        const n = Ca(Ge, t.config)
        document.body.classList.add.apply(document.body.classList, n)
      }
      Ge.is.ios === !0 && document.body.addEventListener('touchstart', cn),
        window.addEventListener('keydown', Ea, !0)
    }
  },
}
const Ro = () => !0
function Aa(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/'
}
function Oa(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  )
}
function Ma(e) {
  if (e.backButtonExit === !1) return () => !1
  if (e.backButtonExit === '*') return Ro
  const t = ['#/']
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Aa).map(Oa)),
    () => t.includes(window.location.hash)
  )
}
var Ia = {
    __history: [],
    add: cn,
    remove: cn,
    install({ $q: e }) {
      if (this.__installed === !0) return
      const { cordova: t, capacitor: n } = Ge.is
      if (t !== !0 && n !== !0) return
      const s = e.config[t === !0 ? 'cordova' : 'capacitor']
      if (
        (s !== void 0 && s.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return
      ;(this.add = (o) => {
        o.condition === void 0 && (o.condition = Ro), this.__history.push(o)
      }),
        (this.remove = (o) => {
          const c = this.__history.indexOf(o)
          c >= 0 && this.__history.splice(c, 1)
        })
      const r = Ma(Object.assign({ backButtonExit: !0 }, s)),
        i = () => {
          if (this.__history.length) {
            const o = this.__history[this.__history.length - 1]
            o.condition() === !0 && (this.__history.pop(), o.handler())
          } else r() === !0 ? navigator.app.exitApp() : window.history.back()
        }
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', i, !1)
          })
        : window.Capacitor.Plugins.App.addListener('backButton', i)
    },
  },
  Fr = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
      expand: (e) => (e ? `Expand "${e}"` : 'Expand'),
      collapse: (e) => (e ? `Collapse "${e}"` : 'Collapse'),
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
      ),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1
          ? '1 record selected.'
          : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: {
      noNodes: 'No nodes available',
      noResults: 'No matching nodes found',
    },
  }
function Nr() {
  const e =
    Array.isArray(navigator.languages) === !0 &&
    navigator.languages.length !== 0
      ? navigator.languages[0]
      : navigator.language
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join('-')
}
const ut = Vn(
  { __qLang: {} },
  {
    getLocale: Nr,
    set(e = Fr, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: Nr }
      {
        if (
          ((n.set = ut.set),
          ut.__langConfig === void 0 || ut.__langConfig.noHtmlAttrs !== !0)
        ) {
          const s = document.documentElement
          s.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'),
            s.setAttribute('lang', n.isoName)
        }
        Object.assign(ut.__qLang, n)
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      ;(e.lang = ut.__qLang),
        (ut.__langConfig = e.config.lang),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : ((this.props = new Proxy(this.__qLang, {
              get() {
                return Reflect.get(...arguments)
              },
              ownKeys(s) {
                return Reflect.ownKeys(s).filter(
                  (r) => r !== 'set' && r !== 'getLocale'
                )
              },
            })),
            this.set(t || Fr))
    },
  }
)
var La = {
  name: 'material-icons',
  type: {
    positive: 'check_circle',
    negative: 'warning',
    info: 'info',
    warning: 'priority_high',
  },
  arrow: {
    up: 'arrow_upward',
    right: 'arrow_forward',
    down: 'arrow_downward',
    left: 'arrow_back',
    dropdown: 'arrow_drop_down',
  },
  chevron: { left: 'chevron_left', right: 'chevron_right' },
  colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
  pullToRefresh: { icon: 'refresh' },
  carousel: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down',
    navigationIcon: 'lens',
  },
  chip: { remove: 'cancel', selected: 'check' },
  datetime: {
    arrowLeft: 'chevron_left',
    arrowRight: 'chevron_right',
    now: 'access_time',
    today: 'today',
  },
  editor: {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    underline: 'format_underlined',
    unorderedList: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    subscript: 'vertical_align_bottom',
    superscript: 'vertical_align_top',
    hyperlink: 'link',
    toggleFullscreen: 'fullscreen',
    quote: 'format_quote',
    left: 'format_align_left',
    center: 'format_align_center',
    right: 'format_align_right',
    justify: 'format_align_justify',
    print: 'print',
    outdent: 'format_indent_decrease',
    indent: 'format_indent_increase',
    removeFormat: 'format_clear',
    formatting: 'text_format',
    fontSize: 'format_size',
    align: 'format_align_left',
    hr: 'remove',
    undo: 'undo',
    redo: 'redo',
    heading: 'format_size',
    code: 'code',
    size: 'format_size',
    font: 'font_download',
    viewSource: 'code',
  },
  expansionItem: { icon: 'keyboard_arrow_down', denseIcon: 'arrow_drop_down' },
  fab: { icon: 'add', activeIcon: 'close' },
  field: { clear: 'cancel', error: 'error' },
  pagination: {
    first: 'first_page',
    prev: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
    last: 'last_page',
  },
  rating: { icon: 'grade' },
  stepper: { done: 'check', active: 'edit', error: 'warning' },
  tabs: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down',
  },
  table: {
    arrowUp: 'arrow_upward',
    warning: 'warning',
    firstPage: 'first_page',
    prevPage: 'chevron_left',
    nextPage: 'chevron_right',
    lastPage: 'last_page',
  },
  tree: { icon: 'play_arrow' },
  uploader: {
    done: 'done',
    clear: 'clear',
    add: 'add_box',
    upload: 'cloud_upload',
    removeQueue: 'clear_all',
    removeUploaded: 'done_all',
  },
}
const An = Vn(
    { iconMapFn: null, __qIconSet: {} },
    {
      set(e, t) {
        const n = { ...e }
        ;(n.set = An.set), Object.assign(An.__qIconSet, n)
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__qIconSet),
          Gs(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (s) => {
              this.iconMapFn = s
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : ((this.props = new Proxy(this.__qIconSet, {
                get() {
                  return Reflect.get(...arguments)
                },
                ownKeys(s) {
                  return Reflect.ownKeys(s).filter((r) => r !== 'set')
                },
              })),
              this.set(t || La))
      },
    }
  ),
  ka = '_q_',
  uf = '_q_l_',
  ff = '_q_pc_'
function df() {}
const $r = {}
let Po = !1
function Fa() {
  Po = !0
}
function Hr(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0
}
const Dr = [Ss, Ta, ge, wa, Ia, ut, An]
function jr(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0)
  })
}
function Na(e, t, n) {
  ;(e.config.globalProperties.$q = n.$q),
    e.provide(ka, n.$q),
    jr(n, Dr),
    t.components !== void 0 &&
      Object.values(t.components).forEach((s) => {
        Hr(s) === !0 && s.name !== void 0 && e.component(s.name, s)
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((s) => {
        Hr(s) === !0 && s.name !== void 0 && e.directive(s.name, s)
      }),
    t.plugins !== void 0 &&
      jr(
        n,
        Object.values(t.plugins).filter(
          (s) => typeof s.install == 'function' && Dr.includes(s) === !1
        )
      ),
    Ct.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((s) => {
          s()
        }),
          (n.$q.onSSRHydrated = () => {})
      })
}
var $a = function (e, t = {}) {
    const n = { version: '2.17.0' }
    Po === !1
      ? (t.config !== void 0 && Object.assign($r, t.config),
        (n.config = { ...$r }),
        Fa())
      : (n.config = t.config || {}),
      Na(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      })
  },
  Ha = { name: 'Quasar', version: '2.17.0', install: $a, lang: ut, iconSet: An }
const Da = Object.assign(
  { name: 'App' },
  {
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const s = ql('router-view')
        return po(), mo(s)
      }
    },
  }
)
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Mt = typeof document != 'undefined'
function To(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function ja(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === 'Module' ||
    (e.default && To(e.default))
  )
}
const X = Object.assign
function is(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Be(r) ? r.map(e) : e(r)
  }
  return n
}
const Xt = () => {},
  Be = Array.isArray,
  Ao = /#/g,
  Ba = /&/g,
  Va = /\//g,
  Ua = /=/g,
  Ka = /\?/g,
  Oo = /\+/g,
  Wa = /%5B/g,
  qa = /%5D/g,
  Mo = /%5E/g,
  za = /%60/g,
  Io = /%7B/g,
  Ga = /%7C/g,
  Lo = /%7D/g,
  Ja = /%20/g
function Js(e) {
  return encodeURI('' + e)
    .replace(Ga, '|')
    .replace(Wa, '[')
    .replace(qa, ']')
}
function Qa(e) {
  return Js(e).replace(Io, '{').replace(Lo, '}').replace(Mo, '^')
}
function Cs(e) {
  return Js(e)
    .replace(Oo, '%2B')
    .replace(Ja, '+')
    .replace(Ao, '%23')
    .replace(Ba, '%26')
    .replace(za, '`')
    .replace(Io, '{')
    .replace(Lo, '}')
    .replace(Mo, '^')
}
function Ya(e) {
  return Cs(e).replace(Ua, '%3D')
}
function Xa(e) {
  return Js(e).replace(Ao, '%23').replace(Ka, '%3F')
}
function Za(e) {
  return e == null ? '' : Xa(e).replace(Va, '%2F')
}
function an(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const eu = /\/$/,
  tu = (e) => e.replace(eu, '')
function os(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (i = t.slice(l + 1, c > -1 ? c : t.length)),
      (r = e(i))),
    c > -1 && ((s = s || t.slice(0, c)), (o = t.slice(c, t.length))),
    (s = iu(s != null ? s : t, n)),
    { fullPath: s + (i && '?') + i + o, path: s, query: r, hash: an(o) }
  )
}
function nu(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Br(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function su(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    $t(t.matched[s], n.matched[r]) &&
    ko(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function $t(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ko(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!ru(e[n], t[n])) return !1
  return !0
}
function ru(e, t) {
  return Be(e) ? Vr(e, t) : Be(t) ? Vr(t, e) : e === t
}
function Vr(e, t) {
  return Be(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function iu(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    c
  for (o = 0; o < s.length; o++)
    if (((c = s[o]), c !== '.'))
      if (c === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const ot = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var un
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(un || (un = {}))
var Zt
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Zt || (Zt = {}))
function ou(e) {
  if (!e)
    if (Mt) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), tu(e)
}
const lu = /^[^#]+#/
function cu(e, t) {
  return e.replace(lu, '#') + t
}
function au(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Kn = () => ({ left: window.scrollX, top: window.scrollY })
function uu(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = au(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ur(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Rs = new Map()
function fu(e, t) {
  Rs.set(e, t)
}
function du(e) {
  const t = Rs.get(e)
  return Rs.delete(e), t
}
let hu = () => location.protocol + '//' + location.host
function Fo(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let c = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(c)
    return l[0] !== '/' && (l = '/' + l), Br(l, '')
  }
  return Br(n, e) + s + r
}
function pu(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const c = ({ state: p }) => {
    const g = Fo(e, location),
      x = n.value,
      T = t.value
    let D = 0
    if (p) {
      if (((n.value = g), (t.value = p), o && o === x)) {
        o = null
        return
      }
      D = T ? p.position - T.position : 0
    } else s(g)
    r.forEach((k) => {
      k(n.value, x, {
        delta: D,
        type: un.pop,
        direction: D ? (D > 0 ? Zt.forward : Zt.back) : Zt.unknown,
      })
    })
  }
  function l() {
    o = n.value
  }
  function h(p) {
    r.push(p)
    const g = () => {
      const x = r.indexOf(p)
      x > -1 && r.splice(x, 1)
    }
    return i.push(g), g
  }
  function u() {
    const { history: p } = window
    !p.state || p.replaceState(X({}, p.state, { scroll: Kn() }), '')
  }
  function f() {
    for (const p of i) p()
    ;(i = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', u)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: f }
  )
}
function Kr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Kn() : null,
  }
}
function gu(e) {
  const { history: t, location: n } = window,
    s = { value: Fo(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function i(l, h, u) {
    const f = e.indexOf('#'),
      p =
        f > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(f)) + l
          : hu() + e + l
    try {
      t[u ? 'replaceState' : 'pushState'](h, '', p), (r.value = h)
    } catch (g) {
      console.error(g), n[u ? 'replace' : 'assign'](p)
    }
  }
  function o(l, h) {
    const u = X({}, t.state, Kr(r.value.back, l, r.value.forward, !0), h, {
      position: r.value.position,
    })
    i(l, u, !0), (s.value = l)
  }
  function c(l, h) {
    const u = X({}, r.value, t.state, { forward: l, scroll: Kn() })
    i(u.current, u, !0)
    const f = X({}, Kr(s.value, l, null), { position: u.position + 1 }, h)
    i(l, f, !1), (s.value = l)
  }
  return { location: s, state: r, push: c, replace: o }
}
function mu(e) {
  e = ou(e)
  const t = gu(e),
    n = pu(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const r = X(
    { location: '', base: e, go: s, createHref: cu.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  )
}
function _u(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    mu(e)
  )
}
function vu(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function No(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const $o = Symbol('')
var Wr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Wr || (Wr = {}))
function Ht(e, t) {
  return X(new Error(), { type: e, [$o]: !0 }, t)
}
function Ye(e, t) {
  return e instanceof Error && $o in e && (t == null || !!(e.type & t))
}
const qr = '[^/]+?',
  bu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  yu = /[.+*?^${}()[\]/\\]/g
function wu(e, t) {
  const n = X({}, bu, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const h of e) {
    const u = h.length ? [] : [90]
    n.strict && !h.length && (r += '/')
    for (let f = 0; f < h.length; f++) {
      const p = h[f]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        f || (r += '/'), (r += p.value.replace(yu, '\\$&')), (g += 40)
      else if (p.type === 1) {
        const { value: x, repeatable: T, optional: D, regexp: k } = p
        i.push({ name: x, repeatable: T, optional: D })
        const M = k || qr
        if (M !== qr) {
          g += 10
          try {
            new RegExp(`(${M})`)
          } catch (O) {
            throw new Error(
              `Invalid custom RegExp for param "${x}" (${M}): ` + O.message
            )
          }
        }
        let F = T ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`
        f || (F = D && h.length < 2 ? `(?:/${F})` : '/' + F),
          D && (F += '?'),
          (r += F),
          (g += 20),
          D && (g += -8),
          T && (g += -20),
          M === '.*' && (g += -50)
      }
      u.push(g)
    }
    s.push(u)
  }
  if (n.strict && n.end) {
    const h = s.length - 1
    s[h][s[h].length - 1] += 0.7000000000000001
  }
  n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function c(h) {
    const u = h.match(o),
      f = {}
    if (!u) return null
    for (let p = 1; p < u.length; p++) {
      const g = u[p] || '',
        x = i[p - 1]
      f[x.name] = g && x.repeatable ? g.split('/') : g
    }
    return f
  }
  function l(h) {
    let u = '',
      f = !1
    for (const p of e) {
      ;(!f || !u.endsWith('/')) && (u += '/'), (f = !1)
      for (const g of p)
        if (g.type === 0) u += g.value
        else if (g.type === 1) {
          const { value: x, repeatable: T, optional: D } = g,
            k = x in h ? h[x] : ''
          if (Be(k) && !T)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`
            )
          const M = Be(k) ? k.join('/') : k
          if (!M)
            if (D)
              p.length < 2 &&
                (u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0))
            else throw new Error(`Missing required param "${x}"`)
          u += M
        }
    }
    return u || '/'
  }
  return { re: o, score: s, keys: i, parse: c, stringify: l }
}
function xu(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function Ho(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = xu(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (zr(s)) return 1
    if (zr(r)) return -1
  }
  return r.length - s.length
}
function zr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Eu = { type: 0, value: '' },
  Su = /[a-zA-Z0-9_]/
function Cu(e) {
  if (!e) return [[]]
  if (e === '/') return [[Eu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${h}": ${g}`)
  }
  let n = 0,
    s = n
  const r = []
  let i
  function o() {
    i && r.push(i), (i = [])
  }
  let c = 0,
    l,
    h = '',
    u = ''
  function f() {
    !h ||
      (n === 0
        ? i.push({ type: 0, value: h })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: h,
            regexp: u,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (h = ''))
  }
  function p() {
    h += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (h && f(), o()) : l === ':' ? (f(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : Su.test(l)
          ? p()
          : (f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')'
          ? u[u.length - 1] == '\\'
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l)
        break
      case 3:
        f(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (u = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), f(), o(), r
}
function Ru(e, t, n) {
  const s = wu(Cu(e.path), n),
    r = X(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function Pu(e, t) {
  const n = [],
    s = new Map()
  t = Yr({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(f) {
    return s.get(f)
  }
  function i(f, p, g) {
    const x = !g,
      T = Jr(f)
    T.aliasOf = g && g.record
    const D = Yr(t, f),
      k = [T]
    if ('alias' in f) {
      const O = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const U of O)
        k.push(
          Jr(
            X({}, T, {
              components: g ? g.record.components : T.components,
              path: U,
              aliasOf: g ? g.record : T,
            })
          )
        )
    }
    let M, F
    for (const O of k) {
      const { path: U } = O
      if (p && U[0] !== '/') {
        const te = p.record.path,
          Z = te[te.length - 1] === '/' ? '' : '/'
        O.path = p.record.path + (U && Z + U)
      }
      if (
        ((M = Ru(O, p, D)),
        g
          ? g.alias.push(M)
          : ((F = F || M),
            F !== M && F.alias.push(M),
            x && f.name && !Qr(M) && o(f.name)),
        Do(M) && l(M),
        T.children)
      ) {
        const te = T.children
        for (let Z = 0; Z < te.length; Z++) i(te[Z], M, g && g.children[Z])
      }
      g = g || M
    }
    return F
      ? () => {
          o(F)
        }
      : Xt
  }
  function o(f) {
    if (No(f)) {
      const p = s.get(f)
      p &&
        (s.delete(f),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o))
    } else {
      const p = n.indexOf(f)
      p > -1 &&
        (n.splice(p, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(o),
        f.alias.forEach(o))
    }
  }
  function c() {
    return n
  }
  function l(f) {
    const p = Ou(f, n)
    n.splice(p, 0, f), f.record.name && !Qr(f) && s.set(f.record.name, f)
  }
  function h(f, p) {
    let g,
      x = {},
      T,
      D
    if ('name' in f && f.name) {
      if (((g = s.get(f.name)), !g)) throw Ht(1, { location: f })
      ;(D = g.record.name),
        (x = X(
          Gr(
            p.params,
            g.keys
              .filter((F) => !F.optional)
              .concat(g.parent ? g.parent.keys.filter((F) => F.optional) : [])
              .map((F) => F.name)
          ),
          f.params &&
            Gr(
              f.params,
              g.keys.map((F) => F.name)
            )
        )),
        (T = g.stringify(x))
    } else if (f.path != null)
      (T = f.path),
        (g = n.find((F) => F.re.test(T))),
        g && ((x = g.parse(T)), (D = g.record.name))
    else {
      if (((g = p.name ? s.get(p.name) : n.find((F) => F.re.test(p.path))), !g))
        throw Ht(1, { location: f, currentLocation: p })
      ;(D = g.record.name),
        (x = X({}, p.params, f.params)),
        (T = g.stringify(x))
    }
    const k = []
    let M = g
    for (; M; ) k.unshift(M.record), (M = M.parent)
    return { name: D, path: T, params: x, matched: k, meta: Au(k) }
  }
  e.forEach((f) => i(f))
  function u() {
    ;(n.length = 0), s.clear()
  }
  return {
    addRoute: i,
    resolve: h,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: c,
    getRecordMatcher: r,
  }
}
function Gr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function Jr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Tu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function Tu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function Qr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Au(e) {
  return e.reduce((t, n) => X(t, n.meta), {})
}
function Yr(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Ou(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    Ho(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = Mu(e)
  return r && (s = t.lastIndexOf(r, s - 1)), s
}
function Mu(e) {
  let t = e
  for (; (t = t.parent); ) if (Do(t) && Ho(e, t) === 0) return t
}
function Do({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function Iu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Oo, ' '),
      o = i.indexOf('='),
      c = an(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : an(i.slice(o + 1))
    if (c in t) {
      let h = t[c]
      Be(h) || (h = t[c] = [h]), h.push(l)
    } else t[c] = l
  }
  return t
}
function Xr(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Ya(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Be(s) ? s.map((i) => i && Cs(i)) : [s && Cs(s)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
    })
  }
  return t
}
function Lu(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Be(s)
        ? s.map((r) => (r == null ? null : '' + r))
        : s == null
        ? s
        : '' + s)
  }
  return t
}
const ku = Symbol(''),
  Zr = Symbol(''),
  Qs = Symbol(''),
  jo = Symbol(''),
  Ps = Symbol('')
function Ut() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function ft(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((c, l) => {
      const h = (p) => {
          p === !1
            ? l(Ht(4, { from: n, to: t }))
            : p instanceof Error
            ? l(p)
            : vu(p)
            ? l(Ht(2, { from: t, to: p }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof p == 'function' &&
                o.push(p),
              c())
        },
        u = i(() => e.call(s && s.instances[r], t, n, h))
      let f = Promise.resolve(u)
      e.length < 3 && (f = f.then(h)), f.catch((p) => l(p))
    })
}
function ls(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const c in o.components) {
      let l = o.components[c]
      if (!(t !== 'beforeRouteEnter' && !o.instances[c]))
        if (To(l)) {
          const u = (l.__vccOpts || l)[t]
          u && i.push(ft(u, n, s, o, c, r))
        } else {
          let h = l()
          i.push(() =>
            h.then((u) => {
              if (!u)
                throw new Error(
                  `Couldn't resolve component "${c}" at "${o.path}"`
                )
              const f = ja(u) ? u.default : u
              ;(o.mods[c] = u), (o.components[c] = f)
              const g = (f.__vccOpts || f)[t]
              return g && ft(g, n, s, o, c, r)()
            })
          )
        }
    }
  return i
}
function ei(e) {
  const t = tt(Qs),
    n = tt(jo),
    s = Ne(() => {
      const l = kt(e.to)
      return t.resolve(l)
    }),
    r = Ne(() => {
      const { matched: l } = s.value,
        { length: h } = l,
        u = l[h - 1],
        f = n.matched
      if (!u || !f.length) return -1
      const p = f.findIndex($t.bind(null, u))
      if (p > -1) return p
      const g = ti(l[h - 2])
      return h > 1 && ti(u) === g && f[f.length - 1].path !== g
        ? f.findIndex($t.bind(null, l[h - 2]))
        : p
    }),
    i = Ne(() => r.value > -1 && Hu(n.params, s.value.params)),
    o = Ne(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        ko(n.params, s.value.params)
    )
  function c(l = {}) {
    return $u(l)
      ? t[kt(e.replace) ? 'replace' : 'push'](kt(e.to)).catch(Xt)
      : Promise.resolve()
  }
  return {
    route: s,
    href: Ne(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: c,
  }
}
const Fu = Us({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: ei,
    setup(e, { slots: t }) {
      const n = Dt(ei(e)),
        { options: s } = tt(Qs),
        r = Ne(() => ({
          [ni(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [ni(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : zs(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            )
      }
    },
  }),
  Nu = Fu
function $u(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Hu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Be(r) || r.length !== s.length || s.some((i, o) => i !== r[o]))
      return !1
  }
  return !0
}
function ti(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ni = (e, t, n) => (e != null ? e : t != null ? t : n),
  Du = Us({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = tt(Ps),
        r = Ne(() => e.route || s.value),
        i = tt(Zr, 0),
        o = Ne(() => {
          let h = kt(i)
          const { matched: u } = r.value
          let f
          for (; (f = u[h]) && !f.components; ) h++
          return h
        }),
        c = Ne(() => r.value.matched[o.value])
      vn(
        Zr,
        Ne(() => o.value + 1)
      ),
        vn(ku, c),
        vn(Ps, r)
      const l = Ai()
      return (
        bn(
          () => [l.value, c.value, e.name],
          ([h, u, f], [p, g, x]) => {
            u &&
              ((u.instances[f] = h),
              g &&
                g !== u &&
                h &&
                h === p &&
                (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
                u.updateGuards.size || (u.updateGuards = g.updateGuards))),
              h &&
                u &&
                (!g || !$t(u, g) || !p) &&
                (u.enterCallbacks[f] || []).forEach((T) => T(h))
          },
          { flush: 'post' }
        ),
        () => {
          const h = r.value,
            u = e.name,
            f = c.value,
            p = f && f.components[u]
          if (!p) return si(n.default, { Component: p, route: h })
          const g = f.props[u],
            x = g
              ? g === !0
                ? h.params
                : typeof g == 'function'
                ? g(h)
                : g
              : null,
            D = zs(
              p,
              X({}, x, t, {
                onVnodeUnmounted: (k) => {
                  k.component.isUnmounted && (f.instances[u] = null)
                },
                ref: l,
              })
            )
          return si(n.default, { Component: D, route: h }) || D
        }
      )
    },
  })
function si(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const ju = Du
function Bu(e) {
  const t = Pu(e.routes, e),
    n = e.parseQuery || Iu,
    s = e.stringifyQuery || Xr,
    r = e.history,
    i = Ut(),
    o = Ut(),
    c = Ut(),
    l = wl(ot)
  let h = ot
  Mt &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = is.bind(null, (v) => '' + v),
    f = is.bind(null, Za),
    p = is.bind(null, an)
  function g(v, A) {
    let R, L
    return (
      No(v) ? ((R = t.getRecordMatcher(v)), (L = A)) : (L = v), t.addRoute(L, R)
    )
  }
  function x(v) {
    const A = t.getRecordMatcher(v)
    A && t.removeRoute(A)
  }
  function T() {
    return t.getRoutes().map((v) => v.record)
  }
  function D(v) {
    return !!t.getRecordMatcher(v)
  }
  function k(v, A) {
    if (((A = X({}, A || l.value)), typeof v == 'string')) {
      const d = os(n, v, A.path),
        m = t.resolve({ path: d.path }, A),
        b = r.createHref(d.fullPath)
      return X(d, m, {
        params: p(m.params),
        hash: an(d.hash),
        redirectedFrom: void 0,
        href: b,
      })
    }
    let R
    if (v.path != null) R = X({}, v, { path: os(n, v.path, A.path).path })
    else {
      const d = X({}, v.params)
      for (const m in d) d[m] == null && delete d[m]
      ;(R = X({}, v, { params: f(d) })), (A.params = f(A.params))
    }
    const L = t.resolve(R, A),
      J = v.hash || ''
    L.params = u(p(L.params))
    const oe = nu(s, X({}, v, { hash: Qa(J), path: L.path })),
      a = r.createHref(oe)
    return X(
      { fullPath: oe, hash: J, query: s === Xr ? Lu(v.query) : v.query || {} },
      L,
      { redirectedFrom: void 0, href: a }
    )
  }
  function M(v) {
    return typeof v == 'string' ? os(n, v, l.value.path) : X({}, v)
  }
  function F(v, A) {
    if (h !== v) return Ht(8, { from: A, to: v })
  }
  function O(v) {
    return Z(v)
  }
  function U(v) {
    return O(X(M(v), { replace: !0 }))
  }
  function te(v) {
    const A = v.matched[v.matched.length - 1]
    if (A && A.redirect) {
      const { redirect: R } = A
      let L = typeof R == 'function' ? R(v) : R
      return (
        typeof L == 'string' &&
          ((L = L.includes('?') || L.includes('#') ? (L = M(L)) : { path: L }),
          (L.params = {})),
        X(
          {
            query: v.query,
            hash: v.hash,
            params: L.path != null ? {} : v.params,
          },
          L
        )
      )
    }
  }
  function Z(v, A) {
    const R = (h = k(v)),
      L = l.value,
      J = v.state,
      oe = v.force,
      a = v.replace === !0,
      d = te(R)
    if (d)
      return Z(
        X(M(d), {
          state: typeof d == 'object' ? X({}, J, d.state) : J,
          force: oe,
          replace: a,
        }),
        A || R
      )
    const m = R
    m.redirectedFrom = A
    let b
    return (
      !oe &&
        su(s, L, R) &&
        ((b = Ht(16, { to: m, from: L })), Ve(L, L, !0, !1)),
      (b ? Promise.resolve(b) : W(m, L))
        .catch((_) => (Ye(_) ? (Ye(_, 2) ? _ : st(_)) : G(_, m, L)))
        .then((_) => {
          if (_) {
            if (Ye(_, 2))
              return Z(
                X({ replace: a }, M(_.to), {
                  state: typeof _.to == 'object' ? X({}, J, _.to.state) : J,
                  force: oe,
                }),
                A || m
              )
          } else _ = I(m, L, !0, a, J)
          return se(m, L, _), _
        })
    )
  }
  function he(v, A) {
    const R = F(v, A)
    return R ? Promise.reject(R) : Promise.resolve()
  }
  function V(v) {
    const A = Tt.values().next().value
    return A && typeof A.runWithContext == 'function'
      ? A.runWithContext(v)
      : v()
  }
  function W(v, A) {
    let R
    const [L, J, oe] = Vu(v, A)
    R = ls(L.reverse(), 'beforeRouteLeave', v, A)
    for (const d of L)
      d.leaveGuards.forEach((m) => {
        R.push(ft(m, v, A))
      })
    const a = he.bind(null, v, A)
    return (
      R.push(a),
      Me(R)
        .then(() => {
          R = []
          for (const d of i.list()) R.push(ft(d, v, A))
          return R.push(a), Me(R)
        })
        .then(() => {
          R = ls(J, 'beforeRouteUpdate', v, A)
          for (const d of J)
            d.updateGuards.forEach((m) => {
              R.push(ft(m, v, A))
            })
          return R.push(a), Me(R)
        })
        .then(() => {
          R = []
          for (const d of oe)
            if (d.beforeEnter)
              if (Be(d.beforeEnter))
                for (const m of d.beforeEnter) R.push(ft(m, v, A))
              else R.push(ft(d.beforeEnter, v, A))
          return R.push(a), Me(R)
        })
        .then(
          () => (
            v.matched.forEach((d) => (d.enterCallbacks = {})),
            (R = ls(oe, 'beforeRouteEnter', v, A, V)),
            R.push(a),
            Me(R)
          )
        )
        .then(() => {
          R = []
          for (const d of o.list()) R.push(ft(d, v, A))
          return R.push(a), Me(R)
        })
        .catch((d) => (Ye(d, 8) ? d : Promise.reject(d)))
    )
  }
  function se(v, A, R) {
    c.list().forEach((L) => V(() => L(v, A, R)))
  }
  function I(v, A, R, L, J) {
    const oe = F(v, A)
    if (oe) return oe
    const a = A === ot,
      d = Mt ? history.state : {}
    R &&
      (L || a
        ? r.replace(v.fullPath, X({ scroll: a && d && d.scroll }, J))
        : r.push(v.fullPath, J)),
      (l.value = v),
      Ve(v, A, R, a),
      st()
  }
  let z
  function fe() {
    z ||
      (z = r.listen((v, A, R) => {
        if (!hn.listening) return
        const L = k(v),
          J = te(L)
        if (J) {
          Z(X(J, { replace: !0 }), L).catch(Xt)
          return
        }
        h = L
        const oe = l.value
        Mt && fu(Ur(oe.fullPath, R.delta), Kn()),
          W(L, oe)
            .catch((a) =>
              Ye(a, 12)
                ? a
                : Ye(a, 2)
                ? (Z(a.to, L)
                    .then((d) => {
                      Ye(d, 20) && !R.delta && R.type === un.pop && r.go(-1, !1)
                    })
                    .catch(Xt),
                  Promise.reject())
                : (R.delta && r.go(-R.delta, !1), G(a, L, oe))
            )
            .then((a) => {
              ;(a = a || I(L, oe, !1)),
                a &&
                  (R.delta && !Ye(a, 8)
                    ? r.go(-R.delta, !1)
                    : R.type === un.pop && Ye(a, 20) && r.go(-1, !1)),
                se(L, oe, a)
            })
            .catch(Xt)
      }))
  }
  let ke = Ut(),
    ce = Ut(),
    ee
  function G(v, A, R) {
    st(v)
    const L = ce.list()
    return (
      L.length ? L.forEach((J) => J(v, A, R)) : console.error(v),
      Promise.reject(v)
    )
  }
  function Je() {
    return ee && l.value !== ot
      ? Promise.resolve()
      : new Promise((v, A) => {
          ke.add([v, A])
        })
  }
  function st(v) {
    return (
      ee ||
        ((ee = !v),
        fe(),
        ke.list().forEach(([A, R]) => (v ? R(v) : A())),
        ke.reset()),
      v
    )
  }
  function Ve(v, A, R, L) {
    const { scrollBehavior: J } = e
    if (!Mt || !J) return Promise.resolve()
    const oe =
      (!R && du(Ur(v.fullPath, 0))) ||
      ((L || !R) && history.state && history.state.scroll) ||
      null
    return Li()
      .then(() => J(v, A, oe))
      .then((a) => a && uu(a))
      .catch((a) => G(a, v, A))
  }
  const we = (v) => r.go(v)
  let Pt
  const Tt = new Set(),
    hn = {
      currentRoute: l,
      listening: !0,
      addRoute: g,
      removeRoute: x,
      clearRoutes: t.clearRoutes,
      hasRoute: D,
      getRoutes: T,
      resolve: k,
      options: e,
      push: O,
      replace: U,
      go: we,
      back: () => we(-1),
      forward: () => we(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: c.add,
      onError: ce.add,
      isReady: Je,
      install(v) {
        const A = this
        v.component('RouterLink', Nu),
          v.component('RouterView', ju),
          (v.config.globalProperties.$router = A),
          Object.defineProperty(v.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => kt(l),
          }),
          Mt &&
            !Pt &&
            l.value === ot &&
            ((Pt = !0), O(r.location).catch((J) => {}))
        const R = {}
        for (const J in ot)
          Object.defineProperty(R, J, { get: () => l.value[J], enumerable: !0 })
        v.provide(Qs, A), v.provide(jo, Pi(R)), v.provide(Ps, l)
        const L = v.unmount
        Tt.add(v),
          (v.unmount = function () {
            Tt.delete(v),
              Tt.size < 1 &&
                ((h = ot),
                z && z(),
                (z = null),
                (l.value = ot),
                (Pt = !1),
                (ee = !1)),
              L()
          })
      },
    }
  function Me(v) {
    return v.reduce((A, R) => A.then(() => V(R)), Promise.resolve())
  }
  return hn
}
function Vu(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const c = t.matched[o]
    c && (e.matched.find((h) => $t(h, c)) ? s.push(c) : n.push(c))
    const l = e.matched[o]
    l && (t.matched.find((h) => $t(h, l)) || r.push(l))
  }
  return [n, s, r]
}
const Uu = (function () {
    const t = document.createElement('link').relList
    return t && t.supports && t.supports('modulepreload')
      ? 'modulepreload'
      : 'preload'
  })(),
  ri = {},
  Ku = '/task/',
  cs = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((s) => {
            if (((s = `${Ku}${s}`), s in ri)) return
            ri[s] = !0
            const r = s.endsWith('.css'),
              i = r ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${s}"]${i}`)) return
            const o = document.createElement('link')
            if (
              ((o.rel = r ? 'stylesheet' : Uu),
              r || ((o.as = 'script'), (o.crossOrigin = '')),
              (o.href = s),
              document.head.appendChild(o),
              r)
            )
              return new Promise((c, l) => {
                o.addEventListener('load', c),
                  o.addEventListener('error', () =>
                    l(new Error(`Unable to preload CSS for ${s}`))
                  )
              })
          })
        ).then(() => t())
  },
  Wu = [
    {
      path: '/',
      component: () =>
        cs(
          () => import('./MainLayout.97b69592.js'),
          [
            'assets/MainLayout.97b69592.js',
            'assets/use-router-link.d67972ef.js',
            'assets/render.f1930b0f.js',
          ]
        ),
      children: [
        {
          path: '',
          component: () =>
            cs(
              () => import('./IndexPage.b75c4a2a.js'),
              ['assets/IndexPage.b75c4a2a.js', 'assets/render.f1930b0f.js']
            ),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () =>
        cs(
          () => import('./ErrorNotFound.90fb0a01.js'),
          [
            'assets/ErrorNotFound.90fb0a01.js',
            'assets/use-router-link.d67972ef.js',
            'assets/render.f1930b0f.js',
          ]
        ),
    },
  ]
var as = function () {
  return Bu({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: Wu,
    history: _u('/task/'),
  })
}
async function qu(e, t) {
  const n = e(Da)
  n.use(Ha, t)
  const s = Fn(typeof as == 'function' ? await as({}) : as)
  return { app: n, router: s }
}
var zu = { config: {} }
async function Gu({ app: e, router: t }) {
  e.use(t), e.mount('#q-app')
}
qu(ha, zu).then(Gu)
export {
  nf as A,
  zi as B,
  Ju as C,
  Un as D,
  rf as E,
  Zu as T,
  Ne as a,
  mo as b,
  ef as c,
  Se as d,
  Xu as e,
  Rc as f,
  Mc as g,
  zs as h,
  af as i,
  Qu as j,
  vo as k,
  Yu as l,
  tt as m,
  Ls as n,
  po as o,
  df as p,
  uf as q,
  Ai as r,
  of as s,
  el as t,
  ff as u,
  tf as v,
  Ml as w,
  lf as x,
  cf as y,
  sf as z,
}
