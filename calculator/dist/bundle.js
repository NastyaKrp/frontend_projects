;(function () {
  'use strict'

  function t(t, e) {
    return t - e
  }

  function e(t, e) {
    return t * e
  }

  function o(t, e) {
    if (0 === e) throw new Error('Division by zero!')
    return t / e
  }
  const n = document.getElementById('themeToggle')
  n.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'), n.classList.toggle('dark')
  })
  const r = document.getElementById('display'),
    s = document.querySelectorAll('.buttons button')
  let l = ''
  const a = { '+': 1, '-': 1, '*': 2, '/': 2 },
    c = { '+': 'left', '-': 'left', '*': 'left', '/': 'left' }
  s.forEach((t) => {
    t.addEventListener('click', () => {
      const e = t.dataset.number || t.dataset.operator
      '=' === e
        ? u()
        : 'C' === e
          ? g()
          : '+/-' === e
            ? f()
            : '%' === e
              ? d()
              : ((l += e), (r.value = l))
    })
  })

  const u = () => {
    try {
      const t = h(l),
        e = p(t)
      ;(r.value = e), (l = '')
    } catch (t) {
      ;(r.value = `Error: ${t.message}`),
        (l = ''),
        console.error('Calculation error:', t)
    }
  }

  const h = (t) => {
    const e = [],
      o = [],
      n = i(t)
    for (const t of n)
      if (isNaN(parseFloat(t)))
        if ('(' === t) o.push(t)
        else if (')' === t) {
          for (; o.length > 0 && '(' !== o[o.length - 1]; ) e.push(o.pop())
          o.pop()
        } else {
          for (
            ;
            o.length > 0 &&
            '(' !== o[o.length - 1] &&
            (a[o[o.length - 1]] > a[t] ||
              (a[o[o.length - 1]] === a[t] && 'left' === c[t]));

          )
            e.push(o.pop())
          o.push(t)
        }
      else e.push(t)
    for (; o.length > 0; ) e.push(o.pop())
    return e
  }

  const i = (t) => t.match(/(\d+(\.\d+)?|[+\-*/()])/g) || []

  const p = (n) => {
    const r = []
    for (const s of n)
      if (isNaN(parseFloat(s))) {
        const n = r.pop(),
          l = r.pop()
        let a
        switch (s) {
          case '+':
            a = l + n
            break
          case '-':
            a = t(l, n)
            break
          case '*':
            a = e(l, n)
            break
          case '/':
            a = o(l, n)
            break
          default:
            throw new Error(`Unknown operator: ${s}`)
        }
        r.push(a)
      } else r.push(parseFloat(s))
    return r[0]
  }

  const g = () => {
    ;(l = ''), (r.value = '')
  }

  const f = () => {
    if (l.length > 0) {
      const e = l.match(/(-?\d+(\.\d+)?)$/)
      if (e) {
        const o = e[0],
          n = (parseFloat(o) * -1).toString()
        ;(l = l.substring(0, l.length - o.length) + n), (r.value = l)
      }
    }
  }
  const d = () => {
    if (l.length > 0) {
      const e = l.match(/(-?\d+(\.\d+)?)$/)
      if (e) {
        const o = e[0],
          n = (parseFloat(o) / 100).toString()
        ;(l = l.substring(0, l.length - o.length) + n), (r.value = l)
      }
    }
  }
})()
