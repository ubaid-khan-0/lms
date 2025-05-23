!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (e.document) return t(e);
                    throw new Error("jQuery requires a window with a document");
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (w, M) {
    "use strict";
    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    }
    function H(e) {
        return null != e && e === e.window;
    }
    var t = [],
        q = Object.getPrototypeOf,
        a = t.slice,
        F = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        R = t.push,
        b = t.indexOf,
        W = {},
        B = W.toString,
        $ = W.hasOwnProperty,
        z = $.toString,
        V = z.call(Object),
        g = {},
        x = w.document,
        X = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function U(e, t, n) {
        var i,
            r,
            o = (n = n || x).createElement("script");
        if (((o.text = e), t)) for (i in X) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function Y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[B.call(e)] || "object" : typeof e;
    }
    var e = "3.7.0",
        Q = /HTML$/i,
        T = function (e, t) {
            return new T.fn.init(e, t);
        };
    function K(e) {
        var t = !!e && "length" in e && e.length,
            n = Y(e);
        return !y(e) && !H(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    function _(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    (T.fn = T.prototype = {
        jquery: e,
        constructor: T,
        length: 0,
        toArray: function () {
            return a.call(this);
        },
        get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            e = T.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function (e) {
            return T.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                T.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                T.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: R,
        sort: t.sort,
        splice: t.splice,
    }),
        (T.extend = T.fn.extend = function () {
            var e,
                t,
                n,
                i,
                r,
                o = arguments[0] || {},
                s = 1,
                a = arguments.length,
                l = !1;
            for ("boolean" == typeof o && ((l = o), (o = arguments[s] || {}), s++), "object" == typeof o || y(o) || (o = {}), s === a && ((o = this), s--); s < a; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = e[t]),
                            "__proto__" !== t &&
                                o !== n &&
                                (l && n && (T.isPlainObject(n) || (i = Array.isArray(n)))
                                    ? ((r = o[t]), (r = i && !Array.isArray(r) ? [] : i || T.isPlainObject(r) ? r : {}), (i = !1), (o[t] = T.extend(l, r, n)))
                                    : void 0 !== n && (o[t] = n));
            return o;
        }),
        T.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(!e || "[object Object]" !== B.call(e) || ((e = q(e)) && ("function" != typeof (e = $.call(e, "constructor") && e.constructor) || z.call(e) !== V)));
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                U(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (K(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            text: function (e) {
                var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) return e.textContent;
                    if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += T.text(t);
                return n;
            },
            makeArray: function (e, t) {
                t = t || [];
                return null != e && (K(Object(e)) ? T.merge(t, "string" == typeof e ? [e] : e) : R.call(t, e)), t;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : b.call(t, e, n);
            },
            isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !Q.test(t || (e && e.nodeName) || "HTML");
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (K(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return F(s);
            },
            guid: 1,
            support: g,
        }),
        "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            W["[object " + t + "]"] = t.toLowerCase();
        });
    var G = t.pop,
        J = t.sort,
        Z = t.splice,
        n = "[\\x20\\t\\r\\n\\f]",
        ee = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$", "g"),
        te =
            ((T.contains = function (e, t) {
                t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
            }),
            /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
    function ne(e, t) {
        return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
    }
    T.escapeSelector = function (e) {
        return (e + "").replace(te, ne);
    };
    var ie,
        E,
        re,
        oe,
        se,
        C,
        ae,
        A,
        f,
        le,
        i = x,
        ce = R,
        k = ce,
        S = T.expando,
        O = 0,
        ue = 0,
        de = De(),
        fe = De(),
        he = De(),
        pe = De(),
        ge = function (e, t) {
            return e === t && (se = !0), 0;
        },
        me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        e = "(?:\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        r = "\\[" + n + "*(" + e + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + n + "*\\]",
        o = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + r + ")*)|.*)\\)|)",
        ve = new RegExp(n + "+", "g"),
        ye = new RegExp("^" + n + "*," + n + "*"),
        be = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"),
        _e = new RegExp(n + "|>"),
        we = new RegExp(o),
        xe = new RegExp("^" + e + "$"),
        Te = {
            ID: new RegExp("^#(" + e + ")"),
            CLASS: new RegExp("^\\.(" + e + ")"),
            TAG: new RegExp("^(" + e + "|[*])"),
            ATTR: new RegExp("^" + r),
            PSEUDO: new RegExp("^" + o),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + me + ")$", "i"),
            needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)", "i"),
        },
        Ee = /^(?:input|select|textarea|button)$/i,
        Ce = /^h\d$/i,
        Ae = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ke = /[+~]/,
        d = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\([^\\r\\n\\f])", "g"),
        h = function (e, t) {
            e = "0x" + e.slice(1) - 65536;
            return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
        },
        Se = function () {
            Ie();
        },
        Oe = Fe(
            function (e) {
                return !0 === e.disabled && _(e, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
        );
    try {
        k.apply((t = a.call(i.childNodes)), i.childNodes), t[i.childNodes.length].nodeType;
    } catch (e) {
        k = {
            apply: function (e, t) {
                ce.apply(e, a.call(t));
            },
            call: function (e) {
                ce.apply(e, a.call(arguments, 1));
            },
        };
    }
    function D(t, e, n, i) {
        var r,
            o,
            s,
            a,
            l,
            c,
            u = e && e.ownerDocument,
            d = e ? e.nodeType : 9;
        if (((n = n || []), "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))) return n;
        if (!i && (Ie(e), (e = e || C), A)) {
            if (11 !== d && (a = Ae.exec(t)))
                if ((r = a[1])) {
                    if (9 === d) {
                        if (!(c = e.getElementById(r))) return n;
                        if (c.id === r) return k.call(n, c), n;
                    } else if (u && (c = u.getElementById(r)) && D.contains(e, c) && c.id === r) return k.call(n, c), n;
                } else {
                    if (a[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                    if ((r = a[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(r)), n;
                }
            if (!(pe[t + " "] || (f && f.test(t)))) {
                if (((c = t), (u = e), 1 === d && (_e.test(t) || be.test(t)))) {
                    for (((u = (ke.test(t) && Pe(e.parentNode)) || e) == e && g.scope) || ((s = e.getAttribute("id")) ? (s = T.escapeSelector(s)) : e.setAttribute("id", (s = S))), o = (l = He(t)).length; o--; )
                        l[o] = (s ? "#" + s : ":scope") + " " + qe(l[o]);
                    c = l.join(",");
                }
                try {
                    return k.apply(n, u.querySelectorAll(c)), n;
                } catch (e) {
                    pe(t, !0);
                } finally {
                    s === S && e.removeAttribute("id");
                }
            }
        }
        return Ve(t.replace(ee, "$1"), e, n, i);
    }
    function De() {
        var n = [];
        function i(e, t) {
            return n.push(e + " ") > E.cacheLength && delete i[n.shift()], (i[e + " "] = t);
        }
        return i;
    }
    function l(e) {
        return (e[S] = !0), e;
    }
    function Le(e) {
        var t = C.createElement("fieldset");
        try {
            return !!e(t);
        } catch (e) {
            return !1;
        } finally {
            t.parentNode && t.parentNode.removeChild(t);
        }
    }
    function je(t) {
        return function (e) {
            return "form" in e
                ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                        ? "label" in e.parentNode
                            ? e.parentNode.disabled === t
                            : e.disabled === t
                        : e.isDisabled === t || (e.isDisabled !== !t && Oe(e) === t)
                    : e.disabled === t
                : "label" in e && e.disabled === t;
        };
    }
    function Ne(s) {
        return l(function (o) {
            return (
                (o = +o),
                l(function (e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; ) e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                })
            );
        });
    }
    function Pe(e) {
        return e && void 0 !== e.getElementsByTagName && e;
    }
    function Ie(e) {
        var e = e ? e.ownerDocument || e : i;
        return (
            e != C &&
                9 === e.nodeType &&
                e.documentElement &&
                ((ae = (C = e).documentElement),
                (A = !T.isXMLDoc(C)),
                (le = ae.matches || ae.webkitMatchesSelector || ae.msMatchesSelector),
                i != C && (e = C.defaultView) && e.top !== e && e.addEventListener("unload", Se),
                (g.getById = Le(function (e) {
                    return (ae.appendChild(e).id = T.expando), !C.getElementsByName || !C.getElementsByName(T.expando).length;
                })),
                (g.disconnectedMatch = Le(function (e) {
                    return le.call(e, "*");
                })),
                (g.scope = Le(function () {
                    return C.querySelectorAll(":scope");
                })),
                (g.cssHas = Le(function () {
                    try {
                        C.querySelector(":has(*,:jqfake)");
                    } catch (e) {
                        return 1;
                    }
                })),
                g.getById
                    ? ((E.filter.ID = function (e) {
                          var t = e.replace(d, h);
                          return function (e) {
                              return e.getAttribute("id") === t;
                          };
                      }),
                      (E.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && A) return (t = t.getElementById(e)) ? [t] : [];
                      }))
                    : ((E.filter.ID = function (e) {
                          var t = e.replace(d, h);
                          return function (e) {
                              e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                              return e && e.value === t;
                          };
                      }),
                      (E.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && A) {
                              var n,
                                  i,
                                  r,
                                  o = t.getElementById(e);
                              if (o) {
                                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                              }
                              return [];
                          }
                      })),
                (E.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                }),
                (E.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e);
                }),
                (f = []),
                Le(function (e) {
                    var t;
                    (ae.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                        e.querySelectorAll("[selected]").length || f.push("\\[" + n + "*(?:value|" + me + ")"),
                        e.querySelectorAll("[id~=" + S + "-]").length || f.push("~="),
                        e.querySelectorAll("a#" + S + "+*").length || f.push(".#.+[+~]"),
                        e.querySelectorAll(":checked").length || f.push(":checked"),
                        (t = C.createElement("input")).setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        (ae.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
                        (t = C.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || f.push("\\[" + n + "*name" + n + "*=" + n + "*(?:''|\"\")");
                }),
                g.cssHas || f.push(":has"),
                (f = f.length && new RegExp(f.join("|"))),
                (ge = function (e, t) {
                    var n;
                    return e === t
                        ? ((se = !0), 0)
                        : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) ||
                              (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!g.sortDetached && t.compareDocumentPosition(e) === n)
                                  ? e === C || (e.ownerDocument == i && D.contains(i, e))
                                      ? -1
                                      : t === C || (t.ownerDocument == i && D.contains(i, t))
                                      ? 1
                                      : oe
                                      ? b.call(oe, e) - b.call(oe, t)
                                      : 0
                                  : 4 & n
                                  ? -1
                                  : 1);
                })),
            C
        );
    }
    for (ie in ((D.matches = function (e, t) {
        return D(e, null, null, t);
    }),
    (D.matchesSelector = function (e, t) {
        if ((Ie(e), A && !pe[t + " "] && (!f || !f.test(t))))
            try {
                var n = le.call(e, t);
                if (n || g.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
            } catch (e) {
                pe(t, !0);
            }
        return 0 < D(t, C, null, [e]).length;
    }),
    (D.contains = function (e, t) {
        return (e.ownerDocument || e) != C && Ie(e), T.contains(e, t);
    }),
    (D.attr = function (e, t) {
        (e.ownerDocument || e) != C && Ie(e);
        var n = E.attrHandle[t.toLowerCase()],
            n = n && $.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
        return void 0 !== n ? n : e.getAttribute(t);
    }),
    (D.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (T.uniqueSort = function (e) {
        var t,
            n = [],
            i = 0,
            r = 0;
        if (((se = !g.sortStable), (oe = !g.sortStable && a.call(e, 0)), J.call(e, ge), se)) {
            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
            for (; i--; ) Z.call(e, n[i], 1);
        }
        return (oe = null), e;
    }),
    (T.fn.uniqueSort = function () {
        return this.pushStack(T.uniqueSort(a.apply(this)));
    }),
    ((E = T.expr = {
        cacheLength: 50,
        createPseudo: l,
        match: Te,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
            ATTR: function (e) {
                return (e[1] = e[1].replace(d, h)), (e[3] = (e[3] || e[4] || e[5] || "").replace(d, h)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function (e) {
                return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3) ? (e[3] || D.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && D.error(e[0]),
                    e
                );
            },
            PSEUDO: function (e) {
                var t,
                    n = !e[6] && e[2];
                return Te.CHILD.test(e[0])
                    ? null
                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && we.test(n) && (t = (t = He(n, !0)) && n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
            },
        },
        filter: {
            TAG: function (e) {
                var t = e.replace(d, h).toLowerCase();
                return "*" === e
                    ? function () {
                          return !0;
                      }
                    : function (e) {
                          return _(e, t);
                      };
            },
            CLASS: function (e) {
                var t = de[e + " "];
                return (
                    t ||
                    ((t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) &&
                        de(e, function (e) {
                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                        }))
                );
            },
            ATTR: function (t, n, i) {
                return function (e) {
                    e = D.attr(e, t);
                    return null == e
                        ? "!=" === n
                        : !n ||
                              ((e += ""),
                              "=" === n
                                  ? e === i
                                  : "!=" === n
                                  ? e !== i
                                  : "^=" === n
                                  ? i && 0 === e.indexOf(i)
                                  : "*=" === n
                                  ? i && -1 < e.indexOf(i)
                                  : "$=" === n
                                  ? i && e.slice(-i.length) === i
                                  : "~=" === n
                                  ? -1 < (" " + e.replace(ve, " ") + " ").indexOf(i)
                                  : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"));
                };
            },
            CHILD: function (h, e, t, p, g) {
                var m = "nth" !== h.slice(0, 3),
                    v = "last" !== h.slice(-4),
                    y = "of-type" === e;
                return 1 === p && 0 === g
                    ? function (e) {
                          return !!e.parentNode;
                      }
                    : function (e, t, n) {
                          var i,
                              r,
                              o,
                              s,
                              a,
                              l = m != v ? "nextSibling" : "previousSibling",
                              c = e.parentNode,
                              u = y && e.nodeName.toLowerCase(),
                              d = !n && !y,
                              f = !1;
                          if (c) {
                              if (m) {
                                  for (; l; ) {
                                      for (o = e; (o = o[l]); ) if (y ? _(o, u) : 1 === o.nodeType) return !1;
                                      a = l = "only" === h && !a && "nextSibling";
                                  }
                                  return !0;
                              }
                              if (((a = [v ? c.firstChild : c.lastChild]), v && d)) {
                                  for (f = (s = (i = (r = c[S] || (c[S] = {}))[h] || [])[0] === O && i[1]) && i[2], o = s && c.childNodes[s]; (o = (++s && o && o[l]) || ((f = s = 0), a.pop())); )
                                      if (1 === o.nodeType && ++f && o === e) {
                                          r[h] = [O, s, f];
                                          break;
                                      }
                              } else if (!1 === (f = d ? (s = (i = (r = e[S] || (e[S] = {}))[h] || [])[0] === O && i[1]) : f))
                                  for (; (o = (++s && o && o[l]) || ((f = s = 0), a.pop())) && ((y ? !_(o, u) : 1 !== o.nodeType) || !++f || (d && ((r = o[S] || (o[S] = {}))[h] = [O, f]), o !== e)); );
                              return (f -= g) === p || (f % p == 0 && 0 <= f / p);
                          }
                      };
            },
            PSEUDO: function (e, o) {
                var t,
                    s = E.pseudos[e] || E.setFilters[e.toLowerCase()] || D.error("unsupported pseudo: " + e);
                return s[S]
                    ? s(o)
                    : 1 < s.length
                    ? ((t = [e, e, "", o]),
                      E.setFilters.hasOwnProperty(e.toLowerCase())
                          ? l(function (e, t) {
                                for (var n, i = s(e, o), r = i.length; r--; ) e[(n = b.call(e, i[r]))] = !(t[n] = i[r]);
                            })
                          : function (e) {
                                return s(e, 0, t);
                            })
                    : s;
            },
        },
        pseudos: {
            not: l(function (e) {
                var i = [],
                    r = [],
                    a = ze(e.replace(ee, "$1"));
                return a[S]
                    ? l(function (e, t, n, i) {
                          for (var r, o = a(e, null, i, []), s = e.length; s--; ) (r = o[s]) && (e[s] = !(t[s] = r));
                      })
                    : function (e, t, n) {
                          return (i[0] = e), a(i, null, n, r), (i[0] = null), !r.pop();
                      };
            }),
            has: l(function (t) {
                return function (e) {
                    return 0 < D(t, e).length;
                };
            }),
            contains: l(function (t) {
                return (
                    (t = t.replace(d, h)),
                    function (e) {
                        return -1 < (e.textContent || T.text(e)).indexOf(t);
                    }
                );
            }),
            lang: l(function (n) {
                return (
                    xe.test(n || "") || D.error("unsupported lang: " + n),
                    (n = n.replace(d, h).toLowerCase()),
                    function (e) {
                        var t;
                        do {
                            if ((t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    }
                );
            }),
            target: function (e) {
                var t = w.location && w.location.hash;
                return t && t.slice(1) === e.id;
            },
            root: function (e) {
                return e === ae;
            },
            focus: function (e) {
                return (
                    e ===
                        (function () {
                            try {
                                return C.activeElement;
                            } catch (e) {}
                        })() &&
                    C.hasFocus() &&
                    !!(e.type || e.href || ~e.tabIndex)
                );
            },
            enabled: je(!1),
            disabled: je(!0),
            checked: function (e) {
                return (_(e, "input") && !!e.checked) || (_(e, "option") && !!e.selected);
            },
            selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0;
            },
            parent: function (e) {
                return !E.pseudos.empty(e);
            },
            header: function (e) {
                return Ce.test(e.nodeName);
            },
            input: function (e) {
                return Ee.test(e.nodeName);
            },
            button: function (e) {
                return (_(e, "input") && "button" === e.type) || _(e, "button");
            },
            text: function (e) {
                return _(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
            },
            first: Ne(function () {
                return [0];
            }),
            last: Ne(function (e, t) {
                return [t - 1];
            }),
            eq: Ne(function (e, t, n) {
                return [n < 0 ? n + t : n];
            }),
            even: Ne(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
            }),
            odd: Ne(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
            }),
            lt: Ne(function (e, t, n) {
                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                return e;
            }),
            gt: Ne(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
            }),
        },
    }).pseudos.nth = E.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        E.pseudos[ie] = (function (t) {
            return function (e) {
                return _(e, "input") && e.type === t;
            };
        })(ie);
    for (ie in { submit: !0, reset: !0 })
        E.pseudos[ie] = (function (t) {
            return function (e) {
                return (_(e, "input") || _(e, "button")) && e.type === t;
            };
        })(ie);
    function Me() {}
    function He(e, t) {
        var n,
            i,
            r,
            o,
            s,
            a,
            l,
            c = fe[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, a = [], l = E.preFilter; s; ) {
            for (o in ((n && !(i = ye.exec(s))) || (i && (s = s.slice(i[0].length) || s), a.push((r = []))),
            (n = !1),
            (i = be.exec(s)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace(ee, " ") }), (s = s.slice(n.length))),
            E.filter))
                !(i = Te[o].exec(s)) || (l[o] && !(i = l[o](i))) || ((n = i.shift()), r.push({ value: n, type: o, matches: i }), (s = s.slice(n.length)));
            if (!n) break;
        }
        return t ? s.length : s ? D.error(e) : fe(e, a).slice(0);
    }
    function qe(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
    }
    function Fe(s, e, t) {
        var a = e.dir,
            l = e.next,
            c = l || a,
            u = t && "parentNode" === c,
            d = ue++;
        return e.first
            ? function (e, t, n) {
                  for (; (e = e[a]); ) if (1 === e.nodeType || u) return s(e, t, n);
                  return !1;
              }
            : function (e, t, n) {
                  var i,
                      r,
                      o = [O, d];
                  if (n) {
                      for (; (e = e[a]); ) if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
                  } else
                      for (; (e = e[a]); )
                          if (1 === e.nodeType || u)
                              if (((r = e[S] || (e[S] = {})), l && _(e, l))) e = e[a] || e;
                              else {
                                  if ((i = r[c]) && i[0] === O && i[1] === d) return (o[2] = i[2]);
                                  if (((r[c] = o)[2] = s(e, t, n))) return !0;
                              }
                  return !1;
              };
    }
    function Re(r) {
        return 1 < r.length
            ? function (e, t, n) {
                  for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                  return !0;
              }
            : r[0];
    }
    function We(e, t, n, i, r) {
        for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) !(o = e[a]) || (n && !n(o, i, r)) || (s.push(o), c && t.push(a));
        return s;
    }
    function Be(h, p, g, m, v, e) {
        return (
            m && !m[S] && (m = Be(m)),
            v && !v[S] && (v = Be(v, e)),
            l(function (e, t, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l = [],
                    c = [],
                    u = t.length,
                    d =
                        e ||
                        (function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) D(e, t[i], n);
                            return n;
                        })(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || (!e && p) ? d : We(d, l, h, n, i);
                if ((g ? g(f, (a = v || (e ? h : u || m) ? [] : t), n, i) : (a = f), m)) for (r = We(a, c), m(r, [], n, i), o = r.length; o--; ) (s = r[o]) && (a[c[o]] = !(f[c[o]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = a.length; o--; ) (s = a[o]) && r.push((f[o] = s));
                            v(null, (a = []), r, i);
                        }
                        for (o = a.length; o--; ) (s = a[o]) && -1 < (r = v ? b.call(e, s) : l[o]) && (e[r] = !(t[r] = s));
                    }
                } else (a = We(a === t ? a.splice(u, a.length) : a)), v ? v(null, t, a, i) : k.apply(t, a);
            })
        );
    }
    function $e(m, v) {
        function e(e, t, n, i, r) {
            var o,
                s,
                a,
                l = 0,
                c = "0",
                u = e && [],
                d = [],
                f = re,
                h = e || (b && E.find.TAG("*", r)),
                p = (O += null == f ? 1 : Math.random() || 0.1),
                g = h.length;
            for (r && (re = t == C || t || r); c !== g && null != (o = h[c]); c++) {
                if (b && o) {
                    for (s = 0, t || o.ownerDocument == C || (Ie(o), (n = !A)); (a = m[s++]); )
                        if (a(o, t || C, n)) {
                            k.call(i, o);
                            break;
                        }
                    r && (O = p);
                }
                y && ((o = !a && o) && l--, e) && u.push(o);
            }
            if (((l += c), y && c !== l)) {
                for (s = 0; (a = v[s++]); ) a(u, d, t, n);
                if (e) {
                    if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = G.call(i));
                    d = We(d);
                }
                k.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && T.uniqueSort(i);
            }
            return r && ((O = p), (re = f)), u;
        }
        var y = 0 < v.length,
            b = 0 < m.length;
        return y ? l(e) : e;
    }
    function ze(e, t) {
        var n,
            i = [],
            r = [],
            o = he[e + " "];
        if (!o) {
            for (n = (t = t || He(e)).length; n--; )
                ((o = (function e(t) {
                    for (
                        var i,
                            n,
                            r,
                            o = t.length,
                            s = E.relative[t[0].type],
                            a = s || E.relative[" "],
                            l = s ? 1 : 0,
                            c = Fe(
                                function (e) {
                                    return e === i;
                                },
                                a,
                                !0
                            ),
                            u = Fe(
                                function (e) {
                                    return -1 < b.call(i, e);
                                },
                                a,
                                !0
                            ),
                            d = [
                                function (e, t, n) {
                                    return (e = (!s && (n || t != re)) || ((i = t).nodeType ? c : u)(e, t, n)), (i = null), e;
                                },
                            ];
                        l < o;
                        l++
                    )
                        if ((n = E.relative[t[l].type])) d = [Fe(Re(d), n)];
                        else {
                            if ((n = E.filter[t[l].type].apply(null, t[l].matches))[S]) {
                                for (r = ++l; r < o && !E.relative[t[r].type]; r++);
                                return Be(1 < l && Re(d), 1 < l && qe(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(ee, "$1"), n, l < r && e(t.slice(l, r)), r < o && e((t = t.slice(r))), r < o && qe(t));
                            }
                            d.push(n);
                        }
                    return Re(d);
                })(t[n]))[S]
                    ? i
                    : r
                ).push(o);
            (o = he(e, $e(r, i))).selector = e;
        }
        return o;
    }
    function Ve(e, t, n, i) {
        var r,
            o,
            s,
            a,
            l,
            c = "function" == typeof e && e,
            u = !i && He((e = c.selector || e));
        if (((n = n || []), 1 === u.length)) {
            if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && A && E.relative[o[1].type]) {
                if (!(t = (E.find.ID(s.matches[0].replace(d, h), t) || [])[0])) return n;
                c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (r = Te.needsContext.test(e) ? 0 : o.length; r-- && ((s = o[r]), !E.relative[(a = s.type)]); )
                if ((l = E.find[a]) && (i = l(s.matches[0].replace(d, h), (ke.test(o[0].type) && Pe(t.parentNode)) || t))) {
                    if ((o.splice(r, 1), (e = i.length && qe(o)))) break;
                    return k.apply(n, i), n;
                }
        }
        return (c || ze(e, u))(i, t, !A, n, !t || (ke.test(e) && Pe(t.parentNode)) || t), n;
    }
    (Me.prototype = E.filters = E.pseudos),
        (E.setFilters = new Me()),
        (g.sortStable = S.split("").sort(ge).join("") === S),
        Ie(),
        (g.sortDetached = Le(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        (T.find = D),
        (T.expr[":"] = T.expr.pseudos),
        (T.unique = T.uniqueSort),
        (D.compile = ze),
        (D.select = Ve),
        (D.setDocument = Ie),
        (D.escape = T.escapeSelector),
        (D.getText = T.text),
        (D.isXML = T.isXMLDoc),
        (D.selectors = T.expr),
        (D.support = T.support),
        (D.uniqueSort = T.uniqueSort);
    function Xe(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && T(e).is(n)) break;
                i.push(e);
            }
        return i;
    }
    function Ue(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var Ye = T.expr.match.needsContext,
        Qe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Ke(e, n, i) {
        return y(n)
            ? T.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? T.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? T.grep(e, function (e) {
                  return -1 < b.call(n, e) !== i;
              })
            : T.filter(n, e, i);
    }
    (T.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? T.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : T.find.matches(
                      e,
                      T.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        T.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        T(e).filter(function () {
                            for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
                return 1 < i ? T.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(Ke(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(Ke(this, e || [], !0));
            },
            is: function (e) {
                return !!Ke(this, "string" == typeof e && Ye.test(e) ? T(e) : e || [], !1).length;
            },
        });
    var Ge,
        Je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ze =
            (((T.fn.init = function (e, t, n) {
                if (e) {
                    if (((n = n || Ge), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : y(e) ? (void 0 !== n.ready ? n.ready(e) : e(T)) : T.makeArray(e, this);
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Je.exec(e)) || (!i[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                    if (i[1]) {
                        if (((t = t instanceof T ? t[0] : t), T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), Qe.test(i[1]) && T.isPlainObject(t)))
                            for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    } else (n = x.getElementById(i[2])) && ((this[0] = n), (this.length = 1));
                }
                return this;
            }).prototype = T.fn),
            (Ge = T(x)),
            /^(?:parents|prev(?:Until|All))/),
        et = { children: !0, contents: !0, next: !0, prev: !0 };
    function tt(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    T.fn.extend({
        has: function (e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
            if (!Ye.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? b.call(T(e), this[0]) : b.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        T.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return Xe(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return Xe(e, "parentNode", n);
                },
                next: function (e) {
                    return tt(e, "nextSibling");
                },
                prev: function (e) {
                    return tt(e, "previousSibling");
                },
                nextAll: function (e) {
                    return Xe(e, "nextSibling");
                },
                prevAll: function (e) {
                    return Xe(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return Xe(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return Xe(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Ue((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Ue(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && q(e.contentDocument) ? e.contentDocument : (_(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
                },
            },
            function (i, r) {
                T.fn[i] = function (e, t) {
                    var n = T.map(this, r, e);
                    return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (et[i] || T.uniqueSort(n), Ze.test(i)) && n.reverse(), this.pushStack(n);
                };
            }
        );
    var L = /[^\x20\t\r\n\f]+/g;
    function nt(e) {
        return e;
    }
    function it(e) {
        throw e;
    }
    function rt(e, t, n, i) {
        var r;
        try {
            e && y((r = e.promise)) ? r.call(e).done(t).fail(n) : e && y((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (T.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  T.each(e.match(L) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : T.extend({}, i);
        function r() {
            for (a = a || i.once, s = o = !0; c.length; u = -1) for (t = c.shift(); ++u < l.length; ) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && ((u = l.length), (t = !1));
            i.memory || (t = !1), (o = !1), a && (l = t ? [] : "");
        }
        var o,
            t,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            d = {
                add: function () {
                    return (
                        l &&
                            (t && !o && ((u = l.length - 1), c.push(t)),
                            (function n(e) {
                                T.each(e, function (e, t) {
                                    y(t) ? (i.unique && d.has(t)) || l.push(t) : t && t.length && "string" !== Y(t) && n(t);
                                });
                            })(arguments),
                            t) &&
                            !o &&
                            r(),
                        this
                    );
                },
                remove: function () {
                    return (
                        T.each(arguments, function (e, t) {
                            for (var n; -1 < (n = T.inArray(t, l, n)); ) l.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (a = c = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (a = c = []), t || o || (l = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), o) || r(), this;
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!s;
                },
            };
        return d;
    }),
        T.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var r = arguments;
                            return T.Deferred(function (i) {
                                T.each(o, function (e, t) {
                                    var n = y(r[t[4]]) && r[t[4]];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function c(r, o, s, a) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                y(t)
                                                    ? a
                                                        ? t.call(e, c(l, o, nt, a), c(l, o, it, a))
                                                        : (l++, t.call(e, c(l, o, nt, a), c(l, o, it, a), c(l, o, nt, o.notifyWith)))
                                                    : (s !== nt && ((n = void 0), (i = [e])), (a || o.resolveWith)(n, i));
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.error), l <= r + 1 && (s !== it && ((n = void 0), (i = [e])), o.rejectWith(n, i));
                                                  }
                                              };
                                    r ? t() : (T.Deferred.getErrorHook ? (t.error = T.Deferred.getErrorHook()) : T.Deferred.getStackHook && (t.error = T.Deferred.getStackHook()), w.setTimeout(t));
                                };
                            }
                            return T.Deferred(function (e) {
                                o[0][3].add(c(0, e, y(i) ? i : nt, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : nt)), o[2][3].add(c(0, e, y(n) ? n : it));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? T.extend(e, s) : s;
                        },
                    },
                    a = {};
                return (
                    T.each(o, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (s[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        r = i;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (a[t[0]] = function () {
                                return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (r[t] = this), (o[t] = 1 < arguments.length ? a.call(arguments) : e), --n || s.resolveWith(r, o);
                    };
                }
                var n = arguments.length,
                    i = n,
                    r = Array(i),
                    o = a.call(arguments),
                    s = T.Deferred();
                if (n <= 1 && (rt(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || y(o[i] && o[i].then))) return s.then();
                for (; i--; ) rt(o[i], t(i), s.reject);
                return s.promise();
            },
        });
    var ot = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        st =
            ((T.Deferred.exceptionHook = function (e, t) {
                w.console && w.console.warn && e && ot.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
            (T.readyException = function (e) {
                w.setTimeout(function () {
                    throw e;
                });
            }),
            T.Deferred());
    function at() {
        x.removeEventListener("DOMContentLoaded", at), w.removeEventListener("load", at), T.ready();
    }
    (T.fn.ready = function (e) {
        return (
            st.then(e).catch(function (e) {
                T.readyException(e);
            }),
            this
        );
    }),
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== e && 0 < --T.readyWait) || st.resolveWith(x, [T]);
            },
        }),
        (T.ready.then = st.then),
        "complete" === x.readyState || ("loading" !== x.readyState && !x.documentElement.doScroll) ? w.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", at), w.addEventListener("load", at));
    function u(e, t, n, i, r, o, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === Y(n)) for (a in ((r = !0), n)) u(e, t, a, n[a], !0, o, s);
        else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            (t = c
                ? s
                    ? (t.call(e, i), null)
                    : ((c = t),
                      function (e, t, n) {
                          return c.call(T(e), n);
                      })
                : t))
        )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    }
    var lt = /^-ms-/,
        ct = /-([a-z])/g;
    function ut(e, t) {
        return t.toUpperCase();
    }
    function j(e) {
        return e.replace(lt, "ms-").replace(ct, ut);
    }
    function dt(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function ft() {
        this.expando = T.expando + ft.uid++;
    }
    (ft.uid = 1),
        (ft.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), dt(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[j(t)] = n;
                else for (i in t) r[j(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][j(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(j) : (t = j(t)) in i ? [t] : t.match(L) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 !== t && !T.isEmptyObject(i)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !T.isEmptyObject(e);
            },
        });
    var v = new ft(),
        c = new ft(),
        ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pt = /[A-Z]/g;
    function gt(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(pt, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : ht.test(r) ? JSON.parse(r) : r));
                } catch (e) {}
                c.set(e, t, n);
            } else n = void 0;
        return n;
    }
    T.extend({
        hasData: function (e) {
            return c.hasData(e) || v.hasData(e);
        },
        data: function (e, t, n) {
            return c.access(e, t, n);
        },
        removeData: function (e, t) {
            c.remove(e, t);
        },
        _data: function (e, t, n) {
            return v.access(e, t, n);
        },
        _removeData: function (e, t) {
            v.remove(e, t);
        },
    }),
        T.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              c.set(this, n);
                          })
                        : u(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e) return void 0 !== (t = c.get(o, n)) || void 0 !== (t = gt(o, n)) ? t : void 0;
                                  this.each(function () {
                                      c.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((r = c.get(o)), 1 === o.nodeType) && !v.get(o, "hasDataAttrs")) {
                    for (t = s.length; t--; ) s[t] && 0 === (i = s[t].name).indexOf("data-") && ((i = j(i.slice(5))), gt(o, i, r[i]));
                    v.set(o, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    c.remove(this, e);
                });
            },
        }),
        T.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (i = v.get(e, (t = (t || "fx") + "queue"))), n && (!i || Array.isArray(n) ? (i = v.access(e, t, T.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = T._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                T.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    v.get(e, n) ||
                    v.access(e, n, {
                        empty: T.Callbacks("once memory").add(function () {
                            v.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        T.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? T.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = T.queue(this, t, n);
                              T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --r || o.resolveWith(s, [s]);
                }
                var i,
                    r = 1,
                    o = T.Deferred(),
                    s = this,
                    a = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (i = v.get(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                return n(), o.promise(t);
            },
        });
    function mt(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && bt(e) && "none" === T.css(e, "display"));
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        vt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        p = ["Top", "Right", "Bottom", "Left"],
        yt = x.documentElement,
        bt = function (e) {
            return T.contains(e.ownerDocument, e);
        },
        _t = { composed: !0 };
    yt.getRootNode &&
        (bt = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(_t) === e.ownerDocument;
        });
    function wt(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return T.css(e, t, "");
                  },
            l = a(),
            c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (T.cssNumber[t] || ("px" !== c && +l)) && vt.exec(T.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; s--; ) T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (u /= o);
            T.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i) && ((i.unit = c), (i.start = u), (i.end = r)), r;
    }
    var xt = {};
    function Tt(e, t) {
        for (var n, i, r, o, s, a = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n && ((a[l] = v.get(i, "display") || null), a[l] || (i.style.display = "")),
                      "" === i.style.display &&
                          mt(i) &&
                          (a[l] =
                              ((s = o = void 0),
                              (o = (r = i).ownerDocument),
                              (r = r.nodeName),
                              (s = xt[r]) || ((o = o.body.appendChild(o.createElement(r))), (s = T.css(o, "display")), o.parentNode.removeChild(o), (xt[r] = s = "none" === s ? "block" : s)),
                              s)))
                    : "none" !== n && ((a[l] = "none"), v.set(i, "display", n)));
        for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
        return e;
    }
    T.fn.extend({
        show: function () {
            return Tt(this, !0);
        },
        hide: function () {
            return Tt(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      mt(this) ? T(this).show() : T(this).hide();
                  });
        },
    });
    var Et = /^(?:checkbox|radio)$/i,
        Ct = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        At = /^$|^module$|\/(?:java|ecma)script/i,
        m =
            ((r = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (o = x.createElement("input")).setAttribute("type", "radio"),
            o.setAttribute("checked", "checked"),
            o.setAttribute("name", "t"),
            r.appendChild(o),
            (g.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (r.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue),
            (r.innerHTML = "<option></option>"),
            (g.option = !!r.lastChild),
            { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] });
    function N(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && _(e, t)) ? T.merge([e], n) : n;
    }
    function kt(e, t) {
        for (var n = 0, i = e.length; n < i; n++) v.set(e[n], "globalEval", !t || v.get(t[n], "globalEval"));
    }
    (m.tbody = m.tfoot = m.colgroup = m.caption = m.thead), (m.th = m.td), g.option || (m.optgroup = m.option = [1, "<select multiple='multiple'>", "</select>"]);
    var St = /<|&#?\w+;/;
    function Ot(e, t, n, i, r) {
        for (var o, s, a, l, c, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === Y(o)) T.merge(d, o.nodeType ? [o] : o);
                else if (St.test(o)) {
                    for (s = s || u.appendChild(t.createElement("div")), a = (Ct.exec(o) || ["", ""])[1].toLowerCase(), a = m[a] || m._default, s.innerHTML = a[1] + T.htmlPrefilter(o) + a[2], c = a[0]; c--; ) s = s.lastChild;
                    T.merge(d, s.childNodes), ((s = u.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
        for (u.textContent = "", f = 0; (o = d[f++]); )
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (((l = bt(o)), (s = N(u.appendChild(o), "script")), l && kt(s), n)) for (c = 0; (o = s[c++]); ) At.test(o.type || "") && n.push(o);
        return u;
    }
    var Dt = /^([^.]*)(?:\.(.+)|)/;
    function Lt() {
        return !0;
    }
    function jt() {
        return !1;
    }
    function Nt(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Nt(e, a, n, i, t[a], o);
            return e;
        }
        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = jt;
        else if (!r) return e;
        return (
            1 === o &&
                ((s = r),
                ((r = function (e) {
                    return T().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = T.guid++))),
            e.each(function () {
                T.event.add(this, t, r, i, n);
            })
        );
    }
    function Pt(e, i, t) {
        t
            ? (v.set(e, i, !1),
              T.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n = v.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (n) (T.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (((n = a.call(arguments)), v.set(this, i, n), this[i](), (t = v.get(this, i)), v.set(this, i, !1), n !== t)) return e.stopImmediatePropagation(), e.preventDefault(), t;
                      } else n && (v.set(this, i, T.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), (e.isImmediatePropagationStopped = Lt));
                  },
              }))
            : void 0 === v.get(e, i) && T.event.add(e, i, Lt);
    }
    (T.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p = v.get(t);
            if (dt(t))
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && T.find.matchesSelector(yt, r),
                        n.guid || (n.guid = T.guid++),
                        a = (a = p.events) || (p.events = Object.create(null)),
                        s =
                            (s = p.handle) ||
                            (p.handle = function (e) {
                                return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        l = (e = (e || "").match(L) || [""]).length;
                    l--;

                )
                    (d = h = (f = Dt.exec(e[l]) || [])[1]),
                        (f = (f[2] || "").split(".").sort()),
                        d &&
                            ((c = T.event.special[d] || {}),
                            (d = (r ? c.delegateType : c.bindType) || d),
                            (c = T.event.special[d] || {}),
                            (h = T.extend({ type: d, origType: h, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && T.expr.match.needsContext.test(r), namespace: f.join(".") }, o)),
                            (u = a[d]) || (((u = a[d] = []).delegateCount = 0), c.setup && !1 !== c.setup.call(t, i, f, s)) || (t.addEventListener && t.addEventListener(d, s)),
                            c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)),
                            r ? u.splice(u.delegateCount++, 0, h) : u.push(h),
                            (T.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = v.hasData(e) && v.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (((h = g = (a = Dt.exec(t[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), h)) {
                        for (d = T.event.special[h] || {}, f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                            (u = f[o]),
                                (!r && g !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                    (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) || T.removeEvent(e, h, m.handle), delete l[h]);
                    } else for (h in l) T.event.remove(e, h + t[c], n, i, !0);
                T.isEmptyObject(l) && v.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                s = new Array(arguments.length),
                a = T.event.fix(e),
                e = (v.get(this, "events") || Object.create(null))[a.type] || [],
                l = T.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((a.delegateTarget = this), !l.preDispatch || !1 !== l.preDispatch.call(this, a))) {
                for (o = T.event.handlers.call(this, a, e), t = 0; (i = o[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                            ((a.handleObj = r), (a.data = r.data), void 0 !== (r = ((T.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? -1 < T(r, this).index(c) : T.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
        },
        addProp: function (t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[T.expando] ? e : new T.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return Et.test(e.type) && e.click && _(e, "input") && Pt(e, "click", !0), !1;
                },
                trigger: function (e) {
                    e = this || e;
                    return Et.test(e.type) && e.click && _(e, "input") && Pt(e, "click"), !0;
                },
                _default: function (e) {
                    e = e.target;
                    return (Et.test(e.type) && e.click && _(e, "input") && v.get(e, "click")) || _(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Lt : jt),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: jt,
            isPropagationStopped: jt,
            isImmediatePropagationStopped: jt,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Lt), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Lt), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Lt), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        T.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (i, r) {
            function o(e) {
                var t, n;
                x.documentMode
                    ? ((t = v.get(this, "handle")), ((n = T.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur"), (n.isSimulated = !0), t(e), n.target === n.currentTarget && t(n))
                    : T.event.simulate(r, e.target, T.event.fix(e));
            }
            (T.event.special[i] = {
                setup: function () {
                    var e;
                    if ((Pt(this, i, !0), !x.documentMode)) return !1;
                    (e = v.get(this, r)) || this.addEventListener(r, o), v.set(this, r, (e || 0) + 1);
                },
                trigger: function () {
                    return Pt(this, i), !0;
                },
                teardown: function () {
                    var e;
                    if (!x.documentMode) return !1;
                    (e = v.get(this, r) - 1) ? v.set(this, r, e) : (this.removeEventListener(r, o), v.remove(this, r));
                },
                _default: function (e) {
                    return v.get(e.target, i);
                },
                delegateType: r,
            }),
                (T.event.special[r] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = x.documentMode ? this : e,
                            n = v.get(t, r);
                        n || (x.documentMode ? this.addEventListener(r, o) : e.addEventListener(i, o, !0)), v.set(t, r, (n || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = x.documentMode ? this : e,
                            n = v.get(t, r) - 1;
                        n ? v.set(t, r, n) : (x.documentMode ? this.removeEventListener(r, o) : e.removeEventListener(i, o, !0), v.remove(t, r));
                    },
                });
        }),
        T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, r) {
            T.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        i = e.handleObj;
                    return (n && (n === this || T.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = r)), t;
                },
            };
        }),
        T.fn.extend({
            on: function (e, t, n, i) {
                return Nt(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Nt(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) (i = e.handleObj), T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                else {
                    if ("object" != typeof e)
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = jt),
                            this.each(function () {
                                T.event.remove(this, e, n, t);
                            })
                        );
                    for (r in e) this.off(r, t, e[r]);
                }
                return this;
            },
        });
    var It = /<script|<style|<link/i,
        Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ht = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function qt(e, t) {
        return (_(e, "table") && _(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0]) || e;
    }
    function Ft(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Rt(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Wt(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
            if (v.hasData(e) && (o = v.get(e).events)) for (r in (v.remove(t, "handle events"), o)) for (n = 0, i = o[r].length; n < i; n++) T.event.add(t, r, o[r][n]);
            c.hasData(e) && ((e = c.access(e)), (e = T.extend({}, e)), c.set(t, e));
        }
    }
    function Bt(n, i, r, o) {
        i = F(i);
        var e,
            t,
            s,
            a,
            l,
            c,
            u = 0,
            d = n.length,
            f = d - 1,
            h = i[0],
            p = y(h);
        if (p || (1 < d && "string" == typeof h && !g.checkClone && Mt.test(h)))
            return n.each(function (e) {
                var t = n.eq(e);
                p && (i[0] = h.call(this, e, t.html())), Bt(t, i, r, o);
            });
        if (d && ((t = (e = Ot(i, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = T.map(N(e, "script"), Ft)).length; u < d; u++) (l = e), u !== f && ((l = T.clone(l, !0, !0)), a) && T.merge(s, N(l, "script")), r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, T.map(s, Rt), u = 0; u < a; u++)
                    (l = s[u]),
                        At.test(l.type || "") &&
                            !v.access(l, "globalEval") &&
                            T.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : U(l.textContent.replace(Ht, ""), l, c));
        }
        return n;
    }
    function $t(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(N(i)), i.parentNode && (n && bt(i) && kt(N(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    T.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = bt(e);
            if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e)))
                for (s = N(u), i = 0, r = (o = N(e)).length; i < r; i++)
                    (a = o[i]), (l = s[i]), (c = void 0), "input" === (c = l.nodeName.toLowerCase()) && Et.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
            if (t)
                if (n) for (o = o || N(e), s = s || N(u), i = 0, r = o.length; i < r; i++) Wt(o[i], s[i]);
                else Wt(e, u);
            return 0 < (s = N(u, "script")).length && kt(s, !d && N(e, "script")), u;
        },
        cleanData: function (e) {
            for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (dt(n)) {
                    if ((t = n[v.expando])) {
                        if (t.events) for (i in t.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[v.expando] = void 0;
                    }
                    n[c.expando] && (n[c.expando] = void 0);
                }
        },
    }),
        T.fn.extend({
            detach: function (e) {
                return $t(this, e, !0);
            },
            remove: function (e) {
                return $t(this, e);
            },
            text: function (e) {
                return u(
                    this,
                    function (e) {
                        return void 0 === e
                            ? T.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Bt(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qt(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Bt(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = qt(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return Bt(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Bt(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(N(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return T.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return u(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !It.test(e) && !m[(Ct.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(N(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Bt(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        T.inArray(this, n) < 0 && (T.cleanData(N(this)), t) && t.replaceChild(e, this);
                    },
                    n
                );
            },
        }),
        T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, s) {
            T.fn[e] = function (e) {
                for (var t, n = [], i = T(e), r = i.length - 1, o = 0; o <= r; o++) (t = o === r ? this : this.clone(!0)), T(i[o])[s](t), R.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    function zt(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : w).getComputedStyle(e);
    }
    function Vt(e, t, n) {
        var i,
            r = {};
        for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = r[i];
        return n;
    }
    var Xt,
        Ut,
        Yt,
        Qt,
        Kt,
        Gt,
        Jt,
        s,
        Zt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        en = /^--/,
        tn = new RegExp(p.join("|"), "i");
    function nn() {
        var e;
        s &&
            ((Jt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (s.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            yt.appendChild(Jt).appendChild(s),
            (e = w.getComputedStyle(s)),
            (Xt = "1%" !== e.top),
            (Gt = 12 === rn(e.marginLeft)),
            (s.style.right = "60%"),
            (Qt = 36 === rn(e.right)),
            (Ut = 36 === rn(e.width)),
            (s.style.position = "absolute"),
            (Yt = 12 === rn(s.offsetWidth / 3)),
            yt.removeChild(Jt),
            (s = null));
    }
    function rn(e) {
        return Math.round(parseFloat(e));
    }
    function on(e, t, n) {
        var i,
            r = en.test(t),
            o = e.style;
        return (
            (n = n || zt(e)) &&
                ((i = n.getPropertyValue(t) || n[t]), "" !== (i = r ? i && (i.replace(ee, "$1") || void 0) : i) || bt(e) || (i = T.style(e, t)), !g.pixelBoxStyles()) &&
                Zt.test(i) &&
                tn.test(t) &&
                ((r = o.width), (e = o.minWidth), (t = o.maxWidth), (o.minWidth = o.maxWidth = o.width = i), (i = n.width), (o.width = r), (o.minWidth = e), (o.maxWidth = t)),
            void 0 !== i ? i + "" : i
        );
    }
    function sn(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (Jt = x.createElement("div")),
        (s = x.createElement("div")).style &&
            ((s.style.backgroundClip = "content-box"),
            (s.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === s.style.backgroundClip),
            T.extend(g, {
                boxSizingReliable: function () {
                    return nn(), Ut;
                },
                pixelBoxStyles: function () {
                    return nn(), Qt;
                },
                pixelPosition: function () {
                    return nn(), Xt;
                },
                reliableMarginLeft: function () {
                    return nn(), Gt;
                },
                scrollboxSize: function () {
                    return nn(), Yt;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == Kt &&
                            ((e = x.createElement("table")),
                            (t = x.createElement("tr")),
                            (n = x.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            yt.appendChild(e).appendChild(t).appendChild(n),
                            (n = w.getComputedStyle(t)),
                            (Kt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight),
                            yt.removeChild(e)),
                        Kt
                    );
                },
            }));
    var an = ["Webkit", "Moz", "ms"],
        ln = x.createElement("div").style,
        cn = {};
    function un(e) {
        var t = T.cssProps[e] || cn[e];
        return (
            t ||
            (e in ln
                ? e
                : (cn[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = an.length; n--; ) if ((e = an[n] + t) in ln) return e;
                      })(e) || e))
        );
    }
    var dn = /^(none|table(?!-c[ea]).+)/,
        fn = { position: "absolute", visibility: "hidden", display: "block" },
        hn = { letterSpacing: "0", fontWeight: "400" };
    function pn(e, t, n) {
        var i = vt.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function gn(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0,
            c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (c += T.css(e, n + p[s], !0, r)),
                i
                    ? ("content" === n && (l -= T.css(e, "padding" + p[s], !0, r)), "margin" !== n && (l -= T.css(e, "border" + p[s] + "Width", !0, r)))
                    : ((l += T.css(e, "padding" + p[s], !0, r)), "padding" !== n ? (l += T.css(e, "border" + p[s] + "Width", !0, r)) : (a += T.css(e, "border" + p[s] + "Width", !0, r)));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l + c;
    }
    function mn(e, t, n) {
        var i = zt(e),
            r = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = on(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Zt.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!g.boxSizingReliable() && r) || (!g.reliableTrDimensions() && _(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === T.css(e, "boxSizing", !1, i)), (o = a in e)) &&
                (s = e[a]),
            (s = parseFloat(s) || 0) + gn(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
        );
    }
    function P(e, t, n, i, r) {
        return new P.prototype.init(e, t, n, i, r);
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = on(e, "opacity")) ? "1" : t;
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    s,
                    a = j(t),
                    l = en.test(t),
                    c = e.style;
                if ((l || (t = un(a)), (s = T.cssHooks[t] || T.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" === (o = typeof n) && (r = vt.exec(n)) && r[1] && ((n = wt(e, t, r)), (o = "number")),
                    null == n ||
                        n != n ||
                        ("number" !== o || l || (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                        (l ? c.setProperty(t, n) : (c[t] = n));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o = j(t);
            return (
                en.test(t) || (t = un(o)),
                "normal" === (r = void 0 === (r = (o = T.cssHooks[t] || T.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : r) ? on(e, t, i) : r) && t in hn && (r = hn[t]),
                ("" === n || n) && ((o = parseFloat(r)), !0 === n || isFinite(o)) ? o || 0 : r
            );
        },
    }),
        T.each(["height", "width"], function (e, s) {
            T.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t)
                        return !dn.test(T.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? mn(e, s, n)
                            : Vt(e, fn, function () {
                                  return mn(e, s, n);
                              });
                },
                set: function (e, t, n) {
                    var i = zt(e),
                        r = !g.scrollboxSize() && "absolute" === i.position,
                        o = (r || n) && "border-box" === T.css(e, "boxSizing", !1, i),
                        n = n ? gn(e, s, n, o, i) : 0;
                    return (
                        o && r && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - gn(e, s, "border", !1, i) - 0.5)),
                        n && (o = vt.exec(t)) && "px" !== (o[3] || "px") && ((e.style[s] = t), (t = T.css(e, s))),
                        pn(0, t, n)
                    );
                },
            };
        }),
        (T.cssHooks.marginLeft = sn(g.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(on(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Vt(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (T.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + p[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                "margin" !== r && (T.cssHooks[r + o].set = pn);
        }),
        T.fn.extend({
            css: function (e, t) {
                return u(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = zt(e), r = t.length; s < r; s++) o[t[s]] = T.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((T.Tween = P).prototype = {
            constructor: P,
            init: function (e, t, n, i, r, o) {
                (this.elem = e), (this.prop = n), (this.easing = r || T.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (T.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = P.propHooks[this.prop];
                return (e && e.get ? e : P.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = P.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : P.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = P.prototype),
        ((P.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = T.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[un(e.prop)]) ? (e.elem[e.prop] = e.now) : T.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = P.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (T.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (T.fx = P.prototype.init),
        (T.fx.step = {});
    var vn,
        yn,
        bn = /^(?:toggle|show|hide)$/,
        _n = /queueHooks$/;
    function wn() {
        yn && (!1 === x.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(wn) : w.setTimeout(wn, T.fx.interval), T.fx.tick());
    }
    function xn() {
        return (
            w.setTimeout(function () {
                vn = void 0;
            }),
            (vn = Date.now())
        );
    }
    function Tn(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = p[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function En(e, t, n) {
        for (var i, r = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, t, e))) return i;
    }
    function I(r, e, t) {
        var n,
            o,
            i,
            s,
            a,
            l,
            c,
            u = 0,
            d = I.prefilters.length,
            f = T.Deferred().always(function () {
                delete h.elem;
            }),
            h = function () {
                if (!o) {
                    for (var e = vn || xn(), e = Math.max(0, p.startTime + p.duration - e), t = 1 - (e / p.duration || 0), n = 0, i = p.tweens.length; n < i; n++) p.tweens[n].run(t);
                    if ((f.notifyWith(r, [p, t, e]), t < 1 && i)) return e;
                    i || f.notifyWith(r, [p, 1, 0]), f.resolveWith(r, [p]);
                }
                return !1;
            },
            p = f.promise({
                elem: r,
                props: T.extend({}, e),
                opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: vn || xn(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = T.Tween(r, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing);
                    return p.tweens.push(t), t;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? p.tweens.length : 0;
                    if (!o) {
                        for (o = !0; t < n; t++) p.tweens[t].run(1);
                        e ? (f.notifyWith(r, [p, 1, 0]), f.resolveWith(r, [p, e])) : f.rejectWith(r, [p, e]);
                    }
                    return this;
                },
            }),
            g = p.props,
            m = g,
            v = p.opts.specialEasing;
        for (i in m)
            if (((a = v[(s = j(i))]), (l = m[i]), Array.isArray(l) && ((a = l[1]), (l = m[i] = l[0])), i !== s && ((m[s] = l), delete m[i]), (c = T.cssHooks[s]) && "expand" in c))
                for (i in ((l = c.expand(l)), delete m[s], l)) i in m || ((m[i] = l[i]), (v[i] = a));
            else v[s] = a;
        for (; u < d; u++) if ((n = I.prefilters[u].call(p, r, g, p.opts))) return y(n.stop) && (T._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)), n;
        return (
            T.map(g, En, p),
            y(p.opts.start) && p.opts.start.call(r, p),
            p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
            T.fx.timer(T.extend(h, { elem: r, anim: p, queue: p.opts.queue })),
            p
        );
    }
    (T.Animation = T.extend(I, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return wt(n.elem, e, vt.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (var n, i = 0, r = (e = y(e) ? ((t = e), ["*"]) : e.match(L)).length; i < r; i++) (n = e[i]), (I.tweeners[n] = I.tweeners[n] || []), I.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = "width" in t || "height" in t,
                    d = this,
                    f = {},
                    h = e.style,
                    p = e.nodeType && mt(e),
                    g = v.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (s = T._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[i]), bn.test(r))) {
                        if ((delete t[i], (o = o || "toggle" === r), r === (p ? "hide" : "show"))) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            p = !0;
                        }
                        f[i] = (g && g[i]) || T.style(e, i);
                    }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                    for (i in (u &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (c = g && g.display) && (c = v.get(e, "display")),
                        "none" === (u = T.css(e, "display")) && (c ? (u = c) : (Tt([e], !0), (c = e.style.display || c), (u = T.css(e, "display")), Tt([e]))),
                        "inline" === u || ("inline-block" === u && null != c)) &&
                        "none" === T.css(e, "float") &&
                        (l ||
                            (d.done(function () {
                                h.display = c;
                            }),
                            null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                        (h.display = "inline-block")),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        d.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (g ? "hidden" in g && (p = g.hidden) : (g = v.access(e, "fxshow", { display: c })),
                            o && (g.hidden = !p),
                            p && Tt([e], !0),
                            d.done(function () {
                                for (i in (p || Tt([e]), v.remove(e, "fxshow"), f)) T.style(e, i, f[i]);
                            })),
                            (l = En(p ? g[i] : 0, i, d)),
                            i in g || ((g[i] = l.start), p && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e);
        },
    })),
        (T.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? T.extend({}, e) : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
            return (
                T.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in T.fx.speeds ? (i.duration = T.fx.speeds[i.duration]) : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
                }),
                i
            );
        }),
        T.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(mt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                function r() {
                    var e = I(this, T.extend({}, t), s);
                    (o || v.get(this, "finish")) && e.stop(!0);
                }
                var o = T.isEmptyObject(t),
                    s = T.speed(e, n, i);
                return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
            },
            stop: function (r, e, o) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = T.timers,
                            i = v.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else for (t in i) i[t] && i[t].stop && _n.test(t) && s(i[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != r && n[t].queue !== r) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || T.dequeue(this, r);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = v.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = T.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        T.each(["toggle", "show", "hide"], function (e, i) {
            var r = T.fn[i];
            T.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Tn(i, !0), e, t, n);
            };
        }),
        T.each({ slideDown: Tn("show"), slideUp: Tn("hide"), slideToggle: Tn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
            T.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n);
            };
        }),
        (T.timers = []),
        (T.fx.tick = function () {
            var e,
                t = 0,
                n = T.timers;
            for (vn = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), (vn = void 0);
        }),
        (T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
            yn || ((yn = !0), wn());
        }),
        (T.fx.stop = function () {
            yn = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (i, e) {
            return (
                (i = (T.fx && T.fx.speeds[i]) || i),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = w.setTimeout(e, i);
                    t.stop = function () {
                        w.clearTimeout(n);
                    };
                })
            );
        }),
        (o = x.createElement("input")),
        (r = x.createElement("select").appendChild(x.createElement("option"))),
        (o.type = "checkbox"),
        (g.checkOn = "" !== o.value),
        (g.optSelected = r.selected),
        ((o = x.createElement("input")).value = "t"),
        (o.type = "radio"),
        (g.radioValue = "t" === o.value);
    var Cn,
        An = T.expr.attrHandle,
        kn =
            (T.fn.extend({
                attr: function (e, t) {
                    return u(this, T.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        T.removeAttr(this, e);
                    });
                },
            }),
            T.extend({
                attr: function (e, t, n) {
                    var i,
                        r,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute
                            ? T.prop(e, t, n)
                            : ((1 === o && T.isXMLDoc(e)) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Cn : void 0)),
                              void 0 !== n
                                  ? null === n
                                      ? void T.removeAttr(e, t)
                                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                      ? i
                                      : (e.setAttribute(t, n + ""), n)
                                  : !(r && "get" in r && null !== (i = r.get(e, t))) && null == (i = T.find.attr(e, t))
                                  ? void 0
                                  : i);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            var n;
                            if (!g.radioValue && "radio" === t && _(e, "input")) return (n = e.value), e.setAttribute("type", t), n && (e.value = n), t;
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        i = 0,
                        r = t && t.match(L);
                    if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                },
            }),
            (Cn = {
                set: function (e, t, n) {
                    return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var s = An[t] || T.find.attr;
                An[t] = function (e, t, n) {
                    var i,
                        r,
                        o = t.toLowerCase();
                    return n || ((r = An[o]), (An[o] = i), (i = null != s(e, t, n) ? o : null), (An[o] = r)), i;
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        Sn = /^(?:a|area)$/i;
    function On(e) {
        return (e.match(L) || []).join(" ");
    }
    function Dn(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Ln(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(L)) || [];
    }
    T.fn.extend({
        prop: function (e, t) {
            return u(this, T.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[T.propFix[e] || e];
            });
        },
    }),
        T.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : kn.test(e.nodeName) || (Sn.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
            (T.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
                },
            }),
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this;
        }),
        T.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s;
                return y(t)
                    ? this.each(function (e) {
                          T(this).addClass(t.call(this, e, Dn(this)));
                      })
                    : (e = Ln(t)).length
                    ? this.each(function () {
                          if (((i = Dn(this)), (n = 1 === this.nodeType && " " + On(i) + " "))) {
                              for (o = 0; o < e.length; o++) (r = e[o]), n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                              (s = On(n)), i !== s && this.setAttribute("class", s);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, i, r, o, s;
                return y(t)
                    ? this.each(function (e) {
                          T(this).removeClass(t.call(this, e, Dn(this)));
                      })
                    : arguments.length
                    ? (e = Ln(t)).length
                        ? this.each(function () {
                              if (((i = Dn(this)), (n = 1 === this.nodeType && " " + On(i) + " "))) {
                                  for (o = 0; o < e.length; o++) for (r = e[o]; -1 < n.indexOf(" " + r + " "); ) n = n.replace(" " + r + " ", " ");
                                  (s = On(n)), i !== s && this.setAttribute("class", s);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, n) {
                var e,
                    i,
                    r,
                    o,
                    s = typeof t,
                    a = "string" == s || Array.isArray(t);
                return y(t)
                    ? this.each(function (e) {
                          T(this).toggleClass(t.call(this, e, Dn(this), n), n);
                      })
                    : "boolean" == typeof n && a
                    ? n
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((e = Ln(t)),
                      this.each(function () {
                          if (a) for (o = T(this), r = 0; r < e.length; r++) (i = e[r]), o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                          else (void 0 !== t && "boolean" != s) || ((i = Dn(this)) && v.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", (!i && !1 !== t && v.get(this, "__className__")) || ""));
                      }));
            },
            hasClass: function (e) {
                for (var t, n = 0, i = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + On(Dn(t)) + " ").indexOf(i)) return !0;
                return !1;
            },
        });
    function jn(e) {
        e.stopPropagation();
    }
    var Nn = /\r/g,
        Pn =
            (T.fn.extend({
                val: function (t) {
                    var n,
                        e,
                        i,
                        r = this[0];
                    return arguments.length
                        ? ((i = y(t)),
                          this.each(function (e) {
                              1 !== this.nodeType ||
                                  (null == (e = i ? t.call(this, e, T(this).val()) : t)
                                      ? (e = "")
                                      : "number" == typeof e
                                      ? (e += "")
                                      : Array.isArray(e) &&
                                        (e = T.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) ||
                                  (this.value = e);
                          }))
                        : r
                        ? (n = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value"))
                            ? e
                            : "string" == typeof (e = r.value)
                            ? e.replace(Nn, "")
                            : null == e
                            ? ""
                            : e
                        : void 0;
                },
            }),
            T.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = T.find.attr(e, "value");
                            return null != t ? t : On(T.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                                if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !_(t.parentNode, "optgroup"))) {
                                    if (((t = T(t).val()), r)) return t;
                                    o.push(t);
                                }
                            return o;
                        },
                        set: function (e, t) {
                            for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        },
                    },
                },
            }),
            T.each(["radio", "checkbox"], function () {
                (T.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return (e.checked = -1 < T.inArray(T(e).val(), t));
                    },
                }),
                    g.checkOn ||
                        (T.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
            }),
            w.location),
        In = { guid: Date.now() },
        Mn = /\?/,
        Hn =
            ((T.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new w.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {}
                return (
                    (n = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !n) ||
                        T.error(
                            "Invalid XML: " +
                                (n
                                    ? T.map(n.childNodes, function (e) {
                                          return e.textContent;
                                      }).join("\n")
                                    : e)
                        ),
                    t
                );
            }),
            /^(?:focusinfocus|focusoutblur)$/),
        qn =
            (T.extend(T.event, {
                trigger: function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d = [n || x],
                        f = $.call(e, "type") ? e.type : e,
                        h = $.call(e, "namespace") ? e.namespace.split(".") : [],
                        p = (u = o = n = n || x);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !Hn.test(f + T.event.triggered) &&
                        (-1 < f.indexOf(".") && ((f = (h = f.split(".")).shift()), h.sort()),
                        (a = f.indexOf(":") < 0 && "on" + f),
                        ((e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                        (e.namespace = h.join(".")),
                        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (t = null == t ? [e] : T.makeArray(t, [e])),
                        (c = T.event.special[f] || {}),
                        i || !c.trigger || !1 !== c.trigger.apply(n, t))
                    ) {
                        if (!i && !c.noBubble && !H(n)) {
                            for (s = c.delegateType || f, Hn.test(s + f) || (p = p.parentNode); p; p = p.parentNode) d.push(p), (o = p);
                            o === (n.ownerDocument || x) && d.push(o.defaultView || o.parentWindow || w);
                        }
                        for (r = 0; (p = d[r++]) && !e.isPropagationStopped(); )
                            (u = p),
                                (e.type = 1 < r ? s : c.bindType || f),
                                (l = (v.get(p, "events") || Object.create(null))[e.type] && v.get(p, "handle")) && l.apply(p, t),
                                (l = a && p[a]) && l.apply && dt(p) && ((e.result = l.apply(p, t)), !1 === e.result) && e.preventDefault();
                        return (
                            (e.type = f),
                            i ||
                                e.isDefaultPrevented() ||
                                (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                                !dt(n) ||
                                (a &&
                                    y(n[f]) &&
                                    !H(n) &&
                                    ((o = n[a]) && (n[a] = null),
                                    (T.event.triggered = f),
                                    e.isPropagationStopped() && u.addEventListener(f, jn),
                                    n[f](),
                                    e.isPropagationStopped() && u.removeEventListener(f, jn),
                                    (T.event.triggered = void 0),
                                    o) &&
                                    (n[a] = o)),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    n = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
                    T.event.trigger(n, null, t);
                },
            }),
            T.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        T.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return T.event.trigger(e, t, n, !0);
                },
            }),
            /\[\]$/),
        Fn = /\r?\n/g,
        Rn = /^(?:submit|button|image|reset|file)$/i,
        Wn = /^(?:input|select|textarea|keygen)/i;
    (T.param = function (e, t) {
        function n(e, t) {
            (t = y(t) ? t() : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var i,
            r = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
            T.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (i in e)
                !(function n(i, e, r, o) {
                    if (Array.isArray(e))
                        T.each(e, function (e, t) {
                            r || qn.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o);
                        });
                    else if (r || "object" !== Y(e)) o(i, e);
                    else for (var t in e) n(i + "[" + t + "]", e[t], r, o);
                })(i, e[i], t, n);
        return r.join("&");
    }),
        T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !T(this).is(":disabled") && Wn.test(this.nodeName) && !Rn.test(e) && (this.checked || !Et.test(e));
                    })
                    .map(function (e, t) {
                        var n = T(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? T.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Fn, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Fn, "\r\n") };
                    })
                    .get();
            },
        });
    var Bn = /%20/g,
        $n = /#.*$/,
        zn = /([?&])_=[^&]*/,
        Vn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xn = /^(?:GET|HEAD)$/,
        Un = /^\/\//,
        Yn = {},
        Qn = {},
        Kn = "*/".concat("*"),
        Gn = x.createElement("a");
    function Jn(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(L) || [];
            if (y(t)) for (; (n = r[i++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Zn(t, i, r, o) {
        var s = {},
            a = t === Qn;
        function l(e) {
            var n;
            return (
                (s[e] = !0),
                T.each(t[e] || [], function (e, t) {
                    t = t(i, r, o);
                    return "string" != typeof t || a || s[t] ? (a ? !(n = t) : void 0) : (i.dataTypes.unshift(t), l(t), !1);
                }),
                n
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function ei(e, t) {
        var n,
            i,
            r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
    }
    (Gn.href = Pn.href),
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pn.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pn.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Kn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? ei(ei(e, T.ajaxSettings), t) : ei(T.ajaxSettings, e);
            },
            ajaxPrefilter: Jn(Yn),
            ajaxTransport: Jn(Qn),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    c,
                    u,
                    n,
                    d,
                    f,
                    h,
                    i,
                    p = T.ajaxSetup({}, (t = t || {})),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                    v = T.Deferred(),
                    y = T.Callbacks("once memory"),
                    b = p.statusCode || {},
                    r = {},
                    o = {},
                    s = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (f) {
                                if (!n) for (n = {}; (t = Vn.exec(u)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return f ? u : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == f && ((e = o[e.toLowerCase()] = o[e.toLowerCase()] || e), (r[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == f && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (f) _.always(e[_.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || s;
                            return l && l.abort(e), a(0, e), this;
                        },
                    };
                if (
                    (v.promise(_),
                    (p.url = ((e || p.url || Pn.href) + "").replace(Un, Pn.protocol + "//")),
                    (p.type = t.method || t.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [""]),
                    null == p.crossDomain)
                ) {
                    e = x.createElement("a");
                    try {
                        (e.href = p.url), (e.href = e.href), (p.crossDomain = Gn.protocol + "//" + Gn.host != e.protocol + "//" + e.host);
                    } catch (e) {
                        p.crossDomain = !0;
                    }
                }
                if ((p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), Zn(Yn, p, t, _), !f)) {
                    for (i in ((h = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Xn.test(p.type)),
                    (c = p.url.replace($n, "")),
                    p.hasContent
                        ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Bn, "+"))
                        : ((e = p.url.slice(c.length)),
                          p.data && (p.processData || "string" == typeof p.data) && ((c += (Mn.test(c) ? "&" : "?") + p.data), delete p.data),
                          !1 === p.cache && ((c = c.replace(zn, "$1")), (e = (Mn.test(c) ? "&" : "?") + "_=" + In.guid++ + e)),
                          (p.url = c + e)),
                    p.ifModified && (T.lastModified[c] && _.setRequestHeader("If-Modified-Since", T.lastModified[c]), T.etag[c]) && _.setRequestHeader("If-None-Match", T.etag[c]),
                    ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && _.setRequestHeader("Content-Type", p.contentType),
                    _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kn + "; q=0.01" : "") : p.accepts["*"]),
                    p.headers))
                        _.setRequestHeader(i, p.headers[i]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || f)) return _.abort();
                    if (((s = "abort"), y.add(p.complete), _.done(p.success), _.fail(p.error), (l = Zn(Qn, p, t, _)))) {
                        if (((_.readyState = 1), h && m.trigger("ajaxSend", [_, p]), f)) return _;
                        p.async &&
                            0 < p.timeout &&
                            (d = w.setTimeout(function () {
                                _.abort("timeout");
                            }, p.timeout));
                        try {
                            (f = !1), l.send(r, a);
                        } catch (e) {
                            if (f) throw e;
                            a(-1, e);
                        }
                    } else a(-1, "No Transport");
                }
                return _;
                function a(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = t;
                    f ||
                        ((f = !0),
                        d && w.clearTimeout(d),
                        (l = void 0),
                        (u = i || ""),
                        (_.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                            o = r;
                                            break;
                                        }
                                        s = s || r;
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(p, _, n)),
                        !i && -1 < T.inArray("script", p.dataTypes) && T.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () {}),
                        (s = (function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(s = c[l + " " + o] || c["* " + o]))
                                            for (r in c)
                                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? (s = c[r]) : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(p, s, _, i)),
                        i
                            ? (p.ifModified && ((n = _.getResponseHeader("Last-Modified")) && (T.lastModified[c] = n), (n = _.getResponseHeader("etag"))) && (T.etag[c] = n),
                              204 === e || "HEAD" === p.type ? (a = "nocontent") : 304 === e ? (a = "notmodified") : ((a = s.state), (r = s.data), (i = !(o = s.error))))
                            : ((o = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                        (_.status = e),
                        (_.statusText = (t || a) + ""),
                        i ? v.resolveWith(g, [r, a, _]) : v.rejectWith(g, [_, a, o]),
                        _.statusCode(b),
                        (b = void 0),
                        h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [_, p, i ? r : o]),
                        y.fireWith(g, [_, a]),
                        h && (m.trigger("ajaxComplete", [_, p]), --T.active || T.event.trigger("ajaxStop")));
                }
            },
            getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
            },
        }),
        T.each(["get", "post"], function (e, r) {
            T[r] = function (e, t, n, i) {
                return y(t) && ((i = i || n), (n = t), (t = void 0)), T.ajax(T.extend({ url: e, type: r, dataType: i, data: t, success: n }, T.isPlainObject(e) && e));
            };
        }),
        T.ajaxPrefilter(function (e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    T.globalEval(e, t, n);
                },
            });
        }),
        T.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (y(e) && (e = e.call(this[0])),
                        (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return y(n)
                    ? this.each(function (e) {
                          T(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = T(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = y(t);
                return this.each(function (e) {
                    T(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            T(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (T.ajaxSettings.xhr = function () {
            try {
                return new w.XMLHttpRequest();
            } catch (e) {}
        });
    var ti = { 0: 200, 1223: 204 },
        ni = T.ajaxSettings.xhr(),
        ii =
            ((g.cors = !!ni && "withCredentials" in ni),
            (g.ajax = ni = !!ni),
            T.ajaxTransport(function (r) {
                var o, s;
                if (g.cors || (ni && !r.crossDomain))
                    return {
                        send: function (e, t) {
                            var n,
                                i = r.xhr();
                            if ((i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                            for (n in (r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) i.setRequestHeader(n, e[n]);
                            (o = function (e) {
                                return function () {
                                    o &&
                                        ((o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                                        "abort" === e
                                            ? i.abort()
                                            : "error" === e
                                            ? "number" != typeof i.status
                                                ? t(0, "error")
                                                : t(i.status, i.statusText)
                                            : t(
                                                  ti[i.status] || i.status,
                                                  i.statusText,
                                                  "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText },
                                                  i.getAllResponseHeaders()
                                              ));
                                };
                            }),
                                (i.onload = o()),
                                (s = i.onerror = i.ontimeout = o("error")),
                                void 0 !== i.onabort
                                    ? (i.onabort = s)
                                    : (i.onreadystatechange = function () {
                                          4 === i.readyState &&
                                              w.setTimeout(function () {
                                                  o && s();
                                              });
                                      }),
                                (o = o("abort"));
                            try {
                                i.send((r.hasContent && r.data) || null);
                            } catch (e) {
                                if (o) throw e;
                            }
                        },
                        abort: function () {
                            o && o();
                        },
                    };
            }),
            T.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return T.globalEval(e), e;
                    },
                },
            }),
            T.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (n) {
                var i, r;
                if (n.crossDomain || n.scriptAttrs)
                    return {
                        send: function (e, t) {
                            (i = T("<script>")
                                .attr(n.scriptAttrs || {})
                                .prop({ charset: n.scriptCharset, src: n.url })
                                .on(
                                    "load error",
                                    (r = function (e) {
                                        i.remove(), (r = null), e && t("error" === e.type ? 404 : 200, e.type);
                                    })
                                )),
                                x.head.appendChild(i[0]);
                        },
                        abort: function () {
                            r && r();
                        },
                    };
            }),
            []),
        ri = /(=)\?(?=&|$)|\?\?/,
        oi =
            (T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = ii.pop() || T.expando + "_" + In.guid++;
                    return (this[e] = !0), e;
                },
            }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i,
                    r,
                    o,
                    s = !1 !== e.jsonp && (ri.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ri.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return (
                        (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        s ? (e[s] = e[s].replace(ri, "$1" + i)) : !1 !== e.jsonp && (e.url += (Mn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        (e.converters["script json"] = function () {
                            return o || T.error(i + " was not called"), o[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (r = w[i]),
                        (w[i] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === r ? T(w).removeProp(i) : (w[i] = r), e[i] && ((e.jsonpCallback = t.jsonpCallback), ii.push(i)), o && y(r) && r(o[0]), (o = r = void 0);
                        }),
                        "script"
                    );
            }),
            (g.createHTMLDocument = (((e = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
                var i;
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t || (g.createHTMLDocument ? (((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href), t.head.appendChild(i)) : (t = x)),
                      (i = !n && []),
                      (n = Qe.exec(e)) ? [t.createElement(n[1])] : ((n = Ot([e], t, i)), i && i.length && T(i).remove(), T.merge([], n.childNodes)));
            }),
            (T.fn.load = function (e, t, n) {
                var i,
                    r,
                    o,
                    s = this,
                    a = e.indexOf(" ");
                return (
                    -1 < a && ((i = On(e.slice(a))), (e = e.slice(0, a))),
                    y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                    0 < s.length &&
                        T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                            .done(function (e) {
                                (o = arguments), s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        s.each(function () {
                                            n.apply(this, o || [e.responseText, t, e]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            (T.expr.pseudos.animated = function (t) {
                return T.grep(T.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (T.offset = {
                setOffset: function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = T.css(e, "position"),
                        l = T(e),
                        c = {};
                    "static" === a && (e.style.position = "relative"),
                        (o = l.offset()),
                        (i = T.css(e, "top")),
                        (s = T.css(e, "left")),
                        (a = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? ((r = (a = l.position()).top), a.left) : ((r = parseFloat(i) || 0), parseFloat(s) || 0)),
                        null != (t = y(t) ? t.call(e, n, T.extend({}, o)) : t).top && (c.top = t.top - o.top + r),
                        null != t.left && (c.left = t.left - o.left + a),
                        "using" in t ? t.using.call(e, c) : l.css(c);
                },
            }),
            T.fn.extend({
                offset: function (t) {
                    var e, n;
                    return arguments.length
                        ? void 0 === t
                            ? this
                            : this.each(function (e) {
                                  T.offset.setOffset(this, t, e);
                              })
                        : (n = this[0])
                        ? n.getClientRects().length
                            ? ((e = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                            : { top: 0, left: 0 }
                        : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            i = this[0],
                            r = { top: 0, left: 0 };
                        if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); ) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)), (r.left += T.css(e, "borderLeftWidth", !0)));
                        }
                        return { top: t.top - r.top - T.css(i, "marginTop", !0), left: t.left - r.left - T.css(i, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
                        return e || yt;
                    });
                },
            }),
            T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, r) {
                var o = "pageYOffset" === r;
                T.fn[t] = function (e) {
                    return u(
                        this,
                        function (e, t, n) {
                            var i;
                            if ((H(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === n)) return i ? i[r] : e[t];
                            i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }),
            T.each(["top", "left"], function (e, n) {
                T.cssHooks[n] = sn(g.pixelPosition, function (e, t) {
                    if (t) return (t = on(e, n)), Zt.test(t) ? T(e).position()[n] + "px" : t;
                });
            }),
            T.each({ Height: "height", Width: "width" }, function (s, a) {
                T.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (i, o) {
                    T.fn[o] = function (e, t) {
                        var n = arguments.length && (i || "boolean" != typeof e),
                            r = i || (!0 === e || !0 === t ? "margin" : "border");
                        return u(
                            this,
                            function (e, t, n) {
                                var i;
                                return H(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + s]
                                        : e.document.documentElement["client" + s]
                                    : 9 === e.nodeType
                                    ? ((i = e.documentElement), Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s]))
                                    : void 0 === n
                                    ? T.css(e, t, r)
                                    : T.style(e, t, n, r);
                            },
                            a,
                            n ? e : void 0,
                            n
                        );
                    };
                });
            }),
            T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                T.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            T.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                T.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            }),
            /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
        si =
            ((T.proxy = function (e, t) {
                var n, i;
                if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), y(e)))
                    return (
                        (n = a.call(arguments, 2)),
                        ((i = function () {
                            return e.apply(t || this, n.concat(a.call(arguments)));
                        }).guid = e.guid = e.guid || T.guid++),
                        i
                    );
            }),
            (T.holdReady = function (e) {
                e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = _),
            (T.isFunction = y),
            (T.isWindow = H),
            (T.camelCase = j),
            (T.type = Y),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
                var t = T.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (T.trim = function (e) {
                return null == e ? "" : (e + "").replace(oi, "$1");
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return T;
                }),
            w.jQuery),
        ai = w.$;
    return (
        (T.noConflict = function (e) {
            return w.$ === T && (w.$ = ai), e && w.jQuery === T && (w.jQuery = si), T;
        }),
        void 0 === M && (w.jQuery = w.$ = T),
        T
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t());
    })(this, function () {
        "use strict";
        const i = new Map(),
            M = {
                set(e, t, n) {
                    i.has(e) || i.set(e, new Map());
                    e = i.get(e);
                    e.has(t) || 0 === e.size ? e.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(e.keys())[0]}.`);
                },
                get(e, t) {
                    return (i.has(e) && i.get(e).get(t)) || null;
                },
                remove(e, t) {
                    var n;
                    i.has(e) && ((n = i.get(e)).delete(t), 0 === n.size) && i.delete(e);
                },
            },
            H = 1e3,
            q = "transitionend",
            F = (e) => (e = e && window.CSS && window.CSS.escape ? e.replace(/#([^\s"#']+)/g, (e, t) => "#" + CSS.escape(t)) : e),
            R = (e) => {
                e.dispatchEvent(new Event(q));
            },
            o = (e) => !(!e || "object" != typeof e) && void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
            r = (e) => (o(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && 0 < e.length ? document.querySelector(F(e)) : null),
            s = (e) => {
                if (!o(e) || 0 === e.getClientRects().length) return !1;
                var t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    n = e.closest("details:not([open])");
                if (n && n !== e) {
                    e = e.closest("summary");
                    if (e && e.parentNode !== n) return !1;
                    if (null === e) return !1;
                }
                return t;
            },
            a = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
            W = (e) => {
                var t;
                return document.documentElement.attachShadow ? ("function" == typeof e.getRootNode ? ((t = e.getRootNode()) instanceof ShadowRoot ? t : null) : e instanceof ShadowRoot ? e : e.parentNode ? W(e.parentNode) : null) : null;
            },
            B = () => {},
            $ = (e) => {
                e.offsetHeight;
            },
            z = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
            V = [],
            l = () => "rtl" === document.documentElement.dir;
        var e = (i) => {
            var e;
            (e = () => {
                const e = z();
                if (e) {
                    const t = i.NAME,
                        n = e.fn[t];
                    (e.fn[t] = i.jQueryInterface), (e.fn[t].Constructor = i), (e.fn[t].noConflict = () => ((e.fn[t] = n), i.jQueryInterface));
                }
            }),
                "loading" === document.readyState
                    ? (V.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (const e of V) e();
                          }),
                      V.push(e))
                    : e();
        };
        const c = (e, t = [], n = e) => ("function" == typeof e ? e(...t) : n),
            X = (n, i, e = !0) => {
                if (e) {
                    e =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
                            var e = Number.parseFloat(t),
                                i = Number.parseFloat(n);
                            return e || i ? ((t = t.split(",")[0]), (n = n.split(",")[0]), (Number.parseFloat(t) + Number.parseFloat(n)) * H) : 0;
                        })(i) + 5;
                    let t = !1;
                    const r = ({ target: e }) => {
                        e === i && ((t = !0), i.removeEventListener(q, r), c(n));
                    };
                    i.addEventListener(q, r),
                        setTimeout(() => {
                            t || R(i);
                        }, e);
                } else c(n);
            },
            U = (e, t, n, i) => {
                var r = e.length;
                let o = e.indexOf(t);
                return -1 === o ? (!n && i ? e[r - 1] : e[0]) : ((o += n ? 1 : -1), i && (o = (o + r) % r), e[Math.max(0, Math.min(o, r - 1))]);
            },
            Y = /[^.]*(?=\..*)\.|.*/,
            Q = /\..*/,
            K = /::\d+$/,
            G = {};
        let J = 1;
        const Z = { mouseenter: "mouseover", mouseleave: "mouseout" },
            ee = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function te(e, t) {
            return (t && t + "::" + J++) || e.uidEvent || J++;
        }
        function ne(e) {
            var t = te(e);
            return (e.uidEvent = t), (G[t] = G[t] || {}), G[t];
        }
        function ie(e, t, n = null) {
            return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
        }
        function re(e, t, n) {
            var i = "string" == typeof t,
                t = (!i && t) || n;
            let r = ae(e);
            return [i, t, (r = ee.has(r) ? r : e)];
        }
        function oe(i, r, o, s, a) {
            if ("string" == typeof r && i) {
                let [e, t, n] = re(r, o, s);
                r in Z &&
                    (t =
                        ((l = t),
                        function (e) {
                            if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return l.call(this, e);
                        }));
                var l,
                    c,
                    u,
                    d,
                    f,
                    h,
                    s = ne(i),
                    s = s[n] || (s[n] = {}),
                    p = ie(s, t, e ? o : null);
                p
                    ? (p.oneOff = p.oneOff && a)
                    : ((p = te(t, r.replace(Y, ""))),
                      ((r = e
                          ? ((d = i),
                            (f = o),
                            (h = t),
                            function t(n) {
                                var i = d.querySelectorAll(f);
                                for (let e = n["target"]; e && e !== this; e = e.parentNode) for (const r of i) if (r === e) return le(n, { delegateTarget: e }), t.oneOff && g.off(d, n.type, f, h), h.apply(e, [n]);
                            })
                          : ((c = i),
                            (u = t),
                            function e(t) {
                                return le(t, { delegateTarget: c }), e.oneOff && g.off(c, t.type, u), u.apply(c, [t]);
                            })).delegationSelector = e ? o : null),
                      (r.callable = t),
                      (r.oneOff = a),
                      (s[(r.uidEvent = p)] = r),
                      i.addEventListener(n, r, e));
            }
        }
        function se(e, t, n, i, r) {
            i = ie(t[n], i, r);
            i && (e.removeEventListener(n, i, Boolean(r)), delete t[n][i.uidEvent]);
        }
        function ae(e) {
            return (e = e.replace(Q, "")), Z[e] || e;
        }
        const g = {
            on(e, t, n, i) {
                oe(e, t, n, i, !1);
            },
            one(e, t, n, i) {
                oe(e, t, n, i, !0);
            },
            off(e, t, n, i) {
                if ("string" == typeof t && e) {
                    var r,
                        o,
                        [i, s, a] = re(t, n, i),
                        l = a !== t,
                        c = ne(e),
                        u = c[a] || {},
                        d = t.startsWith(".");
                    if (void 0 !== s) return Object.keys(u).length ? void se(e, c, a, s, i ? n : null) : void 0;
                    if (d)
                        for (const _ of Object.keys(c)) {
                            h = f = y = v = m = g = p = void 0;
                            var f,
                                h,
                                p = e,
                                g = c,
                                m = _,
                                v = t.slice(1),
                                y = g[m] || {};
                            for ([f, h] of Object.entries(y)) f.includes(v) && se(p, g, m, h.callable, h.delegationSelector);
                        }
                    for ([r, o] of Object.entries(u)) {
                        var b = r.replace(K, "");
                        (l && !t.includes(b)) || se(e, c, a, o.callable, o.delegationSelector);
                    }
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                var i = z();
                let r = null,
                    o = !0,
                    s = !0,
                    a = !1;
                t !== ae(t) && i && ((r = i.Event(t, n)), i(e).trigger(r), (o = !r.isPropagationStopped()), (s = !r.isImmediatePropagationStopped()), (a = r.isDefaultPrevented()));
                i = le(new Event(t, { bubbles: o, cancelable: !0 }), n);
                return a && i.preventDefault(), s && e.dispatchEvent(i), i.defaultPrevented && r && r.preventDefault(), i;
            },
        };
        function le(t, e = {}) {
            for (const [n, i] of Object.entries(e))
                try {
                    t[n] = i;
                } catch (e) {
                    Object.defineProperty(t, n, {
                        configurable: !0,
                        get() {
                            return i;
                        },
                    });
                }
            return t;
        }
        function ce(t) {
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (t === Number(t).toString()) return Number(t);
            if ("" === t || "null" === t) return null;
            if ("string" != typeof t) return t;
            try {
                return JSON.parse(decodeURIComponent(t));
            } catch (e) {
                return t;
            }
        }
        function ue(e) {
            return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
        }
        const u = {
            setDataAttribute(e, t, n) {
                e.setAttribute("data-bs-" + ue(t), n);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute("data-bs-" + ue(t));
            },
            getDataAttributes(t) {
                if (!t) return {};
                var n = {};
                for (const i of Object.keys(t.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"))) {
                    let e = i.replace(/^bs/, "");
                    n[(e = e.charAt(0).toLowerCase() + e.slice(1, e.length))] = ce(t.dataset[i]);
                }
                return n;
            },
            getDataAttribute(e, t) {
                return ce(e.getAttribute("data-bs-" + ue(t)));
            },
        };
        class de {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return e;
            }
            _mergeConfigObj(e, t) {
                var n = o(t) ? u.getDataAttribute(t, "config") : {};
                return { ...this.constructor.Default, ...("object" == typeof n ? n : {}), ...(o(t) ? u.getDataAttributes(t) : {}), ...("object" == typeof e ? e : {}) };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (var [n, i] of Object.entries(t)) {
                    var r = e[n],
                        r = o(r)
                            ? "element"
                            : null == (r = r)
                            ? "" + r
                            : Object.prototype.toString
                                  .call(r)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                    if (!new RegExp(i).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`);
                }
            }
        }
        class t extends de {
            constructor(e, t) {
                super(), (e = r(e)) && ((this._element = e), (this._config = this._getConfig(t)), M.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                M.remove(this._element, this.constructor.DATA_KEY), g.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, t, n = !0) {
                X(e, t, n);
            }
            _getConfig(e) {
                return (e = this._mergeConfigObj(e, this._element)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            static getInstance(e) {
                return M.get(r(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
            }
            static get VERSION() {
                return "5.3.0";
            }
            static get DATA_KEY() {
                return "bs." + this.NAME;
            }
            static get EVENT_KEY() {
                return "." + this.DATA_KEY;
            }
            static eventName(e) {
                return "" + e + this.EVENT_KEY;
            }
        }
        const fe = (t) => {
                let n = t.getAttribute("data-bs-target");
                if (!n || "#" === n) {
                    let e = t.getAttribute("href");
                    if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
                    e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]), (n = e && "#" !== e ? e.trim() : null);
                }
                return F(n);
            },
            d = {
                find(e, t = document.documentElement) {
                    return [].concat(...Element.prototype.querySelectorAll.call(t, e));
                },
                findOne(e, t = document.documentElement) {
                    return Element.prototype.querySelector.call(t, e);
                },
                children(e, t) {
                    return [].concat(...e.children).filter((e) => e.matches(t));
                },
                parents(e, t) {
                    var n = [];
                    let i = e.parentNode.closest(t);
                    for (; i; ) n.push(i), (i = i.parentNode.closest(t));
                    return n;
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(e) {
                    var t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => e + ':not([tabindex^="-"])').join(",");
                    return this.find(t, e).filter((e) => !a(e) && s(e));
                },
                getSelectorFromElement(e) {
                    e = fe(e);
                    return e && d.findOne(e) ? e : null;
                },
                getElementFromSelector(e) {
                    e = fe(e);
                    return e ? d.findOne(e) : null;
                },
                getMultipleElementsFromSelector(e) {
                    e = fe(e);
                    return e ? d.find(e) : [];
                },
            };
        var he = (t, n = "hide") => {
            var e = "click.dismiss" + t.EVENT_KEY;
            const i = t.NAME;
            g.on(document, e, `[data-bs-dismiss="${i}"]`, function (e) {
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(), a(this) || ((e = d.getElementFromSelector(this) || this.closest("." + i)), t.getOrCreateInstance(e)[n]());
            });
        };
        class pe extends t {
            static get NAME() {
                return "alert";
            }
            close() {
                var e;
                g.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), (e = this._element.classList.contains("fade")), this._queueCallback(() => this._destroyElement(), this._element, e));
            }
            _destroyElement() {
                this._element.remove(), g.trigger(this._element, "closed.bs.alert"), this.dispose();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = pe.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        he(pe, "close"), e(pe);
        const ge = '[data-bs-toggle="button"]';
        class me extends t {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = me.getOrCreateInstance(this);
                    "toggle" === t && e[t]();
                });
            }
        }
        g.on(document, "click.bs.button.data-api", ge, (e) => {
            e.preventDefault();
            e = e.target.closest(ge);
            me.getOrCreateInstance(e).toggle();
        }),
            e(me);
        const n = ".bs.swipe",
            ve = (n, n, n, n, n, { endCallback: null, leftCallback: null, rightCallback: null }),
            ye = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
        class be extends de {
            constructor(e, t) {
                super(), (this._element = e) && be.isSupported() && ((this._config = this._getConfig(t)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
            }
            static get Default() {
                return ve;
            }
            static get DefaultType() {
                return ye;
            }
            static get NAME() {
                return "swipe";
            }
            dispose() {
                g.off(this._element, n);
            }
            _start(e) {
                this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), c(this._config.endCallback);
            }
            _move(e) {
                this._deltaX = e.touches && 1 < e.touches.length ? 0 : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                var e = Math.abs(this._deltaX);
                e <= 40 || ((e = e / this._deltaX), (this._deltaX = 0), e && c(0 < e ? this._config.rightCallback : this._config.leftCallback));
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (g.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e)), g.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)), this._element.classList.add("pointer-event"))
                    : (g.on(this._element, "touchstart.bs.swipe", (e) => this._start(e)), g.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)), g.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType);
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints;
            }
        }
        var f = ".bs.carousel";
        const _e = "next",
            h = "prev",
            p = "left",
            we = "right",
            xe = "slid" + f;
        const Te = "carousel",
            Ee = "active",
            Ce = ".active",
            Ae = ".carousel-item";
        Ce, Ae;
        const ke = { ArrowLeft: we, ArrowRight: p },
            Se = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
            Oe = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
        class De extends t {
            constructor(e, t) {
                super(e, t),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._swipeHelper = null),
                    (this._indicatorsElement = d.findOne(".carousel-indicators", this._element)),
                    this._addEventListeners(),
                    this._config.ride === Te && this.cycle();
            }
            static get Default() {
                return Se;
            }
            static get DefaultType() {
                return Oe;
            }
            static get NAME() {
                return "carousel";
            }
            next() {
                this._slide(_e);
            }
            nextWhenVisible() {
                !document.hidden && s(this._element) && this.next();
            }
            prev() {
                this._slide(h);
            }
            pause() {
                this._isSliding && R(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
            }
            _maybeEnableCycle() {
                this._config.ride && (this._isSliding ? g.one(this._element, xe, () => this.cycle()) : this.cycle());
            }
            to(e) {
                var t,
                    n = this._getItems();
                e > n.length - 1 || e < 0 || (this._isSliding ? g.one(this._element, xe, () => this.to(e)) : (t = this._getItemIndex(this._getActive())) !== e && ((t = t < e ? _e : h), this._slide(t, n[e])));
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
                return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
                this._config.keyboard && g.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
                    "hover" === this._config.pause && (g.on(this._element, "mouseenter.bs.carousel", () => this.pause()), g.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())),
                    this._config.touch && be.isSupported() && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (const t of d.find(".carousel-item img", this._element)) g.on(t, "dragstart.bs.carousel", (e) => e.preventDefault());
                var e = {
                    leftCallback: () => this._slide(this._directionToOrder(p)),
                    rightCallback: () => this._slide(this._directionToOrder(we)),
                    endCallback: () => {
                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                    },
                };
                this._swipeHelper = new be(this._element, e);
            }
            _keydown(e) {
                var t;
                /input|textarea/i.test(e.target.tagName) || ((t = ke[e.key]) && (e.preventDefault(), this._slide(this._directionToOrder(t))));
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
                var t;
                this._indicatorsElement &&
                    ((t = d.findOne(Ce, this._indicatorsElement)).classList.remove(Ee), t.removeAttribute("aria-current"), (t = d.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement))) &&
                    (t.classList.add(Ee), t.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
                var e = this._activeElement || this._getActive();
                e && ((e = Number.parseInt(e.getAttribute("data-bs-interval"), 10)), (this._config.interval = e || this._config.defaultInterval));
            }
            _slide(t, e = null) {
                if (!this._isSliding) {
                    const i = this._getActive();
                    var n = t === _e;
                    const r = e || U(this._getItems(), i, n, this._config.wrap);
                    if (r !== i) {
                        const o = this._getItemIndex(r),
                            s = (e) => g.trigger(this._element, e, { relatedTarget: r, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: o });
                        e = s("slide.bs.carousel");
                        if (!e.defaultPrevented && i && r) {
                            e = Boolean(this._interval);
                            this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = r);
                            const a = n ? "carousel-item-start" : "carousel-item-end",
                                l = n ? "carousel-item-next" : "carousel-item-prev";
                            r.classList.add(l), $(r), i.classList.add(a), r.classList.add(a);
                            this._queueCallback(
                                () => {
                                    r.classList.remove(a, l), r.classList.add(Ee), i.classList.remove(Ee, l, a), (this._isSliding = !1), s(xe);
                                },
                                i,
                                this._isAnimated()
                            ),
                                e && this.cycle();
                        }
                    }
                }
            }
            _isAnimated() {
                return this._element.classList.contains("slide");
            }
            _getActive() {
                return d.findOne(".active.carousel-item", this._element);
            }
            _getItems() {
                return d.find(Ae, this._element);
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
                return l() ? (e === p ? h : _e) : e === p ? _e : h;
            }
            _orderToDirection(e) {
                return l() ? (e === h ? p : we) : e === h ? we : p;
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = De.getOrCreateInstance(this, t);
                    if ("number" == typeof t) e.to(t);
                    else if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (e) {
            var t = d.getElementFromSelector(this);
            t &&
                t.classList.contains(Te) &&
                (e.preventDefault(), (e = De.getOrCreateInstance(t)), (t = this.getAttribute("data-bs-slide-to")) ? e.to(t) : "next" === u.getDataAttribute(this, "slide") ? e.next() : e.prev(), e._maybeEnableCycle());
        }),
            g.on(window, "load.bs.carousel.data-api", () => {
                for (const e of d.find('[data-bs-ride="carousel"]')) De.getOrCreateInstance(e);
            }),
            e(De);
        const Le = "show",
            m = "collapse",
            je = "collapsing",
            Ne = (m, m, '[data-bs-toggle="collapse"]'),
            Pe = { parent: null, toggle: !0 },
            Ie = { parent: "(null|element)", toggle: "boolean" };
        class Me extends t {
            constructor(e, t) {
                super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
                for (const r of d.find(Ne)) {
                    var n = d.getSelectorFromElement(r),
                        i = d.find(n).filter((e) => e === this._element);
                    null !== n && i.length && this._triggerArray.push(r);
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
            }
            static get Default() {
                return Pe;
            }
            static get DefaultType() {
                return Ie;
            }
            static get NAME() {
                return "collapse";
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (!this._isTransitioning && !this._isShown()) {
                    let e = [];
                    if (
                        !(e = this._config.parent
                            ? this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                                  .filter((e) => e !== this._element)
                                  .map((e) => Me.getOrCreateInstance(e, { toggle: !1 }))
                            : e).length ||
                        !e[0]._isTransitioning
                    ) {
                        var t = g.trigger(this._element, "show.bs.collapse");
                        if (!t.defaultPrevented) {
                            for (const i of e) i.hide();
                            const n = this._getDimension();
                            this._element.classList.remove(m), this._element.classList.add(je), (this._element.style[n] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                            t = "scroll" + (n[0].toUpperCase() + n.slice(1));
                            this._queueCallback(
                                () => {
                                    (this._isTransitioning = !1), this._element.classList.remove(je), this._element.classList.add(m, Le), (this._element.style[n] = ""), g.trigger(this._element, "shown.bs.collapse");
                                },
                                this._element,
                                !0
                            ),
                                (this._element.style[n] = this._element[t] + "px");
                        }
                    }
                }
            }
            hide() {
                if (!this._isTransitioning && this._isShown()) {
                    var e = g.trigger(this._element, "hide.bs.collapse");
                    if (!e.defaultPrevented) {
                        e = this._getDimension();
                        (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px"), $(this._element), this._element.classList.add(je), this._element.classList.remove(m, Le);
                        for (const n of this._triggerArray) {
                            var t = d.getElementFromSelector(n);
                            t && !this._isShown(t) && this._addAriaAndCollapsedClass([n], !1);
                        }
                        this._isTransitioning = !0;
                        (this._element.style[e] = ""),
                            this._queueCallback(
                                () => {
                                    (this._isTransitioning = !1), this._element.classList.remove(je), this._element.classList.add(m), g.trigger(this._element, "hidden.bs.collapse");
                                },
                                this._element,
                                !0
                            );
                    }
                }
            }
            _isShown(e = this._element) {
                return e.classList.contains(Le);
            }
            _configAfterMerge(e) {
                return (e.toggle = Boolean(e.toggle)), (e.parent = r(e.parent)), e;
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
            _initializeChildren() {
                if (this._config.parent)
                    for (const t of this._getFirstLevelChildren(Ne)) {
                        var e = d.getElementFromSelector(t);
                        e && this._addAriaAndCollapsedClass([t], this._isShown(e));
                    }
            }
            _getFirstLevelChildren(e) {
                const t = d.find(":scope .collapse .collapse", this._config.parent);
                return d.find(e, this._config.parent).filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length) for (const n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(t) {
                const n = {};
                return (
                    "string" == typeof t && /show|hide/.test(t) && (n.toggle = !1),
                    this.each(function () {
                        var e = Me.getOrCreateInstance(this, n);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                            e[t]();
                        }
                    })
                );
            }
        }
        g.on(document, "click.bs.collapse.data-api", Ne, function (e) {
            ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
            for (const t of d.getMultipleElementsFromSelector(this)) Me.getOrCreateInstance(t, { toggle: !1 }).toggle();
        }),
            e(Me);
        var k = "top",
            S = "bottom",
            O = "right",
            D = "left",
            He = "auto",
            L = [k, S, O, D],
            j = "start",
            qe = "end",
            Fe = "clippingParents",
            Re = "viewport",
            We = "popper",
            Be = "reference",
            $e = L.reduce(function (e, t) {
                return e.concat([t + "-" + j, t + "-" + qe]);
            }, []),
            ze = [].concat(L, [He]).reduce(function (e, t) {
                return e.concat([t, t + "-" + j, t + "-" + qe]);
            }, []),
            f = "beforeRead",
            Ve = "afterRead",
            Xe = "beforeMain",
            Ue = "afterMain",
            Ye = "beforeWrite",
            Qe = "afterWrite",
            Ke = [f, "read", Ve, Xe, "main", Ue, Ye, "write", Qe];
        function v(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function b(e) {
            var t;
            return null == e ? window : "[object Window]" !== e.toString() ? ((t = e.ownerDocument) && t.defaultView) || window : e;
        }
        function y(e) {
            return e instanceof b(e).Element || e instanceof Element;
        }
        function _(e) {
            return e instanceof b(e).HTMLElement || e instanceof HTMLElement;
        }
        function Ge(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof b(e).ShadowRoot || e instanceof ShadowRoot);
        }
        var Je = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var r = e.state;
                Object.keys(r.elements).forEach(function (e) {
                    var t = r.styles[e] || {},
                        n = r.attributes[e] || {},
                        i = r.elements[e];
                    _(i) &&
                        v(i) &&
                        (Object.assign(i.style, t),
                        Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var i = e.state,
                    r = { popper: { position: i.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                return (
                    Object.assign(i.elements.popper.style, r.popper),
                    (i.styles = r),
                    i.elements.arrow && Object.assign(i.elements.arrow.style, r.arrow),
                    function () {
                        Object.keys(i.elements).forEach(function (e) {
                            var t = i.elements[e],
                                n = i.attributes[e] || {},
                                e = Object.keys((i.styles.hasOwnProperty(e) ? i.styles : r)[e]).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            _(t) &&
                                v(t) &&
                                (Object.assign(t.style, e),
                                Object.keys(n).forEach(function (e) {
                                    t.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function N(e) {
            return e.split("-")[0];
        }
        var A = Math.max,
            Ze = Math.min,
            et = Math.round;
        function tt() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands)
                ? e.brands
                      .map(function (e) {
                          return e.brand + "/" + e.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function nt() {
            return !/^((?!chrome|android).)*safari/i.test(tt());
        }
        function it(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var i = e.getBoundingClientRect(),
                r = 1,
                o = 1;
            t && _(e) && ((r = (0 < e.offsetWidth && et(i.width) / e.offsetWidth) || 1), (o = (0 < e.offsetHeight && et(i.height) / e.offsetHeight) || 1));
            (t = (y(e) ? b(e) : window).visualViewport), (e = !nt() && n), (n = (i.left + (e && t ? t.offsetLeft : 0)) / r), (e = (i.top + (e && t ? t.offsetTop : 0)) / o), (t = i.width / r), (r = i.height / o);
            return { width: t, height: r, top: e, right: n + t, bottom: e + r, left: n, x: n, y: e };
        }
        function rt(e) {
            var t = it(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i };
        }
        function ot(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && Ge(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                } while ((i = i.parentNode || i.host));
            }
            return !1;
        }
        function w(e) {
            return b(e).getComputedStyle(e);
        }
        function x(e) {
            return ((y(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }
        function st(e) {
            return "html" === v(e) ? e : e.assignedSlot || e.parentNode || (Ge(e) ? e.host : null) || x(e);
        }
        function at(e) {
            return _(e) && "fixed" !== w(e).position ? e.offsetParent : null;
        }
        function lt(e) {
            for (var t, n = b(e), i = at(e); i && ((t = i), 0 <= ["table", "td", "th"].indexOf(v(t))) && "static" === w(i).position; ) i = at(i);
            return (
                ((!i || ("html" !== v(i) && ("body" !== v(i) || "static" !== w(i).position))) &&
                    (i ||
                        (function (e) {
                            var t = /firefox/i.test(tt()),
                                n = /Trident/i.test(tt());
                            if (!n || !_(e) || "fixed" !== w(e).position) {
                                var i = st(e);
                                for (Ge(i) && (i = i.host); _(i) && ["html", "body"].indexOf(v(i)) < 0; ) {
                                    var r = w(i);
                                    if (
                                        "none" !== r.transform ||
                                        "none" !== r.perspective ||
                                        "paint" === r.contain ||
                                        -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                                        (t && "filter" === r.willChange) ||
                                        (t && r.filter && "none" !== r.filter)
                                    )
                                        return i;
                                    i = i.parentNode;
                                }
                            }
                            return null;
                        })(e))) ||
                n
            );
        }
        function ct(e) {
            return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
        }
        function ut(e, t, n) {
            return A(e, Ze(t, n));
        }
        function dt() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function ft(e) {
            return Object.assign({}, dt(), e);
        }
        function ht(n, e) {
            return e.reduce(function (e, t) {
                return (e[t] = n), e;
            }, {});
        }
        var pt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o = e.state,
                    s = e.name,
                    e = e.options,
                    a = o.elements.arrow,
                    l = o.modifiersData.popperOffsets,
                    c = ct((u = N(o.placement))),
                    u = 0 <= [D, O].indexOf(u) ? "height" : "width";
                a &&
                    l &&
                    ((e = e.padding),
                    (n = o),
                    (n = ft("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, n.rects, { placement: n.placement })) : e) ? e : ht(e, L))),
                    (e = rt(a)),
                    (r = "y" === c ? k : D),
                    (i = "y" === c ? S : O),
                    (t = o.rects.reference[u] + o.rects.reference[c] - l[c] - o.rects.popper[u]),
                    (l = l[c] - o.rects.reference[c]),
                    (a = (a = lt(a)) ? ("y" === c ? a.clientHeight || 0 : a.clientWidth || 0) : 0),
                    (r = n[r]),
                    (n = a - e[u] - n[i]),
                    (r = ut(r, (i = a / 2 - e[u] / 2 + (t / 2 - l / 2)), n)),
                    (o.modifiersData[s] = (((a = {})[c] = r), (a.centerOffset = r - i), a)));
            },
            effect: function (e) {
                var t = e.state;
                null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) && ("string" != typeof e || (e = t.elements.popper.querySelector(e))) && ot(t.elements.popper, e) && (t.elements.arrow = e);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function gt(e) {
            return e.split("-")[1];
        }
        var mt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function vt(e) {
            var t,
                n = e.popper,
                i = e.popperRect,
                r = e.placement,
                o = e.variation,
                s = e.offsets,
                a = e.position,
                l = e.gpuAcceleration,
                c = e.adaptive,
                u = e.roundOffsets,
                e = e.isFixed,
                d = s.x,
                d = void 0 === d ? 0 : d,
                f = s.y,
                f = void 0 === f ? 0 : f,
                h = "function" == typeof u ? u({ x: d, y: f }) : { x: d, y: f },
                h = ((d = h.x), (f = h.y), s.hasOwnProperty("x")),
                s = s.hasOwnProperty("y"),
                p = D,
                g = k,
                m = window,
                v =
                    (c &&
                        ((v = "clientHeight"),
                        (t = "clientWidth"),
                        (y = lt(n)) === b(n) && "static" !== w((y = x(n))).position && "absolute" === a && ((v = "scrollHeight"), (t = "scrollWidth")),
                        (r !== k && ((r !== D && r !== O) || o !== qe)) || ((g = S), (f = (f - ((e && y === m && m.visualViewport ? m.visualViewport.height : y[v]) - i.height)) * (l ? 1 : -1))),
                        (r !== D && ((r !== k && r !== S) || o !== qe)) || ((p = O), (d = (d - ((e && y === m && m.visualViewport ? m.visualViewport.width : y[t]) - i.width)) * (l ? 1 : -1)))),
                    Object.assign({ position: a }, c && mt)),
                y = !0 === u ? ((r = { x: d, y: f }), (o = b(n)), (e = r.x), (r = r.y), (o = o.devicePixelRatio || 1), { x: et(e * o) / o || 0, y: et(r * o) / o || 0 }) : { x: d, y: f };
            return (
                (d = y.x),
                (f = y.y),
                l
                    ? Object.assign({}, v, (((t = {})[g] = s ? "0" : ""), (t[p] = h ? "0" : ""), (t.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)"), t))
                    : Object.assign({}, v, (((i = {})[g] = s ? f + "px" : ""), (i[p] = h ? d + "px" : ""), (i.transform = ""), i))
            );
        }
        var yt = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (e) {
                    var t = e.state,
                        e = e.options,
                        n = void 0 === (n = e.gpuAcceleration) || n,
                        i = void 0 === (i = e.adaptive) || i,
                        e = void 0 === (e = e.roundOffsets) || e,
                        n = { placement: N(t.placement), variation: gt(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: n, isFixed: "fixed" === t.options.strategy };
                    null != t.modifiersData.popperOffsets &&
                        (t.styles.popper = Object.assign({}, t.styles.popper, vt(Object.assign({}, n, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: e })))),
                        null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, vt(Object.assign({}, n, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: e })))),
                        (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                },
                data: {},
            },
            bt = { passive: !0 };
        var _t = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (e) {
                    var t = e.state,
                        n = e.instance,
                        i = (e = e.options).scroll,
                        r = void 0 === i || i,
                        o = void 0 === (i = e.resize) || i,
                        s = b(t.elements.popper),
                        a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return (
                        r &&
                            a.forEach(function (e) {
                                e.addEventListener("scroll", n.update, bt);
                            }),
                        o && s.addEventListener("resize", n.update, bt),
                        function () {
                            r &&
                                a.forEach(function (e) {
                                    e.removeEventListener("scroll", n.update, bt);
                                }),
                                o && s.removeEventListener("resize", n.update, bt);
                        }
                    );
                },
                data: {},
            },
            wt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function xt(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return wt[e];
            });
        }
        var Tt = { start: "end", end: "start" };
        function Et(e) {
            return e.replace(/start|end/g, function (e) {
                return Tt[e];
            });
        }
        function Ct(e) {
            e = b(e);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function At(e) {
            return it(x(e)).left + Ct(e).scrollLeft;
        }
        function kt(e) {
            var e = w(e),
                t = e.overflow,
                n = e.overflowX,
                e = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(t + e + n);
        }
        function St(e, t) {
            void 0 === t && (t = []);
            var n = (function e(t) {
                    return 0 <= ["html", "body", "#document"].indexOf(v(t)) ? t.ownerDocument.body : _(t) && kt(t) ? t : e(st(t));
                })(e),
                e = n === (null == (e = e.ownerDocument) ? void 0 : e.body),
                i = b(n),
                i = e ? [i].concat(i.visualViewport || [], kt(n) ? n : []) : n,
                n = t.concat(i);
            return e ? n : n.concat(St(st(i)));
        }
        function Ot(e) {
            return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
        }
        function Dt(e, t, n) {
            return t === Re
                ? Ot(
                      ((r = n),
                      (s = b((i = e))),
                      (a = x(i)),
                      (s = s.visualViewport),
                      (l = a.clientWidth),
                      (a = a.clientHeight),
                      (u = c = 0),
                      s && ((l = s.width), (a = s.height), (o = nt()) || (!o && "fixed" === r)) && ((c = s.offsetLeft), (u = s.offsetTop)),
                      { width: l, height: a, x: c + At(i), y: u })
                  )
                : y(t)
                ? (((r = it((o = t), !1, "fixed" === (r = n))).top = r.top + o.clientTop),
                  (r.left = r.left + o.clientLeft),
                  (r.bottom = r.top + o.clientHeight),
                  (r.right = r.left + o.clientWidth),
                  (r.width = o.clientWidth),
                  (r.height = o.clientHeight),
                  (r.x = r.left),
                  (r.y = r.top),
                  r)
                : Ot(
                      ((s = x(e)),
                      (l = x(s)),
                      (a = Ct(s)),
                      (c = null == (c = s.ownerDocument) ? void 0 : c.body),
                      (i = A(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0)),
                      (u = A(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0)),
                      (s = -a.scrollLeft + At(s)),
                      (a = -a.scrollTop),
                      "rtl" === w(c || l).direction && (s += A(l.clientWidth, c ? c.clientWidth : 0) - i),
                      { width: i, height: u, x: s, y: a })
                  );
            var i, r, o, s, a, l, c, u;
        }
        function Lt(n, e, t, i) {
            var r,
                o =
                    "clippingParents" === e
                        ? ((s = St(st((o = n)))),
                          y((r = 0 <= ["absolute", "fixed"].indexOf(w(o).position) && _(o) ? lt(o) : o))
                              ? s.filter(function (e) {
                                    return y(e) && ot(e, r) && "body" !== v(e);
                                })
                              : [])
                        : [].concat(e),
                s = [].concat(o, [t]),
                e = s[0],
                t = s.reduce(function (e, t) {
                    t = Dt(n, t, i);
                    return (e.top = A(t.top, e.top)), (e.right = Ze(t.right, e.right)), (e.bottom = Ze(t.bottom, e.bottom)), (e.left = A(t.left, e.left)), e;
                }, Dt(n, e, i));
            return (t.width = t.right - t.left), (t.height = t.bottom - t.top), (t.x = t.left), (t.y = t.top), t;
        }
        function jt(e) {
            var t,
                n = e.reference,
                i = e.element,
                e = e.placement,
                r = e ? N(e) : null,
                e = e ? gt(e) : null,
                o = n.x + n.width / 2 - i.width / 2,
                s = n.y + n.height / 2 - i.height / 2;
            switch (r) {
                case k:
                    t = { x: o, y: n.y - i.height };
                    break;
                case S:
                    t = { x: o, y: n.y + n.height };
                    break;
                case O:
                    t = { x: n.x + n.width, y: s };
                    break;
                case D:
                    t = { x: n.x - i.width, y: s };
                    break;
                default:
                    t = { x: n.x, y: n.y };
            }
            var a = r ? ct(r) : null;
            if (null != a) {
                var l = "y" === a ? "height" : "width";
                switch (e) {
                    case j:
                        t[a] = t[a] - (n[l] / 2 - i[l] / 2);
                        break;
                    case qe:
                        t[a] = t[a] + (n[l] / 2 - i[l] / 2);
                }
            }
            return t;
        }
        function Nt(e, t) {
            var i,
                t = (t = void 0 === t ? {} : t),
                n = t.placement,
                n = void 0 === n ? e.placement : n,
                r = t.strategy,
                r = void 0 === r ? e.strategy : r,
                o = t.boundary,
                o = void 0 === o ? Fe : o,
                s = t.rootBoundary,
                s = void 0 === s ? Re : s,
                a = t.elementContext,
                a = void 0 === a ? We : a,
                l = t.altBoundary,
                l = void 0 !== l && l,
                t = t.padding,
                t = void 0 === t ? 0 : t,
                t = ft("number" != typeof t ? t : ht(t, L)),
                c = e.rects.popper,
                l = e.elements[l ? (a === We ? Be : We) : a],
                l = Lt(y(l) ? l : l.contextElement || x(e.elements.popper), o, s, r),
                o = it(e.elements.reference),
                s = jt({ reference: o, element: c, strategy: "absolute", placement: n }),
                r = Ot(Object.assign({}, c, s)),
                c = a === We ? r : o,
                u = { top: l.top - c.top + t.top, bottom: c.bottom - l.bottom + t.bottom, left: l.left - c.left + t.left, right: c.right - l.right + t.right },
                s = e.modifiersData.offset;
            return (
                a === We &&
                    s &&
                    ((i = s[n]),
                    Object.keys(u).forEach(function (e) {
                        var t = 0 <= [O, S].indexOf(e) ? 1 : -1,
                            n = 0 <= [k, S].indexOf(e) ? "y" : "x";
                        u[e] += i[n] * t;
                    })),
                u
            );
        }
        var Pt = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var d = e.state,
                    t = e.options,
                    e = e.name;
                if (!d.modifiersData[e]._skip) {
                    for (
                        var n = t.mainAxis,
                            i = void 0 === n || n,
                            n = t.altAxis,
                            r = void 0 === n || n,
                            n = t.fallbackPlacements,
                            f = t.padding,
                            h = t.boundary,
                            p = t.rootBoundary,
                            o = t.altBoundary,
                            s = t.flipVariations,
                            g = void 0 === s || s,
                            m = t.allowedAutoPlacements,
                            s = d.options.placement,
                            t = N(s),
                            n = n || (t === s || !g ? [xt(s)] : N((n = s)) === He ? [] : ((t = xt(n)), [Et(n), t, Et(t)])),
                            a = [s].concat(n).reduce(function (e, t) {
                                return e.concat(
                                    N(t) === He
                                        ? ((n = d),
                                          (i = (e = e = void 0 === (e = { placement: t, boundary: h, rootBoundary: p, padding: f, flipVariations: g, allowedAutoPlacements: m }) ? {} : e).placement),
                                          (r = e.boundary),
                                          (o = e.rootBoundary),
                                          (s = e.padding),
                                          (a = e.flipVariations),
                                          (l = void 0 === (e = e.allowedAutoPlacements) ? ze : e),
                                          (c = gt(i)),
                                          (e = c
                                              ? a
                                                  ? $e
                                                  : $e.filter(function (e) {
                                                        return gt(e) === c;
                                                    })
                                              : L),
                                          (u = (i =
                                              0 ===
                                              (i = e.filter(function (e) {
                                                  return 0 <= l.indexOf(e);
                                              })).length
                                                  ? e
                                                  : i).reduce(function (e, t) {
                                              return (e[t] = Nt(n, { placement: t, boundary: r, rootBoundary: o, padding: s })[N(t)]), e;
                                          }, {})),
                                          Object.keys(u).sort(function (e, t) {
                                              return u[e] - u[t];
                                          }))
                                        : t
                                );
                                var n, i, r, o, s, a, l, c, u;
                            }, []),
                            l = d.rects.reference,
                            c = d.rects.popper,
                            u = new Map(),
                            v = !0,
                            y = a[0],
                            b = 0;
                        b < a.length;
                        b++
                    ) {
                        var _ = a[b],
                            w = N(_),
                            x = gt(_) === j,
                            T = 0 <= [k, S].indexOf(w),
                            E = T ? "width" : "height",
                            C = Nt(d, { placement: _, boundary: h, rootBoundary: p, altBoundary: o, padding: f }),
                            T = T ? (x ? O : D) : x ? S : k,
                            x = (l[E] > c[E] && (T = xt(T)), xt(T)),
                            E = [];
                        if (
                            (i && E.push(C[w] <= 0),
                            r && E.push(C[T] <= 0, C[x] <= 0),
                            E.every(function (e) {
                                return e;
                            }))
                        ) {
                            (y = _), (v = !1);
                            break;
                        }
                        u.set(_, E);
                    }
                    if (v)
                        for (var A = g ? 3 : 1; 0 < A; A--)
                            if (
                                "break" ===
                                (function (t) {
                                    var e = a.find(function (e) {
                                        e = u.get(e);
                                        if (e)
                                            return e.slice(0, t).every(function (e) {
                                                return e;
                                            });
                                    });
                                    if (e) return (y = e), "break";
                                })(A)
                            )
                                break;
                    d.placement !== y && ((d.modifiersData[e]._skip = !0), (d.placement = y), (d.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function It(e, t, n) {
            return { top: e.top - t.height - (n = void 0 === n ? { x: 0, y: 0 } : n).y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
        }
        function Mt(t) {
            return [k, O, S, D].some(function (e) {
                return 0 <= t[e];
            });
        }
        var Ht = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    e = e.name,
                    n = t.rects.reference,
                    i = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    o = Nt(t, { elementContext: "reference" }),
                    s = Nt(t, { altBoundary: !0 }),
                    o = It(o, n),
                    n = It(s, i, r),
                    s = Mt(o),
                    i = Mt(n);
                (t.modifiersData[e] = { referenceClippingOffsets: o, popperEscapeOffsets: n, isReferenceHidden: s, hasPopperEscaped: i }),
                    (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": s, "data-popper-escaped": i }));
            },
        };
        var qt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var s = e.state,
                    t = e.options,
                    e = e.name,
                    a = void 0 === (t = t.offset) ? [0, 0] : t,
                    t = ze.reduce(function (e, t) {
                        var n, i, r, o;
                        return (
                            (e[t] =
                                ((t = t),
                                (n = s.rects),
                                (i = a),
                                (r = N(t)),
                                (o = 0 <= [D, k].indexOf(r) ? -1 : 1),
                                (t = (n = "function" == typeof i ? i(Object.assign({}, n, { placement: t })) : i)[0] || 0),
                                (i = (n[1] || 0) * o),
                                0 <= [D, O].indexOf(r) ? { x: i, y: t } : { x: t, y: i })),
                            e
                        );
                    }, {}),
                    n = (i = t[s.placement]).x,
                    i = i.y;
                null != s.modifiersData.popperOffsets && ((s.modifiersData.popperOffsets.x += n), (s.modifiersData.popperOffsets.y += i)), (s.modifiersData[e] = t);
            },
        };
        var Ft = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    e = e.name;
                t.modifiersData[e] = jt({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
            },
            data: {},
        };
        var Rt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = e.state,
                    d = e.options,
                    e = e.name,
                    f = void 0 === (f = d.mainAxis) || f,
                    h = void 0 !== (h = d.altAxis) && h,
                    p = d.boundary,
                    g = d.rootBoundary,
                    m = d.altBoundary,
                    v = d.padding,
                    y = void 0 === (y = d.tether) || y,
                    d = void 0 === (d = d.tetherOffset) ? 0 : d,
                    p = Nt(u, { boundary: p, rootBoundary: g, padding: v, altBoundary: m }),
                    g = N(u.placement),
                    m = !(v = gt(u.placement)),
                    b = ct(g),
                    _ = "x" === b ? "y" : "x",
                    w = u.modifiersData.popperOffsets,
                    x = u.rects.reference,
                    T = u.rects.popper,
                    d = "number" == typeof (d = "function" == typeof d ? d(Object.assign({}, u.rects, { placement: u.placement })) : d) ? { mainAxis: d, altAxis: d } : Object.assign({ mainAxis: 0, altAxis: 0 }, d),
                    E = u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null,
                    C = { x: 0, y: 0 };
                w &&
                    (f &&
                        ((f = "y" === b ? "height" : "width"),
                        (s = (a = w[b]) + p[(n = "y" === b ? k : D)]),
                        (l = a - p[(c = "y" === b ? S : O)]),
                        (t = y ? -T[f] / 2 : 0),
                        (r = (v === j ? x : T)[f]),
                        (v = v === j ? -T[f] : -x[f]),
                        (o = u.elements.arrow),
                        (o = y && o ? rt(o) : { width: 0, height: 0 }),
                        (n = (i = u.modifiersData["arrow#persistent"] ? u.modifiersData["arrow#persistent"].padding : dt())[n]),
                        (i = i[c]),
                        (c = ut(0, x[f], o[f])),
                        (o = m ? x[f] / 2 - t - c - n - d.mainAxis : r - c - n - d.mainAxis),
                        (r = m ? -x[f] / 2 + t + c + i + d.mainAxis : v + c + i + d.mainAxis),
                        (m = (n = u.elements.arrow && lt(u.elements.arrow)) ? ("y" === b ? n.clientTop || 0 : n.clientLeft || 0) : 0),
                        (v = a + r - (t = null != (f = null == E ? void 0 : E[b]) ? f : 0)),
                        (c = ut(y ? Ze(s, a + o - t - m) : s, a, y ? A(l, v) : l)),
                        (w[b] = c),
                        (C[b] = c - a)),
                    h &&
                        ((i = "y" == _ ? "height" : "width"),
                        (r = (n = w[_]) + p["x" === b ? k : D]),
                        (f = n - p["x" === b ? S : O]),
                        (o = -1 !== [k, D].indexOf(g)),
                        (m = null != (t = null == E ? void 0 : E[_]) ? t : 0),
                        (s = o ? r : n - x[i] - T[i] - m + d.altAxis),
                        (v = o ? n + x[i] + T[i] - m - d.altAxis : f),
                        (a = y && o ? ((l = ut((l = s), n, (c = v))), c < l ? c : l) : ut(y ? s : r, n, y ? v : f)),
                        (w[_] = a),
                        (C[_] = a - n)),
                    (u.modifiersData[e] = C));
            },
            requiresIfExists: ["offset"],
        };
        function Wt(e, t, n) {
            void 0 === n && (n = !1);
            var i = _(t),
                r = _(t) && ((s = (r = t).getBoundingClientRect()), (o = et(s.width) / r.offsetWidth || 1), (s = et(s.height) / r.offsetHeight || 1), 1 !== o || 1 !== s),
                o = x(t),
                s = it(e, r, n),
                e = { scrollLeft: 0, scrollTop: 0 },
                a = { x: 0, y: 0 };
            return (
                (!i && n) ||
                    (("body" === v(t) && !kt(o)) || (e = (i = t) !== b(i) && _(i) ? { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop } : Ct(i)), _(t) ? (((a = it(t, !0)).x += t.clientLeft), (a.y += t.clientTop)) : o && (a.x = At(o))),
                { x: s.left + e.scrollLeft - a.x, y: s.top + e.scrollTop - a.y, width: s.width, height: s.height }
            );
        }
        function Bt(e) {
            var n = new Map(),
                i = new Set(),
                r = [];
            return (
                e.forEach(function (e) {
                    n.set(e.name, e);
                }),
                e.forEach(function (e) {
                    i.has(e.name) ||
                        !(function t(e) {
                            i.add(e.name),
                                [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                                    i.has(e) || ((e = n.get(e)) && t(e));
                                }),
                                r.push(e);
                        })(e);
                }),
                r
            );
        }
        var $t = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function zt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some(function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect);
            });
        }
        function Vt(e) {
            var e = (e = void 0 === e ? {} : e),
                t = e.defaultModifiers,
                d = void 0 === t ? [] : t,
                t = e.defaultOptions,
                f = void 0 === t ? $t : t;
            return function (i, r, t) {
                void 0 === t && (t = f);
                var n,
                    o,
                    s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, $t, f), modifiersData: {}, elements: { reference: i, popper: r }, attributes: {}, styles: {} },
                    a = [],
                    l = !1,
                    c = {
                        state: s,
                        setOptions: function (e) {
                            var n,
                                t,
                                e = "function" == typeof e ? e(s.options) : e,
                                e =
                                    (u(),
                                    (s.options = Object.assign({}, f, s.options, e)),
                                    (s.scrollParents = { reference: y(i) ? St(i) : i.contextElement ? St(i.contextElement) : [], popper: St(r) }),
                                    (e = [].concat(d, s.options.modifiers)),
                                    (t = e.reduce(function (e, t) {
                                        var n = e[t.name];
                                        return (e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t), e;
                                    }, {})),
                                    (e = Object.keys(t).map(function (e) {
                                        return t[e];
                                    })),
                                    (n = Bt(e)),
                                    Ke.reduce(function (e, t) {
                                        return e.concat(
                                            n.filter(function (e) {
                                                return e.phase === t;
                                            })
                                        );
                                    }, []));
                            return (
                                (s.orderedModifiers = e.filter(function (e) {
                                    return e.enabled;
                                })),
                                s.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        n = e.options,
                                        e = e.effect;
                                    "function" == typeof e && ((e = e({ state: s, name: t, instance: c, options: void 0 === n ? {} : n })), a.push(e || function () {}));
                                }),
                                c.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!l) {
                                var e = s.elements,
                                    t = e.reference,
                                    e = e.popper;
                                if (zt(t, e)) {
                                    (s.rects = { reference: Wt(t, lt(e), "fixed" === s.options.strategy), popper: rt(e) }),
                                        (s.reset = !1),
                                        (s.placement = s.options.placement),
                                        s.orderedModifiers.forEach(function (e) {
                                            return (s.modifiersData[e.name] = Object.assign({}, e.data));
                                        });
                                    for (var n, i, r, o = 0; o < s.orderedModifiers.length; o++)
                                        !0 === s.reset
                                            ? ((s.reset = !1), (o = -1))
                                            : ((n = (r = s.orderedModifiers[o]).fn), (i = r.options), (r = r.name), "function" == typeof n && (s = n({ state: s, options: void 0 === i ? {} : i, name: r, instance: c }) || s));
                                }
                            }
                        },
                        update:
                            ((n = function () {
                                return new Promise(function (e) {
                                    c.forceUpdate(), e(s);
                                });
                            }),
                            function () {
                                return (o =
                                    o ||
                                    new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (o = void 0), e(n());
                                        });
                                    }));
                            }),
                        destroy: function () {
                            u(), (l = !0);
                        },
                    };
                return (
                    zt(i, r) &&
                        c.setOptions(t).then(function (e) {
                            !l && t.onFirstUpdate && t.onFirstUpdate(e);
                        }),
                    c
                );
                function u() {
                    a.forEach(function (e) {
                        return e();
                    }),
                        (a = []);
                }
            };
        }
        var Xt = Vt({ defaultModifiers: [_t, Ft, yt, Je, qt, Pt, Rt, pt, Ht] });
        const Ut = Object.freeze(
                Object.defineProperty(
                    {
                        __proto__: null,
                        afterMain: Ue,
                        afterRead: Ve,
                        afterWrite: Qe,
                        applyStyles: Je,
                        arrow: pt,
                        auto: He,
                        basePlacements: L,
                        beforeMain: Xe,
                        beforeRead: f,
                        beforeWrite: Ye,
                        bottom: S,
                        clippingParents: Fe,
                        computeStyles: yt,
                        createPopper: Xt,
                        createPopperBase: Vt(),
                        createPopperLite: Vt({ defaultModifiers: [_t, Ft, yt, Je] }),
                        detectOverflow: Nt,
                        end: qe,
                        eventListeners: _t,
                        flip: Pt,
                        hide: Ht,
                        left: D,
                        main: "main",
                        modifierPhases: Ke,
                        offset: qt,
                        placements: ze,
                        popper: We,
                        popperGenerator: Vt,
                        popperOffsets: Ft,
                        preventOverflow: Rt,
                        read: "read",
                        reference: Be,
                        right: O,
                        start: j,
                        top: k,
                        variationPlacements: $e,
                        viewport: Re,
                        write: "write",
                    },
                    Symbol.toStringTag,
                    { value: "Module" }
                )
            ),
            Yt = "dropdown";
        (Ue = ".bs.dropdown"), (Ve = ".data-api");
        const Qt = "ArrowDown";
        (Qe = "click" + Ue + Ve), (pt = "keydown" + Ue + Ve);
        const Kt = "show",
            T = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Gt = (T, ".dropdown-menu"),
            Jt = l() ? "top-end" : "top-start",
            Zt = l() ? "top-start" : "top-end",
            en = l() ? "bottom-end" : "bottom-start",
            tn = l() ? "bottom-start" : "bottom-end",
            nn = l() ? "left-start" : "right-start",
            rn = l() ? "right-start" : "left-start",
            on = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
            sn = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
        class E extends t {
            constructor(e, t) {
                super(e, t),
                    (this._popper = null),
                    (this._parent = this._element.parentNode),
                    (this._menu = d.next(this._element, Gt)[0] || d.prev(this._element, Gt)[0] || d.findOne(Gt, this._parent)),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return on;
            }
            static get DefaultType() {
                return sn;
            }
            static get NAME() {
                return Yt;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (!a(this._element) && !this._isShown()) {
                    var e = { relatedTarget: this._element },
                        t = g.trigger(this._element, "show.bs.dropdown", e);
                    if (!t.defaultPrevented) {
                        if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (const n of [].concat(...document.body.children)) g.on(n, "mouseover", B);
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Kt), this._element.classList.add(Kt), g.trigger(this._element, "shown.bs.dropdown", e);
                    }
                }
            }
            hide() {
                var e;
                !a(this._element) && this._isShown() && ((e = { relatedTarget: this._element }), this._completeHide(e));
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(e) {
                var t = g.trigger(this._element, "hide.bs.dropdown", e);
                if (!t.defaultPrevented) {
                    if ("ontouchstart" in document.documentElement) for (const n of [].concat(...document.body.children)) g.off(n, "mouseover", B);
                    this._popper && this._popper.destroy(),
                        this._menu.classList.remove(Kt),
                        this._element.classList.remove(Kt),
                        this._element.setAttribute("aria-expanded", "false"),
                        u.removeDataAttribute(this._menu, "popper"),
                        g.trigger(this._element, "hidden.bs.dropdown", e);
                }
            }
            _getConfig(e) {
                if ("object" != typeof (e = super._getConfig(e)).reference || o(e.reference) || "function" == typeof e.reference.getBoundingClientRect) return e;
                throw new TypeError(Yt.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            }
            _createPopper() {
                if (void 0 === Ut) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let e = this._element;
                "parent" === this._config.reference ? (e = this._parent) : o(this._config.reference) ? (e = r(this._config.reference)) : "object" == typeof this._config.reference && (e = this._config.reference);
                var t = this._getPopperConfig();
                this._popper = Xt(e, this._menu, t);
            }
            _isShown() {
                return this._menu.classList.contains(Kt);
            }
            _getPlacement() {
                var e,
                    t = this._parent;
                return t.classList.contains("dropend")
                    ? nn
                    : t.classList.contains("dropstart")
                    ? rn
                    : t.classList.contains("dropup-center")
                    ? "top"
                    : t.classList.contains("dropdown-center")
                    ? "bottom"
                    : ((e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()), t.classList.contains("dropup") ? (e ? Zt : Jt) : e ? tn : en);
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                const t = this._config["offset"];
                return "string" == typeof t ? t.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
            }
            _getPopperConfig() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "offset", options: { offset: this._getOffset() } },
                    ],
                };
                return (!this._inNavbar && "static" !== this._config.display) || (u.setDataAttribute(this._menu, "popper", "static"), (e.modifiers = [{ name: "applyStyles", enabled: !1 }])), { ...e, ...c(this._config.popperConfig, [e]) };
            }
            _selectMenuItem({ key: e, target: t }) {
                var n = d.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e) => s(e));
                n.length && U(n, t, e === Qt, !n.includes(t)).focus();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = E.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
            static clearMenus(e) {
                if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
                    for (const r of d.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show')) {
                        var t,
                            n,
                            i = E.getInstance(r);
                        i &&
                            !1 !== i._config.autoClose &&
                            ((t = (n = e.composedPath()).includes(i._menu)),
                            n.includes(i._element) ||
                                ("inside" === i._config.autoClose && !t) ||
                                ("outside" === i._config.autoClose && t) ||
                                (i._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName))) ||
                                ((n = { relatedTarget: i._element }), "click" === e.type && (n.clickEvent = e), i._completeHide(n)));
                    }
            }
            static dataApiKeydownHandler(e) {
                var t = /input|textarea/i.test(e.target.tagName),
                    n = "Escape" === e.key,
                    i = ["ArrowUp", Qt].includes(e.key);
                (!i && !n) ||
                    (t && !n) ||
                    (e.preventDefault(),
                    (t = this.matches(T) ? this : d.prev(this, T)[0] || d.next(this, T)[0] || d.findOne(T, e.delegateTarget.parentNode)),
                    (n = E.getOrCreateInstance(t)),
                    i ? (e.stopPropagation(), n.show(), n._selectMenuItem(e)) : n._isShown() && (e.stopPropagation(), n.hide(), t.focus()));
            }
        }
        g.on(document, pt, T, E.dataApiKeydownHandler),
            g.on(document, pt, Gt, E.dataApiKeydownHandler),
            g.on(document, Qe, E.clearMenus),
            g.on(document, "keyup.bs.dropdown.data-api", E.clearMenus),
            g.on(document, Qe, T, function (e) {
                e.preventDefault(), E.getOrCreateInstance(this).toggle();
            }),
            e(E);
        const an = "backdrop",
            ln = "mousedown.bs." + an,
            cn = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
            un = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
        class dn extends de {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
            }
            static get Default() {
                return cn;
            }
            static get DefaultType() {
                return un;
            }
            static get NAME() {
                return an;
            }
            show(e) {
                var t;
                this._config.isVisible
                    ? (this._append(),
                      (t = this._getElement()),
                      this._config.isAnimated && $(t),
                      t.classList.add("show"),
                      this._emulateAnimation(() => {
                          c(e);
                      }))
                    : c(e);
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove("show"),
                      this._emulateAnimation(() => {
                          this.dispose(), c(e);
                      }))
                    : c(e);
            }
            dispose() {
                this._isAppended && (g.off(this._element, ln), this._element.remove(), (this._isAppended = !1));
            }
            _getElement() {
                var e;
                return this._element || (((e = document.createElement("div")).className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e)), this._element;
            }
            _configAfterMerge(e) {
                return (e.rootElement = r(e.rootElement)), e;
            }
            _append() {
                var e;
                this._isAppended ||
                    ((e = this._getElement()),
                    this._config.rootElement.append(e),
                    g.on(e, ln, () => {
                        c(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
            }
            _emulateAnimation(e) {
                X(e, this._getElement(), this._config.isAnimated);
            }
        }
        const fn = ".bs.focustrap",
            hn = (fn, fn, "backward"),
            pn = { autofocus: !0, trapElement: null },
            gn = { autofocus: "boolean", trapElement: "element" };
        class mn extends de {
            constructor(e) {
                super(), (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            static get Default() {
                return pn;
            }
            static get DefaultType() {
                return gn;
            }
            static get NAME() {
                return "focustrap";
            }
            activate() {
                this._isActive ||
                    (this._config.autofocus && this._config.trapElement.focus(),
                    g.off(document, fn),
                    g.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
                    g.on(document, "keydown.tab.bs.focustrap", (e) => this._handleKeydown(e)),
                    (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), g.off(document, fn));
            }
            _handleFocusin(e) {
                var t = this._config["trapElement"];
                e.target === document || e.target === t || t.contains(e.target) || (0 === (e = d.focusableChildren(t)).length ? t : this._lastTabNavDirection === hn ? e[e.length - 1] : e[0]).focus();
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? hn : "forward");
            }
        }
        const vn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            yn = ".sticky-top",
            bn = "padding-right",
            _n = "margin-right";
        class wn {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                var e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                const t = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, bn, (e) => e + t), this._setElementAttributes(vn, bn, (e) => e + t), this._setElementAttributes(yn, _n, (e) => e - t);
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, bn), this._resetElementAttributes(vn, bn), this._resetElementAttributes(yn, _n);
            }
            isOverflowing() {
                return 0 < this.getWidth();
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, n, i) {
                const r = this.getWidth();
                this._applyManipulationCallback(e, (e) => {
                    var t;
                    (e !== this._element && window.innerWidth > e.clientWidth + r) || (this._saveInitialAttribute(e, n), (t = window.getComputedStyle(e).getPropertyValue(n)), e.style.setProperty(n, i(Number.parseFloat(t)) + "px"));
                });
            }
            _saveInitialAttribute(e, t) {
                var n = e.style.getPropertyValue(t);
                n && u.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, n) {
                this._applyManipulationCallback(e, (e) => {
                    var t = u.getDataAttribute(e, n);
                    null === t ? e.style.removeProperty(n) : (u.removeDataAttribute(e, n), e.style.setProperty(n, t));
                });
            }
            _applyManipulationCallback(e, t) {
                if (o(e)) t(e);
                else for (const n of d.find(e, this._element)) t(n);
            }
        }
        const C = ".bs.modal";
        C, C;
        const xn = "hidden" + C,
            Tn = "show" + C;
        C, C, C, C, C;
        C;
        const En = "modal-open",
            Cn = "modal-static";
        const An = { backdrop: !0, focus: !0, keyboard: !0 },
            kn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
        class Sn extends t {
            constructor(e, t) {
                super(e, t),
                    (this._dialog = d.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new wn()),
                    this._addEventListeners();
            }
            static get Default() {
                return An;
            }
            static get DefaultType() {
                return kn;
            }
            static get NAME() {
                return "modal";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    this._isTransitioning ||
                    g.trigger(this._element, Tn, { relatedTarget: e }).defaultPrevented ||
                    ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(En), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
                !this._isShown ||
                    this._isTransitioning ||
                    g.trigger(this._element, "hide.bs.modal").defaultPrevented ||
                    ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove("show"), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
            }
            dispose() {
                g.off(window, C), g.off(this._dialog, C), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new dn({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new mn({ trapElement: this._element });
            }
            _showElement(e) {
                document.body.contains(this._element) || document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0);
                var t = d.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0), $(this._element), this._element.classList.add("show");
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), g.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
                    },
                    this._dialog,
                    this._isAnimated()
                );
            }
            _addEventListeners() {
                g.on(this._element, "keydown.dismiss.bs.modal", (e) => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
                }),
                    g.on(window, "resize.bs.modal", () => {
                        this._isShown && !this._isTransitioning && this._adjustDialog();
                    }),
                    g.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
                        g.one(this._element, "click.dismiss.bs.modal", (e) => {
                            this._element === t.target && this._element === e.target && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this._config.backdrop && this.hide());
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(En), this._resetAdjustments(), this._scrollBar.reset(), g.trigger(this._element, xn);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                var e = g.trigger(this._element, "hidePrevented.bs.modal");
                if (!e.defaultPrevented) {
                    e = this._element.scrollHeight > document.documentElement.clientHeight;
                    const t = this._element.style.overflowY;
                    "hidden" === t ||
                        this._element.classList.contains(Cn) ||
                        (e || (this._element.style.overflowY = "hidden"),
                        this._element.classList.add(Cn),
                        this._queueCallback(() => {
                            this._element.classList.remove(Cn),
                                this._queueCallback(() => {
                                    this._element.style.overflowY = t;
                                }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
            }
            _adjustDialog() {
                var e,
                    t = this._element.scrollHeight > document.documentElement.clientHeight,
                    n = this._scrollBar.getWidth(),
                    i = 0 < n;
                i && !t && ((e = l() ? "paddingLeft" : "paddingRight"), (this._element.style[e] = n + "px")), !i && t && ((e = l() ? "paddingRight" : "paddingLeft"), (this._element.style[e] = n + "px"));
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }
            static jQueryInterface(t, n) {
                return this.each(function () {
                    var e = Sn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t](n);
                    }
                });
            }
        }
        g.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
            const t = d.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                g.one(t, Tn, (e) => {
                    e.defaultPrevented ||
                        g.one(t, xn, () => {
                            s(this) && this.focus();
                        });
                });
            e = d.findOne(".modal.show");
            e && Sn.getInstance(e).hide(), Sn.getOrCreateInstance(t).toggle(this);
        }),
            he(Sn),
            e(Sn);
        Xe = ".bs.offcanvas";
        const On = "showing",
            Dn = ".offcanvas.show",
            Ln = "hidePrevented" + Xe,
            jn = "hidden" + Xe;
        const Nn = { backdrop: !0, keyboard: !0, scroll: !1 },
            Pn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
        class P extends t {
            constructor(e, t) {
                super(e, t), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
            }
            static get Default() {
                return Nn;
            }
            static get DefaultType() {
                return Pn;
            }
            static get NAME() {
                return "offcanvas";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    g.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented ||
                    ((this._isShown = !0),
                    this._backdrop.show(),
                    this._config.scroll || new wn().hide(),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(On),
                    this._queueCallback(
                        () => {
                            (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                                this._element.classList.add("show"),
                                this._element.classList.remove(On),
                                g.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e });
                        },
                        this._element,
                        !0
                    ));
            }
            hide() {
                this._isShown &&
                    !g.trigger(this._element, "hide.bs.offcanvas").defaultPrevented &&
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add("hiding"),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove("show", "hiding"), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new wn().reset(), g.trigger(this._element, jn);
                        },
                        this._element,
                        !0
                    ));
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _initializeBackDrop() {
                var e = Boolean(this._config.backdrop);
                return new dn({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e
                        ? () => {
                              "static" === this._config.backdrop ? g.trigger(this._element, Ln) : this.hide();
                          }
                        : null,
                });
            }
            _initializeFocusTrap() {
                return new mn({ trapElement: this._element });
            }
            _addEventListeners() {
                g.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : g.trigger(this._element, Ln));
                });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = P.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        g.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
            var t = d.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                a(this) ||
                    (g.one(t, jn, () => {
                        s(this) && this.focus();
                    }),
                    (e = d.findOne(Dn)) && e !== t && P.getInstance(e).hide(),
                    P.getOrCreateInstance(t).toggle(this));
        }),
            g.on(window, "load.bs.offcanvas.data-api", () => {
                for (const e of d.find(Dn)) P.getOrCreateInstance(e).show();
            }),
            g.on(window, "resize.bs.offcanvas", () => {
                for (const e of d.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && P.getOrCreateInstance(e).hide();
            }),
            he(P),
            e(P);
        f = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        };
        const In = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            Mn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
        function Hn(e, t, n) {
            if (!e.length) return e;
            if (n && "function" == typeof n) return n(e);
            n = new window.DOMParser().parseFromString(e, "text/html");
            for (const s of [].concat(...n.body.querySelectorAll("*"))) {
                var i = s.nodeName.toLowerCase();
                if (Object.keys(t).includes(i)) {
                    var r = [].concat(...s.attributes),
                        o = [].concat(t["*"] || [], t[i] || []);
                    for (const a of r)
                        ((e, t) => {
                            const n = e.nodeName.toLowerCase();
                            return t.includes(n) ? !In.has(n) || Boolean(Mn.test(e.nodeValue)) : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
                        })(a, o) || s.removeAttribute(a.nodeName);
                } else s.remove();
            }
            return n.body.innerHTML;
        }
        const qn = { allowList: f, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
            Fn = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
            Rn = { entry: "(string|element|function|null)", selector: "(string|element)" };
        class Wn extends de {
            constructor(e) {
                super(), (this._config = this._getConfig(e));
            }
            static get Default() {
                return qn;
            }
            static get DefaultType() {
                return Fn;
            }
            static get NAME() {
                return "TemplateFactory";
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((e) => this._resolvePossibleFunction(e))
                    .filter(Boolean);
            }
            hasContent() {
                return 0 < this.getContent().length;
            }
            changeContent(e) {
                return this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this;
            }
            toHtml() {
                var e,
                    t,
                    n = document.createElement("div");
                n.innerHTML = this._maybeSanitize(this._config.template);
                for ([e, t] of Object.entries(this._config.content)) this._setContent(n, t, e);
                var i = n.children[0],
                    r = this._resolvePossibleFunction(this._config.extraClass);
                return r && i.classList.add(...r.split(" ")), i;
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
                for (var [t, n] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: n }, Rn);
            }
            _setContent(e, t, n) {
                n = d.findOne(n, e);
                n && ((t = this._resolvePossibleFunction(t)) ? (o(t) ? this._putElementInTemplate(r(t), n) : this._config.html ? (n.innerHTML = this._maybeSanitize(t)) : (n.textContent = t)) : n.remove());
            }
            _maybeSanitize(e) {
                return this._config.sanitize ? Hn(e, this._config.allowList, this._config.sanitizeFn) : e;
            }
            _resolvePossibleFunction(e) {
                return c(e, [this]);
            }
            _putElementInTemplate(e, t) {
                this._config.html ? ((t.innerHTML = ""), t.append(e)) : (t.textContent = e.textContent);
            }
        }
        const Bn = new Set(["sanitize", "allowList", "sanitizeFn"]),
            $n = "fade";
        const zn = "show",
            Vn = "hide.bs.modal",
            Xn = "hover",
            Un = "focus",
            Yn = { AUTO: "auto", TOP: "top", RIGHT: l() ? "left" : "right", BOTTOM: "bottom", LEFT: l() ? "right" : "left" },
            Qn = {
                allowList: f,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus",
            },
            Kn = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
            };
        class Gn extends t {
            constructor(e, t) {
                if (void 0 === Ut) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(e, t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._isHovered = null),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._templateFactory = null),
                    (this._newContent = null),
                    (this.tip = null),
                    this._setListeners(),
                    this._config.selector || this._fixTitle();
            }
            static get Default() {
                return Qn;
            }
            static get DefaultType() {
                return Kn;
            }
            static get NAME() {
                return "tooltip";
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
                clearTimeout(this._timeout),
                    g.off(this._element.closest(".modal"), Vn, this._hideModalHandler),
                    this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (this._isWithContent() && this._isEnabled) {
                    var e = g.trigger(this._element, this.constructor.eventName("show")),
                        t = (W(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                    if (!e.defaultPrevented && t) {
                        this._disposePopper();
                        (e = this._getTipElement()), (t = (this._element.setAttribute("aria-describedby", e.getAttribute("id")), this._config)["container"]);
                        if (
                            (this._element.ownerDocument.documentElement.contains(this.tip) || (t.append(e), g.trigger(this._element, this.constructor.eventName("inserted"))),
                            (this._popper = this._createPopper(e)),
                            e.classList.add(zn),
                            "ontouchstart" in document.documentElement)
                        )
                            for (const n of [].concat(...document.body.children)) g.on(n, "mouseover", B);
                        this._queueCallback(
                            () => {
                                g.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                            },
                            this.tip,
                            this._isAnimated()
                        );
                    }
                }
            }
            hide() {
                if (this._isShown()) {
                    var e = g.trigger(this._element, this.constructor.eventName("hide"));
                    if (!e.defaultPrevented) {
                        if ((this._getTipElement().classList.remove(zn), "ontouchstart" in document.documentElement)) for (const t of [].concat(...document.body.children)) g.off(t, "mouseover", B);
                        (this._activeTrigger.click = !1), (this._activeTrigger[Un] = !1), (this._activeTrigger[Xn] = !1), (this._isHovered = null);
                        this._queueCallback(
                            () => {
                                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), g.trigger(this._element, this.constructor.eventName("hidden")));
                            },
                            this.tip,
                            this._isAnimated()
                        );
                    }
                }
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return Boolean(this._getTitle());
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
            }
            _createTipElement(e) {
                e = this._getTemplateFactory(e).toHtml();
                if (!e) return null;
                e.classList.remove($n, zn), e.classList.add(`bs-${this.constructor.NAME}-auto`);
                var t = ((e) => {
                    for (; (e += Math.floor(1e6 * Math.random())), document.getElementById(e); );
                    return e;
                })(this.constructor.NAME).toString();
                return e.setAttribute("id", t), this._isAnimated() && e.classList.add($n), e;
            }
            setContent(e) {
                (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
                return (
                    this._templateFactory ? this._templateFactory.changeContent(e) : (this._templateFactory = new Wn({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) })),
                    this._templateFactory
                );
            }
            _getContentForTemplate() {
                return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
            }
            _isAnimated() {
                return this._config.animation || (this.tip && this.tip.classList.contains($n));
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(zn);
            }
            _createPopper(e) {
                var t = c(this._config.placement, [this, e, this._element]),
                    t = Yn[t.toUpperCase()];
                return Xt(this._element, e, this._getPopperConfig(t));
            }
            _getOffset() {
                const t = this._config["offset"];
                return "string" == typeof t ? t.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof t ? (e) => t(e, this._element) : t;
            }
            _resolvePossibleFunction(e) {
                return c(e, [this._element]);
            }
            _getPopperConfig(e) {
                e = {
                    placement: e,
                    modifiers: [
                        { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: "offset", options: { offset: this._getOffset() } },
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                        {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: (e) => {
                                this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
                            },
                        },
                    ],
                };
                return { ...e, ...c(this._config.popperConfig, [e]) };
            }
            _setListeners() {
                var e, t;
                for (const n of this._config.trigger.split(" "))
                    "click" === n
                        ? g.on(this._element, this.constructor.eventName("click"), this._config.selector, (e) => {
                              this._initializeOnDelegatedTarget(e).toggle();
                          })
                        : "manual" !== n &&
                          ((e = n === Xn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")),
                          (t = n === Xn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout")),
                          g.on(this._element, e, this._config.selector, (e) => {
                              var t = this._initializeOnDelegatedTarget(e);
                              (t._activeTrigger["focusin" === e.type ? Un : Xn] = !0), t._enter();
                          }),
                          g.on(this._element, t, this._config.selector, (e) => {
                              var t = this._initializeOnDelegatedTarget(e);
                              (t._activeTrigger["focusout" === e.type ? Un : Xn] = t._element.contains(e.relatedTarget)), t._leave();
                          }));
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    g.on(this._element.closest(".modal"), Vn, this._hideModalHandler);
            }
            _fixTitle() {
                var e = this._element.getAttribute("title");
                e &&
                    (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("data-bs-original-title", e),
                    this._element.removeAttribute("title"));
            }
            _enter() {
                this._isShown() || this._isHovered
                    ? (this._isHovered = !0)
                    : ((this._isHovered = !0),
                      this._setTimeout(() => {
                          this._isHovered && this.show();
                      }, this._config.delay.show));
            }
            _leave() {
                this._isWithActiveTrigger() ||
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
                var t = u.getDataAttributes(this._element);
                for (const n of Object.keys(t)) Bn.has(n) && delete t[n];
                return (e = { ...t, ...("object" == typeof e && e ? e : {}) }), (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
            }
            _configAfterMerge(e) {
                return (
                    (e.container = !1 === e.container ? document.body : r(e.container)),
                    "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title && (e.title = e.title.toString()),
                    "number" == typeof e.content && (e.content = e.content.toString()),
                    e
                );
            }
            _getDelegateConfig() {
                var e,
                    t,
                    n = {};
                for ([e, t] of Object.entries(this._config)) this.constructor.Default[e] !== t && (n[e] = t);
                return (n.selector = !1), (n.trigger = "manual"), n;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = Gn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(Gn);
        const Jn = {
                ...Gn.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click",
            },
            Zn = { ...Gn.DefaultType, content: "(null|string|element|function)" };
        class ei extends Gn {
            static get Default() {
                return Jn;
            }
            static get DefaultType() {
                return Zn;
            }
            static get NAME() {
                return "popover";
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = ei.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(ei);
        Ye = ".bs.scrollspy";
        const ti = "click" + Ye;
        const ni = "active",
            ii = "[href]";
        const ri = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
            oi = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
        class si extends t {
            constructor(e, t) {
                super(e, t),
                    (this._targetLinks = new Map()),
                    (this._observableSections = new Map()),
                    (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                    (this._activeTarget = null),
                    (this._observer = null),
                    (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                    this.refresh();
            }
            static get Default() {
                return ri;
            }
            static get DefaultType() {
                return oi;
            }
            static get NAME() {
                return "scrollspy";
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
                for (const e of this._observableSections.values()) this._observer.observe(e);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
                return (
                    (e.target = r(e.target) || document.body), (e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin), "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e
                );
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (g.off(this._config.target, ti),
                    g.on(this._config.target, ti, ii, (e) => {
                        var t = this._observableSections.get(e.target.hash);
                        t && (e.preventDefault(), (e = this._rootElement || window), (t = t.offsetTop - this._element.offsetTop), e.scrollTo ? e.scrollTo({ top: t, behavior: "smooth" }) : (e.scrollTop = t));
                    }));
            }
            _getNewObserver() {
                var e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
                return new IntersectionObserver((e) => this._observerCallback(e), e);
            }
            _observerCallback(e) {
                const t = (e) => this._targetLinks.get("#" + e.target.id);
                var n = (e) => {
                        (this._previousScrollData.visibleEntryTop = e.target.offsetTop), this._process(t(e));
                    },
                    i = (this._rootElement || document.documentElement).scrollTop,
                    r = i >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = i;
                for (const s of e)
                    if (s.isIntersecting) {
                        var o = s.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                        if (r && o) {
                            if ((n(s), i)) continue;
                            return;
                        }
                        r || o || n(s);
                    } else (this._activeTarget = null), this._clearActiveClass(t(s));
            }
            _initializeTargetsAndObservables() {
                var e;
                (this._targetLinks = new Map()), (this._observableSections = new Map());
                for (const t of d.find(ii, this._config.target)) t.hash && !a(t) && ((e = d.findOne(decodeURI(t.hash), this._element)), s(e)) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e));
            }
            _process(e) {
                this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e).classList.add(ni), this._activateParents(e), g.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: e }));
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) d.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(ni);
                else for (const t of d.parents(e, ".nav, .list-group")) for (const n of d.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) n.classList.add(ni);
            }
            _clearActiveClass(e) {
                e.classList.remove(ni);
                for (const t of d.find(ii + "." + ni, e)) t.classList.remove(ni);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = si.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(window, "load.bs.scrollspy.data-api", () => {
            for (const e of d.find('[data-bs-spy="scroll"]')) si.getOrCreateInstance(e);
        }),
            e(si);
        const ai = "ArrowRight",
            li = "ArrowDown",
            I = "active",
            ci = "show";
        yt = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
        const ui = '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' + yt;
        I, I, I;
        class di extends t {
            constructor(e) {
                super(e),
                    (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),
                    this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), g.on(this._element, "keydown.bs.tab", (e) => this._keydown(e)));
            }
            static get NAME() {
                return "tab";
            }
            show() {
                var e,
                    t,
                    n = this._element;
                this._elemIsActive(n) ||
                    ((t = (e = this._getActiveElem()) ? g.trigger(e, "hide.bs.tab", { relatedTarget: n }) : null), g.trigger(n, "show.bs.tab", { relatedTarget: e }).defaultPrevented) ||
                    (t && t.defaultPrevented) ||
                    (this._deactivate(e, n), this._activate(n, e));
            }
            _activate(e, t) {
                e &&
                    (e.classList.add(I),
                    this._activate(d.getElementFromSelector(e)),
                    this._queueCallback(
                        () => {
                            "tab" !== e.getAttribute("role") ? e.classList.add(ci) : (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), g.trigger(e, "shown.bs.tab", { relatedTarget: t }));
                        },
                        e,
                        e.classList.contains("fade")
                    ));
            }
            _deactivate(e, t) {
                e &&
                    (e.classList.remove(I),
                    e.blur(),
                    this._deactivate(d.getElementFromSelector(e)),
                    this._queueCallback(
                        () => {
                            "tab" !== e.getAttribute("role")
                                ? e.classList.remove(ci)
                                : (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), g.trigger(e, "hidden.bs.tab", { relatedTarget: t }));
                        },
                        e,
                        e.classList.contains("fade")
                    ));
            }
            _keydown(e) {
                var t;
                ["ArrowLeft", ai, "ArrowUp", li].includes(e.key) &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (t = [ai, li].includes(e.key)),
                    (e = U(
                        this._getChildren().filter((e) => !a(e)),
                        e.target,
                        t,
                        !0
                    ))) &&
                    (e.focus({ preventScroll: !0 }), di.getOrCreateInstance(e).show());
            }
            _getChildren() {
                return d.find(ui, this._parent);
            }
            _getActiveElem() {
                return this._getChildren().find((e) => this._elemIsActive(e)) || null;
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, "role", "tablist");
                for (const n of t) this._setInitialAttributesOnChild(n);
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                var t = this._elemIsActive(e),
                    n = this._getOuterElement(e);
                e.setAttribute("aria-selected", t),
                    n !== e && this._setAttributeIfNotExists(n, "role", "presentation"),
                    t || e.setAttribute("tabindex", "-1"),
                    this._setAttributeIfNotExists(e, "role", "tab"),
                    this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
                var t = d.getElementFromSelector(e);
                t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id) && this._setAttributeIfNotExists(t, "aria-labelledby", "" + e.id);
            }
            _toggleDropDown(e, n) {
                const i = this._getOuterElement(e);
                i.classList.contains("dropdown") &&
                    ((e = (e, t) => {
                        e = d.findOne(e, i);
                        e && e.classList.toggle(t, n);
                    })(".dropdown-toggle", I),
                    e(".dropdown-menu", ci),
                    i.setAttribute("aria-expanded", n));
            }
            _setAttributeIfNotExists(e, t, n) {
                e.hasAttribute(t) || e.setAttribute(t, n);
            }
            _elemIsActive(e) {
                return e.classList.contains(I);
            }
            _getInnerElement(e) {
                return e.matches(ui) ? e : d.findOne(ui, e);
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = di.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        g.on(document, "click.bs.tab", yt, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), a(this) || di.getOrCreateInstance(this).show();
        }),
            g.on(window, "load.bs.tab", () => {
                for (const e of d.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) di.getOrCreateInstance(e);
            }),
            e(di);
        const fi = "show",
            hi = "showing",
            pi = { animation: "boolean", autohide: "boolean", delay: "number" },
            gi = { animation: !0, autohide: !0, delay: 5e3 };
        class mi extends t {
            constructor(e, t) {
                super(e, t), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
            }
            static get Default() {
                return gi;
            }
            static get DefaultType() {
                return pi;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                g.trigger(this._element, "show.bs.toast").defaultPrevented ||
                    (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove("hide"),
                    $(this._element),
                    this._element.classList.add(fi, hi),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(hi), g.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            hide() {
                this.isShown() &&
                    !g.trigger(this._element, "hide.bs.toast").defaultPrevented &&
                    (this._element.classList.add(hi),
                    this._queueCallback(
                        () => {
                            this._element.classList.add("hide"), this._element.classList.remove(hi, fi), g.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(fi), super.dispose();
            }
            isShown() {
                return this._element.classList.contains(fi);
            }
            _maybeScheduleHide() {
                !this._config.autohide ||
                    this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                t ? this._clearTimeout() : ((e = e.relatedTarget), this._element === e || this._element.contains(e) || this._maybeScheduleHide());
            }
            _setListeners() {
                g.on(this._element, "mouseover.bs.toast", (e) => this._onInteraction(e, !0)),
                    g.on(this._element, "mouseout.bs.toast", (e) => this._onInteraction(e, !1)),
                    g.on(this._element, "focusin.bs.toast", (e) => this._onInteraction(e, !0)),
                    g.on(this._element, "focusout.bs.toast", (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    var e = mi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        return he(mi), e(mi), { Alert: pe, Button: me, Carousel: De, Collapse: Me, Dropdown: E, Modal: Sn, Offcanvas: P, Popover: ei, ScrollSpy: si, Tab: di, Toast: mi, Tooltip: Gn };
    });
