!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).noUiSlider = {}));
})(this, function (ot) {
    "use strict";
    function n(t) {
        return "object" == typeof t && "function" == typeof t.to;
    }
    function st(t) {
        t.parentElement.removeChild(t);
    }
    function at(t) {
        return null != t;
    }
    function lt(t) {
        t.preventDefault();
    }
    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t);
    }
    function ut(t, e, r) {
        0 < r &&
            (dt(t, e),
            setTimeout(function () {
                ft(t, e);
            }, r));
    }
    function ct(t) {
        return Math.max(Math.min(t, 100), 0);
    }
    function pt(t) {
        return Array.isArray(t) ? t : [t];
    }
    function e(t) {
        return 1 < (t = (t = String(t)).split(".")).length ? t[1].length : 0;
    }
    function dt(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.add(e) : (t.className += " " + e);
    }
    function ft(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.remove(e) : (t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
    function ht(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return { x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft, y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop };
    }
    function s(t, e) {
        return 100 / (e - t);
    }
    function a(t, e, r) {
        return (100 * e) / (t[r + 1] - t[r]);
    }
    function l(t, e) {
        for (var r = 1; t >= e[r]; ) r += 1;
        return r;
    }
    (ot.PipsMode = void 0),
        ((E = ot.PipsMode || (ot.PipsMode = {})).Range = "range"),
        (E.Steps = "steps"),
        (E.Positions = "positions"),
        (E.Count = "count"),
        (E.Values = "values"),
        (ot.PipsType = void 0),
        ((E = ot.PipsType || (ot.PipsType = {}))[(E.None = -1)] = "None"),
        (E[(E.NoValue = 0)] = "NoValue"),
        (E[(E.LargeValue = 1)] = "LargeValue"),
        (E[(E.SmallValue = 2)] = "SmallValue");
    (t.prototype.getDistance = function (t) {
        for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++) e[r] = a(this.xVal, t, r);
        return e;
    }),
        (t.prototype.getAbsoluteDistance = function (t, e, r) {
            var n = 0;
            if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[n + 1]; ) n++;
            else t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
            r || t !== this.xPct[n + 1] || n++;
            for (var i, o = 1, s = (e = null === e ? [] : e)[n], a = 0, l = 0, u = 0, c = r ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]); 0 < s; )
                (i = this.xPct[n + 1 + u] - this.xPct[n + u]),
                    100 < e[n + u] * o + 100 - 100 * c ? ((a = i * c), (o = (s - 100 * c) / e[n + u]), (c = 1)) : ((a = ((e[n + u] * i) / 100) * o), (o = 0)),
                    r ? ((l -= a), 1 <= this.xPct.length + u && u--) : ((l += a), 1 <= this.xPct.length - u && u++),
                    (s = e[n + u] * o);
            return t + l;
        }),
        (t.prototype.toStepping = function (t) {
            return (e = this.xVal), (r = this.xPct), (t = t) >= e.slice(-1)[0] ? 100 : ((n = e[(o = l(t, e)) - 1]), (i = e[o]), (e = r[o - 1]), (o = r[o]), e + a((i = [n, i]), i[0] < 0 ? t + Math.abs(i[0]) : t - i[0], 0) / s(e, o));
            var e, r, n, i, o;
        }),
        (t.prototype.fromStepping = function (t) {
            return (e = this.xVal), (r = this.xPct), 100 <= (t = t) ? e.slice(-1)[0] : ((n = e[(o = l(t, r)) - 1]), (i = e[o]), ((t - (e = r[o - 1])) * s(e, (o = r[o])) * ((i = [n, i])[1] - i[0])) / 100 + i[0]);
            var e, r, n, i, o;
        }),
        (t.prototype.getStep = function (t) {
            return (
                (e = this.xPct),
                (r = this.xSteps),
                (n = this.snap),
                100 === (t = t) ? t : ((o = e[(i = l(t, e)) - 1]), (s = e[i]), n ? ((s - o) / 2 < t - o ? s : o) : r[i - 1] ? e[i - 1] + ((e = t - e[i - 1]), (i = r[i - 1]), Math.round(e / i) * i) : t)
            );
            var e, r, n, i, o, s;
        }),
        (t.prototype.getDefaultStep = function (t, e, r) {
            var n = l(t, this.xPct);
            return (100 === t || (e && t === this.xPct[n - 1])) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
        }),
        (t.prototype.getNearbySteps = function (t) {
            return (
                (t = l(t, this.xPct)),
                {
                    stepBefore: { startValue: this.xVal[t - 2], step: this.xNumSteps[t - 2], highestStep: this.xHighestCompleteStep[t - 2] },
                    thisStep: { startValue: this.xVal[t - 1], step: this.xNumSteps[t - 1], highestStep: this.xHighestCompleteStep[t - 1] },
                    stepAfter: { startValue: this.xVal[t], step: this.xNumSteps[t], highestStep: this.xHighestCompleteStep[t] },
                }
            );
        }),
        (t.prototype.countStepDecimals = function () {
            var t = this.xNumSteps.map(e);
            return Math.max.apply(null, t);
        }),
        (t.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        }),
        (t.prototype.convert = function (t) {
            return this.getStep(this.toStepping(t));
        }),
        (t.prototype.handleEntryPoint = function (t, e) {
            if (!i((t = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) || !i(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            this.xPct.push(t), this.xVal.push(e[0]), (e = Number(e[1])), t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e), this.xHighestCompleteStep.push(0);
        }),
        (t.prototype.handleStepPoint = function (t, e) {
            e &&
                (this.xVal[t] !== this.xVal[t + 1]
                    ? ((this.xSteps[t] = a([this.xVal[t], this.xVal[t + 1]], e, 0) / s(this.xPct[t], this.xPct[t + 1])),
                      (e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t]),
                      (e = Math.ceil(Number(e.toFixed(3)) - 1)),
                      (e = this.xVal[t] + this.xNumSteps[t] * e),
                      (this.xHighestCompleteStep[t] = e))
                    : (this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t]));
        });
    var r = t;
    function t(e, t, r) {
        (this.xPct = []), (this.xVal = []), (this.xSteps = []), (this.xNumSteps = []), (this.xHighestCompleteStep = []), (this.xSteps = [r || !1]), (this.xNumSteps = [!1]), (this.snap = t);
        var n,
            i = [];
        for (
            Object.keys(e).forEach(function (t) {
                i.push([pt(e[t]), t]);
            }),
                i.sort(function (t, e) {
                    return t[0][0] - e[0][0];
                }),
                n = 0;
            n < i.length;
            n++
        )
            this.handleEntryPoint(i[n][1], i[n][0]);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n]);
    }
    var u = {
            to: function (t) {
                return void 0 === t ? "" : t.toFixed(2);
            },
            from: Number,
        },
        c = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub",
        },
        mt = { tooltips: ".__tooltips", aria: ".__aria" };
    function p(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
        t.singleStep = e;
    }
    function d(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        t.keyboardPageMultiplier = e;
    }
    function f(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        t.keyboardMultiplier = e;
    }
    function h(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        t.keyboardDefaultStep = e;
    }
    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        t.spectrum = new r(e, t.snap || !1, t.singleStep);
    }
    function g(t, e) {
        if (((e = pt(e)), !Array.isArray(e) || !e.length)) throw new Error("noUiSlider: 'start' option is incorrect.");
        (t.handles = e.length), (t.start = e);
    }
    function b(t, e) {
        if ("boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.");
        t.snap = e;
    }
    function v(t, e) {
        if ("boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.");
        t.animate = e;
    }
    function S(t, e) {
        if ("number" != typeof e) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        t.animationDuration = e;
    }
    function x(t, e) {
        var r,
            n = [!1];
        if (("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e)) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1);
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            n = e;
        }
        t.connect = n;
    }
    function y(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function w(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        0 !== e && (t.margin = t.spectrum.getDistance(e));
    }
    function P(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2)) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function C(t, e) {
        var r;
        if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++)
                if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var n = e[0] + e[1],
                e = t.spectrum.xVal[0];
            if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e)) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function N(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function V(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            s = 0 <= e.indexOf("hover"),
            a = 0 <= e.indexOf("unconstrained"),
            l = 0 <= e.indexOf("drag-all"),
            e = 0 <= e.indexOf("smooth-steps");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            w(t, t.start[1] - t.start[0]);
        }
        if (a && (t.margin || t.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = { tap: r || o, drag: n, dragAll: l, smoothSteps: e, fixed: i, snap: o, hover: s, unconstrained: a };
    }
    function A(t, e) {
        if (!1 !== e)
            if (!0 === e || n(e)) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++) t.tooltips.push(e);
            } else {
                if ((e = pt(e)).length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                e.forEach(function (t) {
                    if ("boolean" != typeof t && !n(t)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }),
                    (t.tooltips = e);
            }
    }
    function k(t, e) {
        if (e.length !== t.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
        t.handleAttributes = e;
    }
    function M(t, e) {
        if (!n(e)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        t.ariaFormat = e;
    }
    function U(t, e) {
        if (!n((r = e)) || "function" != typeof r.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        var r;
        t.format = e;
    }
    function D(t, e) {
        if ("boolean" != typeof e) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        t.keyboardSupport = e;
    }
    function O(t, e) {
        t.documentElement = e;
    }
    function L(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e;
    }
    function T(e, r) {
        if ("object" != typeof r) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        "string" == typeof e.cssPrefix
            ? ((e.cssClasses = {}),
              Object.keys(r).forEach(function (t) {
                  e.cssClasses[t] = e.cssPrefix + r[t];
              }))
            : (e.cssClasses = r);
    }
    function gt(e) {
        var r = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: u, format: u },
            n = {
                step: { r: !1, t: p },
                keyboardPageMultiplier: { r: !1, t: d },
                keyboardMultiplier: { r: !1, t: f },
                keyboardDefaultStep: { r: !1, t: h },
                start: { r: !0, t: g },
                connect: { r: !0, t: x },
                direction: { r: !0, t: N },
                snap: { r: !1, t: b },
                animate: { r: !1, t: v },
                animationDuration: { r: !1, t: S },
                range: { r: !0, t: m },
                orientation: { r: !1, t: y },
                margin: { r: !1, t: w },
                limit: { r: !1, t: P },
                padding: { r: !1, t: C },
                behaviour: { r: !0, t: V },
                ariaFormat: { r: !1, t: M },
                format: { r: !1, t: U },
                tooltips: { r: !1, t: A },
                keyboardSupport: { r: !0, t: D },
                documentElement: { r: !1, t: O },
                cssPrefix: { r: !0, t: L },
                cssClasses: { r: !0, t: T },
                handleAttributes: { r: !1, t: k },
            },
            i = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: c, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format),
            Object.keys(n).forEach(function (t) {
                if (at(e[t]) || void 0 !== i[t]) n[t].t(r, (at(e[t]) ? e : i)[t]);
                else if (n[t].r) throw new Error("noUiSlider: '" + t + "' is required.");
            }),
            (r.pips = e.pips);
        var t = void 0 !== (o = document.createElement("div")).style.msTransform,
            o = void 0 !== o.style.transform;
        return (
            (r.transformRule = o ? "transform" : t ? "msTransform" : "webkitTransform"),
            (r.style = [
                ["left", "top"],
                ["right", "bottom"],
            ][r.dir][r.ort]),
            r
        );
    }
    function j(t, d, o) {
        var l,
            a,
            S,
            n,
            u,
            c = window.navigator.pointerEnabled
                ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                : window.navigator.msPointerEnabled
                ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
            j =
                window.CSS &&
                CSS.supports &&
                CSS.supports("touch-action", "none") &&
                (function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                        window.addEventListener("test", null, e);
                    } catch (t) {}
                    return t;
                })(),
            x = t,
            y = d.spectrum,
            p = [],
            f = [],
            h = [],
            s = 0,
            m = {},
            w = t.ownerDocument,
            g = d.documentElement || w.documentElement,
            b = w.body,
            z = "rtl" === w.dir || 1 === d.ort ? 0 : 100;
        function E(t, e) {
            var r = w.createElement("div");
            return e && dt(r, e), t.appendChild(r), r;
        }
        function H(t, c) {
            var e,
                t = E(t, d.cssClasses.origin),
                r = E(t, d.cssClasses.handle);
            return (
                E(r, d.cssClasses.touchArea),
                r.setAttribute("data-handle", String(c)),
                d.keyboardSupport &&
                    (r.setAttribute("tabindex", "0"),
                    r.addEventListener("keydown", function (t) {
                        var e = c;
                        if (!_() && !v(e)) {
                            var r = ["Left", "Right"],
                                n = ["Down", "Up"],
                                i = ["PageDown", "PageUp"],
                                o = ["Home", "End"],
                                s = (d.dir && !d.ort ? r.reverse() : d.ort && !d.dir && (n.reverse(), i.reverse()), t.key.replace("Arrow", "")),
                                a = s === i[0],
                                l = s === i[1],
                                i = s === n[0] || s === r[0] || a,
                                n = s === n[1] || s === r[1] || l,
                                r = s === o[0],
                                o = s === o[1];
                            if (!(i || n || r || o)) return !0;
                            if ((t.preventDefault(), n || i)) {
                                var u = i ? 0 : 1;
                                if (null === (u = et(e)[u])) return !1;
                                !1 === u && (u = y.getDefaultStep(f[e], i, d.keyboardDefaultStep)), (u *= l || a ? d.keyboardPageMultiplier : d.keyboardMultiplier), (u = Math.max(u, 1e-7)), (u = p[e] + (u *= i ? -1 : 1));
                            } else u = o ? d.spectrum.xVal[d.spectrum.xVal.length - 1] : d.spectrum.xVal[0];
                            D(e, y.toStepping(u), !0, !0), M("slide", e), M("update", e), M("change", e), M("set", e);
                        }
                        return !1;
                    })),
                void 0 !== d.handleAttributes &&
                    ((e = d.handleAttributes[c]),
                    Object.keys(e).forEach(function (t) {
                        r.setAttribute(t, e[t]);
                    })),
                r.setAttribute("role", "slider"),
                r.setAttribute("aria-orientation", d.ort ? "vertical" : "horizontal"),
                0 === c ? dt(r, d.cssClasses.handleLower) : c === d.handles - 1 && dt(r, d.cssClasses.handleUpper),
                (t.handle = r),
                t
            );
        }
        function F(t, e) {
            return !!e && E(t, d.cssClasses.connect);
        }
        function R(t, e) {
            return !(!d.tooltips || !d.tooltips[e]) && E(t.firstChild, d.cssClasses.tooltip);
        }
        function _() {
            return x.hasAttribute("disabled");
        }
        function v(t) {
            return l[t].hasAttribute("disabled");
        }
        function P() {
            n &&
                (r("update" + mt.tooltips),
                n.forEach(function (t) {
                    t && st(t);
                }),
                (n = null));
        }
        function B() {
            P(),
                (n = l.map(R)),
                e("update" + mt.tooltips, function (t, e, r) {
                    n && d.tooltips && !1 !== n[e] && ((t = t[e]), !0 !== d.tooltips[e] && (t = d.tooltips[e].to(r[e])), (n[e].innerHTML = t));
                });
        }
        function q(t, e) {
            return t.map(function (t) {
                return y.fromStepping(e ? y.getStep(t) : t);
            });
        }
        function C() {
            S && (st(S), (S = null));
        }
        function N(t) {
            C();
            (h = (function (t) {
                if (t.mode === ot.PipsMode.Range || t.mode === ot.PipsMode.Steps) return y.xVal;
                if (t.mode !== ot.PipsMode.Count)
                    return t.mode === ot.PipsMode.Positions
                        ? q(t.values, t.stepped)
                        : t.mode === ot.PipsMode.Values
                        ? t.stepped
                            ? t.values.map(function (t) {
                                  return y.fromStepping(y.getStep(y.toStepping(t)));
                              })
                            : t.values
                        : [];
                if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                for (var e = t.values - 1, r = 100 / e, n = []; e--; ) n[e] = e * r;
                return n.push(100), q(n, t.stepped);
            })((f = t))),
                (m = {}),
                (e = y.xVal[0]),
                (r = y.xVal[y.xVal.length - 1]),
                (b = g = !1),
                (v = 0),
                (h = h
                    .slice()
                    .sort(function (t, e) {
                        return t - e;
                    })
                    .filter(function (t) {
                        return !this[t] && (this[t] = !0);
                    }, {}))[0] !== e && (h.unshift(e), (g = !0)),
                h[h.length - 1] !== r && (h.push(r), (b = !0)),
                h.forEach(function (t, e) {
                    var r,
                        n,
                        i,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = h[e + 1],
                        p = f.mode === ot.PipsMode.Steps,
                        d = (d = p ? y.xNumSteps[e] : d) || c - t;
                    for (void 0 === c && (c = t), d = Math.max(d, 1e-7), r = t; r <= c; r = Number((r + d).toFixed(7))) {
                        for (a = (o = (i = y.toStepping(r)) - v) / (f.density || 1), u = o / (l = Math.round(a)), n = 1; n <= l; n += 1) m[(s = v + n * u).toFixed(5)] = [y.fromStepping(s), 0];
                        (a = -1 < h.indexOf(r) ? ot.PipsType.LargeValue : p ? ot.PipsType.SmallValue : ot.PipsType.NoValue), !e && g && r !== c && (a = 0), (r === c && b) || (m[i.toFixed(5)] = [r, a]), (v = i);
                    }
                });
            var f,
                h,
                m,
                g,
                b,
                v,
                i,
                o,
                s,
                a,
                n,
                l,
                u,
                c,
                e = m,
                r = t.filter,
                t = t.format || {
                    to: function (t) {
                        return String(Math.round(t));
                    },
                };
            return (S = x.appendChild(
                ((i = e),
                (o = r),
                (s = t),
                (a = w.createElement("div")),
                ((e = {})[ot.PipsType.None] = ""),
                (e[ot.PipsType.NoValue] = d.cssClasses.valueNormal),
                (e[ot.PipsType.LargeValue] = d.cssClasses.valueLarge),
                (e[ot.PipsType.SmallValue] = d.cssClasses.valueSub),
                (n = e),
                ((e = {})[ot.PipsType.None] = ""),
                (e[ot.PipsType.NoValue] = d.cssClasses.markerNormal),
                (e[ot.PipsType.LargeValue] = d.cssClasses.markerLarge),
                (e[ot.PipsType.SmallValue] = d.cssClasses.markerSub),
                (l = e),
                (u = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical]),
                (c = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical]),
                dt(a, d.cssClasses.pips),
                dt(a, 0 === d.ort ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical),
                Object.keys(i).forEach(function (t) {
                    var e,
                        r = i[(e = t)][0],
                        n = i[t][1];
                    (n = o ? o(r, n) : n) !== ot.PipsType.None &&
                        (((t = E(a, !1)).className = p(n, d.cssClasses.marker)), (t.style[d.style] = e + "%"), n > ot.PipsType.NoValue) &&
                        (((t = E(a, !1)).className = p(n, d.cssClasses.value)), t.setAttribute("data-value", String(r)), (t.style[d.style] = e + "%"), (t.innerHTML = String(s.to(r))));
                }),
                a)
            ));
            function p(t, e) {
                var r = e === d.cssClasses.value;
                return e + " " + (r ? u : c)[d.ort] + " " + (r ? n : l)[t];
            }
        }
        function X() {
            var t = i.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][d.ort];
            return 0 === d.ort ? t.width || i[e] : t.height || i[e];
        }
        function V(n, i, o, s) {
            function e(t) {
                var e,
                    r = (function (e, t, r) {
                        var n = 0 === e.type.indexOf("touch"),
                            i = 0 === e.type.indexOf("mouse"),
                            o = 0 === e.type.indexOf("pointer"),
                            s = 0,
                            a = 0;
                        if ((0 === e.type.indexOf("MSPointer") && (o = !0), "mousedown" === e.type && !e.buttons && !e.touches)) return !1;
                        if (n) {
                            var l = function (t) {
                                return (t = t.target) === r || r.contains(t) || (e.composed && e.composedPath().shift() === r);
                            };
                            if ("touchstart" === e.type) {
                                if (1 < (n = Array.prototype.filter.call(e.touches, l)).length) return !1;
                                (s = n[0].pageX), (a = n[0].pageY);
                            } else {
                                if (!(l = Array.prototype.find.call(e.changedTouches, l))) return !1;
                                (s = l.pageX), (a = l.pageY);
                            }
                        }
                        return (t = t || ht(w)), (i || o) && ((s = e.clientX + t.x), (a = e.clientY + t.y)), (e.pageOffset = t), (e.points = [s, a]), (e.cursor = i || o), e;
                    })(t, s.pageOffset, s.target || i);
                return (
                    !!r &&
                    !(_() && !s.doNotReject) &&
                    ((e = x), (t = d.cssClasses.tap), !((e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)) && !s.doNotReject)) &&
                    !(n === c.start && void 0 !== r.buttons && 1 < r.buttons) &&
                    (!s.hover || !r.buttons) &&
                    (j || r.preventDefault(), (r.calcPoint = r.points[d.ort]), void o(r, s))
                );
            }
            var r = [];
            return (
                n.split(" ").forEach(function (t) {
                    i.addEventListener(t, e, !!j && { passive: !0 }), r.push([t, e]);
                }),
                r
            );
        }
        function Y(t) {
            var e,
                r,
                n = ct(
                    (n =
                        (100 *
                            (t -
                                ((n = i),
                                (e = d.ort),
                                (r = n.getBoundingClientRect()),
                                (n = (t = n.ownerDocument).documentElement),
                                (t = ht(t)),
                                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0),
                                e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft))) /
                        X())
                );
            return d.dir ? 100 - n : n;
        }
        function I(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && A(t, e);
        }
        function W(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return A(t, e);
            G(0 < (t = (d.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint)), (100 * t) / e.baseSize, e.locations, e.handleNumbers, e.connect);
        }
        function A(t, e) {
            e.handle && (ft(e.handle, d.cssClasses.active), --s),
                e.listeners.forEach(function (t) {
                    g.removeEventListener(t[0], t[1]);
                }),
                0 === s && (ft(x, d.cssClasses.drag), K(), t.cursor) && ((b.style.cursor = ""), b.removeEventListener("selectstart", lt)),
                d.events.smoothSteps &&
                    (e.handleNumbers.forEach(function (t) {
                        D(t, f[t], !0, !0, !1, !1);
                    }),
                    e.handleNumbers.forEach(function (t) {
                        M("update", t);
                    })),
                e.handleNumbers.forEach(function (t) {
                    M("change", t), M("set", t), M("end", t);
                });
        }
        function k(t, e) {
            var r, n, i, o;
            e.handleNumbers.some(v) ||
                (1 === e.handleNumbers.length && ((o = l[e.handleNumbers[0]].children[0]), (s += 1), dt(o, d.cssClasses.active)),
                t.stopPropagation(),
                (n = V(c.move, g, W, {
                    target: t.target,
                    handle: o,
                    connect: e.connect,
                    listeners: (r = []),
                    startCalcPoint: t.calcPoint,
                    baseSize: X(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: f.slice(),
                })),
                (i = V(c.end, g, A, { target: t.target, handle: o, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers })),
                (o = V("mouseout", g, I, { target: t.target, handle: o, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers })),
                r.push.apply(r, n.concat(i, o)),
                t.cursor && ((b.style.cursor = getComputedStyle(t.target).cursor), 1 < l.length && dt(x, d.cssClasses.drag), b.addEventListener("selectstart", lt, !1)),
                e.handleNumbers.forEach(function (t) {
                    M("start", t);
                }));
        }
        function e(t, e) {
            (m[t] = m[t] || []),
                m[t].push(e),
                "update" === t.split(".")[0] &&
                    l.forEach(function (t, e) {
                        M("update", e);
                    });
        }
        function r(t) {
            var n = t && t.split(".")[0],
                i = n ? t.substring(n.length) : t;
            Object.keys(m).forEach(function (t) {
                var e = t.split(".")[0],
                    r = t.substring(e.length);
                (n && n !== e) || (i && i !== r) || (((r !== mt.aria && r !== mt.tooltips) || i === r) && delete m[t]);
            });
        }
        function M(r, n, i) {
            Object.keys(m).forEach(function (t) {
                var e = t.split(".")[0];
                r === e &&
                    m[t].forEach(function (t) {
                        t.call(T, p.map(d.format.to), n, p.slice(), i || !1, f.slice(), T);
                    });
            });
        }
        function U(t, e, r, n, i, o, s) {
            var a;
            return (
                1 < l.length &&
                    !d.events.unconstrained &&
                    (n && 0 < e && ((a = y.getAbsoluteDistance(t[e - 1], d.margin, !1)), (r = Math.max(r, a))), i) &&
                    e < l.length - 1 &&
                    ((a = y.getAbsoluteDistance(t[e + 1], d.margin, !0)), (r = Math.min(r, a))),
                1 < l.length && d.limit && (n && 0 < e && ((a = y.getAbsoluteDistance(t[e - 1], d.limit, !1)), (r = Math.min(r, a))), i) && e < l.length - 1 && ((a = y.getAbsoluteDistance(t[e + 1], d.limit, !0)), (r = Math.max(r, a))),
                d.padding && (0 === e && ((a = y.getAbsoluteDistance(0, d.padding[0], !1)), (r = Math.max(r, a))), e === l.length - 1) && ((a = y.getAbsoluteDistance(100, d.padding[1], !0)), (r = Math.min(r, a))),
                !((r = ct((r = s ? r : y.getStep(r)))) === t[e] && !o) && r
            );
        }
        function $(t, e) {
            var r = d.ort;
            return (r ? e : t) + ", " + (r ? t : e);
        }
        function G(t, r, n, e, i) {
            var o = n.slice(),
                s = e[0],
                a = d.events.smoothSteps,
                l = [!t, t],
                u = [t, !t],
                c =
                    ((e = e.slice()),
                    t && e.reverse(),
                    1 < e.length
                        ? e.forEach(function (t, e) {
                              !1 === (e = U(o, t, o[t] + r, l[e], u[e], !1, a)) ? (r = 0) : ((r = e - o[t]), (o[t] = e));
                          })
                        : (l = u = [!0]),
                    !1);
            e.forEach(function (t, e) {
                c = D(t, n[t] + r, l[e], u[e], !1, a) || c;
            }),
                c &&
                    (e.forEach(function (t) {
                        M("update", t), M("slide", t);
                    }),
                    null != i) &&
                    M("drag", s);
        }
        function J(t, e) {
            return d.dir ? 100 - t - e : t;
        }
        function K() {
            h.forEach(function (t) {
                var e = 50 < f[t] ? -1 : 1,
                    e = 3 + (l.length + e * t);
                l[t].style.zIndex = String(e);
            });
        }
        function D(t, e, r, n, i, o) {
            return !1 !== (e = i ? e : U(f, t, e, r, n, !1, o)) && ((f[t] = e), (p[t] = y.fromStepping(e)), (e = "translate(" + $(J(e, 0) - z + "%", "0") + ")"), (l[t].style[d.transformRule] = e), Q(t), Q(t + 1), !0);
        }
        function Q(t) {
            var e, r;
            a[t] && ((e = "translate(" + $(J((e = 0 !== t ? f[t - 1] : 0), (r = (t !== a.length - 1 ? f[t] : 100) - e)) + "%", "0") + ")"), (r = "scale(" + $(r / 100, "1") + ")"), (a[t].style[d.transformRule] = e + " " + r));
        }
        function Z(t, e) {
            return null === t || !1 === t || void 0 === t || ("number" == typeof t && (t = String(t)), !1 === (t = !1 !== (t = d.format.from(t)) ? y.toStepping(t) : t)) || isNaN(t) ? f[e] : t;
        }
        function O(t, e, r) {
            var n = pt(t),
                t = void 0 === f[0];
            (e = void 0 === e || e),
                d.animate && !t && ut(x, d.cssClasses.tap, d.animationDuration),
                h.forEach(function (t) {
                    D(t, Z(n[t], t), !0, !1, r);
                });
            var i,
                o = 1 === h.length ? 0 : 1;
            for (
                t &&
                y.hasNoSize() &&
                ((r = !0), (f[0] = 0), 1 < h.length) &&
                ((i = 100 / (h.length - 1)),
                h.forEach(function (t) {
                    f[t] = t * i;
                }));
                o < h.length;
                ++o
            )
                h.forEach(function (t) {
                    D(t, f[t], !0, !0, r);
                });
            K(),
                h.forEach(function (t) {
                    M("update", t), null !== n[t] && e && M("set", t);
                });
        }
        function tt(t) {
            return (t = void 0 !== t && t) ? (1 === p.length ? p[0] : p.slice(0)) : 1 === (t = p.map(d.format.to)).length ? t[0] : t;
        }
        function et(t) {
            var e = f[t],
                r = y.getNearbySteps(e),
                n = p[t],
                i = r.thisStep.step,
                t = null;
            return d.snap
                ? [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null]
                : (!1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
                  (t = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
                  100 === e ? (i = null) : 0 === e && (t = null),
                  (e = y.countStepDecimals()),
                  null !== i && !1 !== i && (i = Number(i.toFixed(e))),
                  [(t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t), i]);
        }
        dt((t = x), d.cssClasses.target),
            0 === d.dir ? dt(t, d.cssClasses.ltr) : dt(t, d.cssClasses.rtl),
            0 === d.ort ? dt(t, d.cssClasses.horizontal) : dt(t, d.cssClasses.vertical),
            dt(t, "rtl" === getComputedStyle(t).direction ? d.cssClasses.textDirectionRtl : d.cssClasses.textDirectionLtr);
        var i = E(t, d.cssClasses.base),
            rt = d.connect,
            nt = i,
            it = E(nt, d.cssClasses.connects);
        (l = []), (a = []).push(F(it, rt[0]));
        for (var L = 0; L < d.handles; L++) l.push(H(nt, L)), (h[L] = L), a.push(F(it, rt[L + 1]));
        (u = d.events).fixed ||
            l.forEach(function (t, e) {
                V(c.start, t.children[0], k, { handleNumbers: [e] });
            }),
            u.tap &&
                V(
                    c.start,
                    i,
                    function (t) {
                        t.stopPropagation();
                        var i,
                            o,
                            s,
                            e = Y(t.calcPoint),
                            r =
                                ((i = e),
                                (s = !(o = 100)),
                                l.forEach(function (t, e) {
                                    var r, n;
                                    !v(e) && ((r = f[e]), (n = Math.abs(r - i)) < o || (n <= o && r < i) || (100 === n && 100 === o)) && ((s = e), (o = n));
                                }),
                                s);
                        !1 !== r &&
                            (d.events.snap || ut(x, d.cssClasses.tap, d.animationDuration), D(r, e, !0, !0), K(), M("slide", r, !0), M("update", r, !0), d.events.snap ? k(t, { handleNumbers: [r] }) : (M("change", r, !0), M("set", r, !0)));
                    },
                    {}
                ),
            u.hover &&
                V(
                    c.move,
                    i,
                    function (t) {
                        var t = Y(t.calcPoint),
                            t = y.getStep(t),
                            e = y.fromStepping(t);
                        Object.keys(m).forEach(function (t) {
                            "hover" === t.split(".")[0] &&
                                m[t].forEach(function (t) {
                                    t.call(T, e);
                                });
                        });
                    },
                    { hover: !0 }
                ),
            u.drag &&
                a.forEach(function (e, t) {
                    var r, n, i, o, s;
                    !1 !== e &&
                        0 !== t &&
                        t !== a.length - 1 &&
                        ((r = l[t - 1]),
                        (n = l[t]),
                        (i = [e]),
                        (o = [r, n]),
                        (s = [t - 1, t]),
                        dt(e, d.cssClasses.draggable),
                        u.fixed && (i.push(r.children[0]), i.push(n.children[0])),
                        u.dragAll && ((o = l), (s = h)),
                        i.forEach(function (t) {
                            V(c.start, t, k, { handles: o, handleNumbers: s, connect: e });
                        }));
                }),
            O(d.start),
            d.pips && N(d.pips),
            d.tooltips && B(),
            r("update" + mt.aria),
            e("update" + mt.aria, function (t, e, o, r, s) {
                h.forEach(function (t) {
                    var e = l[t],
                        r = U(f, t, 0, !0, !0, !0),
                        n = U(f, t, 100, !0, !0, !0),
                        i = s[t],
                        t = String(d.ariaFormat.to(o[t])),
                        r = y.fromStepping(r).toFixed(1),
                        n = y.fromStepping(n).toFixed(1),
                        i = y.fromStepping(i).toFixed(1);
                    e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", t);
                });
            });
        var T = {
            destroy: function () {
                for (
                    r(mt.aria),
                        r(mt.tooltips),
                        Object.keys(d.cssClasses).forEach(function (t) {
                            ft(x, d.cssClasses[t]);
                        });
                    x.firstChild;

                )
                    x.removeChild(x.firstChild);
                delete x.noUiSlider;
            },
            steps: function () {
                return h.map(et);
            },
            on: e,
            off: r,
            get: tt,
            set: O,
            setHandle: function (t, e, r, n) {
                if (!(0 <= (t = Number(t)) && t < h.length)) throw new Error("noUiSlider: invalid handle number, got: " + t);
                D(t, Z(e, t), !0, !0, n), M("update", t), r && M("set", t);
            },
            reset: function (t) {
                O(d.start, t);
            },
            disable: function (t) {
                null != t
                    ? (l[t].setAttribute("disabled", ""), l[t].handle.removeAttribute("tabindex"))
                    : (x.setAttribute("disabled", ""),
                      l.forEach(function (t) {
                          t.handle.removeAttribute("tabindex");
                      }));
            },
            enable: function (t) {
                null != t
                    ? (l[t].removeAttribute("disabled"), l[t].handle.setAttribute("tabindex", "0"))
                    : (x.removeAttribute("disabled"),
                      l.forEach(function (t) {
                          t.removeAttribute("disabled"), t.handle.setAttribute("tabindex", "0");
                      }));
            },
            __moveHandles: function (t, e, r) {
                G(t, e, f, r);
            },
            options: o,
            updateOptions: function (e, t) {
                var r = tt(),
                    n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"],
                    i =
                        (n.forEach(function (t) {
                            void 0 !== e[t] && (o[t] = e[t]);
                        }),
                        gt(o));
                n.forEach(function (t) {
                    void 0 !== e[t] && (d[t] = i[t]);
                }),
                    (y = i.spectrum),
                    (d.margin = i.margin),
                    (d.limit = i.limit),
                    (d.padding = i.padding),
                    d.pips ? N(d.pips) : C(),
                    (d.tooltips ? B : P)(),
                    (f = []),
                    O(at(e.start) ? e.start : r, t);
            },
            target: x,
            removePips: C,
            removeTooltips: P,
            getPositions: function () {
                return f.slice();
            },
            getTooltips: function () {
                return n;
            },
            getOrigins: function () {
                return l;
            },
            pips: N,
        };
        return T;
    }
    function o(t, e) {
        if (!t || !t.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + t);
        if (t.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
        return (e = j(t, gt(e), e)), (t.noUiSlider = e);
    }
    var E = { __spectrum: r, cssClasses: c, create: o };
    (ot.create = o), (ot.cssClasses = c), (ot.default = E), Object.defineProperty(ot, "__esModule", { value: !0 });
});
