/* @ds-bundle: {"format":3,"namespace":"MyRealTripDesignSystem_349059","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"CategoryTile","sourcePath":"components/product/CategoryTile.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"CouponCard","sourcePath":"components/web/CouponCard.jsx"},{"name":"GnbHeader","sourcePath":"components/web/GnbHeader.jsx"},{"name":"RegionCircle","sourcePath":"components/web/RegionCircle.jsx"},{"name":"WebProductCard","sourcePath":"components/web/WebProductCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a61663728925","components/core/Button.jsx":"4312af7ec72b","components/core/Chip.jsx":"61a9ed7ffcbe","components/core/Input.jsx":"d780380d41c4","components/core/Rating.jsx":"564fc1400938","components/core/SectionHeader.jsx":"187453650869","components/navigation/BottomNav.jsx":"2fe14f6916bc","components/navigation/TopBar.jsx":"e942c63da822","components/product/CategoryTile.jsx":"91d9e52e40bb","components/product/ProductCard.jsx":"6b90bd07b44f","components/web/CouponCard.jsx":"3d34f90e226b","components/web/GnbHeader.jsx":"94fdc219841d","components/web/RegionCircle.jsx":"7dcea6bc19dc","components/web/WebProductCard.jsx":"108e395cb025","ui_kits/app/App.jsx":"6adc089c27fd","ui_kits/app/CollectionScreen.jsx":"52a909c7c2a5","ui_kits/app/HomeScreen.jsx":"8b326a111516","ui_kits/app/MyTripScreen.jsx":"8cbb4d48c012","ui_kits/app/ProductDetailScreen.jsx":"ba38e547012f","ui_kits/app/Shared.jsx":"3ca9a9052731","ui_kits/app/data.js":"650b6b00573a","ui_kits/web/Sections.jsx":"90817bbe66ed","ui_kits/web/WebHome.jsx":"4169dee51f05","ui_kits/web/data.js":"e93c26791d70"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MyRealTripDesignSystem_349059 = window.MyRealTripDesignSystem_349059 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip merchandising Badge / pill label.
 * tone: "sale"(red) · "instant"(purple) · "guarantee"(red-soft) ·
 *       "best"(blue) · "new"(green) · "neutral"(gray)
 * variant: "soft" (tinted bg, default) · "solid" (filled, white text)
 */
function Badge({
  children,
  tone = "sale",
  variant = "soft",
  style = {},
  ...rest
}) {
  const map = {
    sale: {
      soft: ["var(--mrt-red-soft)", "var(--mrt-red)"],
      solid: ["var(--mrt-red)", "#fff"]
    },
    instant: {
      soft: ["var(--mrt-purple-soft)", "var(--mrt-purple-2)"],
      solid: ["var(--mrt-purple)", "#fff"]
    },
    guarantee: {
      soft: ["var(--mrt-red-soft)", "var(--mrt-red)"],
      solid: ["var(--mrt-red)", "#fff"]
    },
    best: {
      soft: ["var(--mrt-blue-50)", "var(--mrt-blue)"],
      solid: ["var(--mrt-blue)", "#fff"]
    },
    new: {
      soft: ["var(--mrt-green-soft)", "var(--mrt-green)"],
      solid: ["var(--mrt-green)", "#fff"]
    },
    free: {
      soft: ["var(--mrt-white)", "var(--mrt-blue)"],
      solid: ["var(--mrt-blue-50)", "var(--mrt-blue-strong)"]
    },
    neutral: {
      soft: ["var(--mrt-gray-100)", "var(--mrt-gray-700)"],
      solid: ["var(--mrt-ink)", "#fff"]
    }
  };
  const [bg, fg] = map[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 7px",
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-micro)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-snug)",
      lineHeight: 1,
      borderRadius: "var(--r-xs)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip Button.
 * Tones: "primary" (Woodsmoke black — default CTA), "brand" (Science Blue),
 * "secondary" (outlined pill), "ghost" (text only).
 * Sizes: "sm" | "md" | "lg" | "xl" (xl = full-width sticky CTA).
 */
function Button({
  children,
  tone = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 36,
      fontSize: "var(--fs-sm)",
      radius: "var(--r-pill)",
      gap: 6
    },
    md: {
      padding: "0 20px",
      height: 46,
      fontSize: "var(--fs-body)",
      radius: "var(--r-pill)",
      gap: 8
    },
    lg: {
      padding: "0 24px",
      height: 52,
      fontSize: "var(--fs-title)",
      radius: "14px",
      gap: 8
    },
    xl: {
      padding: "0 24px",
      height: 56,
      fontSize: "var(--fs-h3)",
      radius: "14px",
      gap: 8
    }
  };
  const tones = {
    primary: {
      background: "var(--mrt-ink)",
      color: "var(--mrt-white)",
      border: "none",
      shadow: "none"
    },
    brand: {
      background: "var(--mrt-blue)",
      color: "var(--mrt-white)",
      border: "none",
      shadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--mrt-white)",
      color: "var(--mrt-ink)",
      border: "1.5px solid var(--border-default)",
      shadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--mrt-gray-700)",
      border: "none",
      shadow: "none"
    }
  };
  const s = sizes[size];
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontSize: s.fontSize,
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-snug)",
      lineHeight: 1,
      color: t.color,
      background: t.background,
      border: t.border,
      borderRadius: s.radius,
      boxShadow: t.shadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(var(--press-scale))";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip Chip — outlined pill used for popular-city filters and
 * quick categories. Optional trailing count (e.g. 도쿄 249).
 * Selected state fills with ink.
 */
function Chip({
  label,
  count,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 38,
      padding: "0 16px",
      background: selected ? "var(--mrt-ink)" : "var(--mrt-white)",
      border: selected ? "1.5px solid var(--mrt-ink)" : "1.5px solid var(--border-default)",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-snug)",
      color: selected ? "var(--mrt-white)" : "var(--mrt-gray-900)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "transform var(--dur-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.96)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), /*#__PURE__*/React.createElement("span", null, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: selected ? "rgba(255,255,255,0.7)" : "var(--mrt-gray-500)",
      fontWeight: "var(--fw-medium)"
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip Input — rounded search/text field.
 * variant: "search" (pill, paired with a button) · "box" (rounded rect)
 */
function Input({
  value,
  onChange,
  placeholder = "",
  variant = "box",
  iconLeft = null,
  style = {},
  ...rest
}) {
  const radius = variant === "search" ? "var(--r-pill)" : "12px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 52,
      padding: "0 18px",
      background: "var(--mrt-white)",
      border: "1.5px solid var(--border-default)",
      borderRadius: radius,
      transition: "border-color var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--mrt-gray-400)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-title)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-normal)",
      color: "var(--mrt-ink)"
    },
    onFocus: e => e.currentTarget.parentElement.style.borderColor = "var(--mrt-ink)",
    onBlur: e => e.currentTarget.parentElement.style.borderColor = "var(--border-default)"
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip Rating — yellow star, bold score, muted review count.
 * size: "sm" | "md"
 */
function Rating({
  score,
  count,
  size = "md",
  style = {},
  ...rest
}) {
  const fs = size === "sm" ? "var(--fs-caption)" : "var(--fs-body)";
  const star = size === "sm" ? 13 : 15;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: star,
    height: star,
    viewBox: "0 0 20 20",
    fill: "var(--mrt-star)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6z"
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: "var(--fw-bold)",
      color: "var(--mrt-ink)"
    }
  }, score), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mrt-gray-500)",
      fontWeight: "var(--fw-medium)"
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip SectionHeader — bold black title, optional muted subtitle,
 * optional trailing action ("전체보기 >"). Used to open home sections.
 */
function SectionHeader({
  title,
  subtitle,
  action,
  onAction,
  size = "lg",
  style = {},
  ...rest
}) {
  const titleSize = size === "lg" ? "var(--fs-h2)" : "var(--fs-h3)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: titleSize,
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-tight)",
      lineHeight: "var(--lh-tight)",
      color: "var(--mrt-ink)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      color: "var(--mrt-gray-500)",
      letterSpacing: "var(--ls-normal)"
    }
  }, subtitle)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      background: "none",
      border: "none",
      padding: "4px 0",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--mrt-gray-600)",
      whiteSpace: "nowrap"
    }
  }, action, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "var(--fs-caption)"
    }
  }, "\u203A")));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
/* Minimal stroke icons matching the app's bottom-nav glyphs */
const Icons = {
  home: a => /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5L12 3l9 7.5M5 9.5V20h5v-5.5h4V20h5V9.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: a,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  trip: a => /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: a,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "7",
    width: "16",
    height: "13",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M12 11v5"
  })),
  community: a => /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: a,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "9",
    r: "2.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6M14.5 18.4c.2-2.2 1.8-3.6 4-3.6 1.3 0 2.5.5 3.2 1.4"
  })),
  my: a => /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: a,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8.5",
    r: "3.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20c0-3.4 3.1-5.6 7-5.6s7 2.2 7 5.6"
  }))
};

/**
 * MyRealTrip BottomNav — 5 tabs, centre "할인" rendered as the signature
 * purple gradient blob that lifts above the bar.
 * tabs default to the live app set; pass `active` (key) to control selection.
 */
function BottomNav({
  active = "home",
  onChange,
  style = {}
}) {
  const tabs = [{
    key: "home",
    label: "홈",
    icon: "home"
  }, {
    key: "trip",
    label: "내 여행",
    icon: "trip"
  }, {
    key: "deal",
    label: "할인",
    center: true
  }, {
    key: "community",
    label: "커뮤니티",
    icon: "community",
    dot: true
  }, {
    key: "my",
    label: "마이페이지",
    icon: "my"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
      height: "var(--nav-height)",
      padding: "0 4px 6px",
      background: "var(--mrt-white)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-nav)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    if (t.center) {
      return /*#__PURE__*/React.createElement("button", {
        key: t.key,
        type: "button",
        onClick: () => onChange && onChange(t.key),
        style: {
          background: "none",
          border: "none",
          padding: "4px 0",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
          position: "relative",
          width: 56
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          top: -22,
          width: 46,
          height: 46,
          borderRadius: "var(--r-circle)",
          background: "radial-gradient(120% 120% at 30% 20%, #9b7bff 0%, var(--mrt-purple) 45%, var(--mrt-purple-2) 100%)",
          boxShadow: "0 8px 18px rgba(91,48,232,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#fff",
          fontWeight: "var(--fw-extrabold)",
          fontSize: 13,
          letterSpacing: "-0.04em"
        }
      }, "%")), /*#__PURE__*/React.createElement("span", {
        style: {
          marginTop: 24,
          fontSize: "var(--fs-micro)",
          fontWeight: "var(--fw-semibold)",
          color: "var(--mrt-purple-2)",
          whiteSpace: "nowrap"
        }
      }, t.label));
    }
    const on = active === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      onClick: () => onChange && onChange(t.key),
      style: {
        background: "none",
        border: "none",
        padding: "4px 0",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        width: 70,
        position: "relative",
        color: on ? "var(--mrt-ink)" : "var(--mrt-gray-400)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "25",
      height: "25",
      viewBox: "0 0 24 24"
    }, Icons[t.icon](on ? 2.1 : 1.8)), t.dot && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -1,
        right: -2,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--mrt-red)",
        border: "1.5px solid #fff"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-micro)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        color: on ? "var(--mrt-ink)" : "var(--mrt-gray-500)",
        whiteSpace: "nowrap"
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip TopBar — detail/sub-page header: back chevron, centered
 * title, and optional trailing action icons (share, bookmark, …).
 * variant="plain" (white) is default; pass `title` and `actions`.
 */
function TopBar({
  title,
  onBack,
  actions = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 56,
      padding: "0 6px 0 8px",
      background: "var(--mrt-white)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    "aria-label": "\uB4A4\uB85C",
    style: {
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--mrt-ink)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 4l-8 8 8 8"
  }))), /*#__PURE__*/React.createElement("h1", {
    style: {
      flex: 1,
      margin: 0,
      textAlign: "center",
      fontSize: "var(--fs-title)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-snug)",
      color: "var(--mrt-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: a.onClick,
    "aria-label": a.label,
    style: {
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--mrt-ink)"
    }
  }, a.icon)), actions.length === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44
    }
  })));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/product/CategoryTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip CategoryTile — emoji-on-white category entry point.
 * shape="tile"   → rounded square w/ light fill (top service grid: 항공/투어·티켓…)
 * shape="circle" → image/emoji circle w/ label below (themed collections)
 * Accepts an emoji string OR an image url via `image`.
 */
function CategoryTile({
  icon,
  image,
  label,
  badge,
  shape = "tile",
  onClick,
  style = {},
  ...rest
}) {
  const isCircle = shape === "circle";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      width: isCircle ? 78 : 68,
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: isCircle ? 72 : 56,
      height: isCircle ? 72 : 56,
      borderRadius: isCircle ? "var(--r-circle)" : "16px",
      background: isCircle ? "var(--mrt-gray-100)" : "var(--mrt-gray-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: isCircle ? "none" : "inset 0 0 0 1px var(--border-subtle)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: isCircle ? 34 : 28,
      lineHeight: 1
    },
    "aria-hidden": "true"
  }, icon), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--mrt-red)",
      color: "#fff",
      fontSize: 10,
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      padding: "3px 6px",
      borderRadius: "var(--r-pill)",
      whiteSpace: "nowrap"
    }
  }, badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-snug)",
      color: "var(--mrt-gray-900)",
      textAlign: "center",
      lineHeight: 1.25
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip ProductCard.
 * layout="row"  → thumbnail-left list row (tour list).
 * layout="tile" → image-top card for horizontal scrollers.
 * badges: [{ tone, variant, label }]
 */
function ProductCard({
  image,
  title,
  score,
  reviews,
  price,
  priceSuffix = "원",
  badges = [],
  layout = "row",
  onClick,
  style = {},
  ...rest
}) {
  const formatted = typeof price === "number" ? price.toLocaleString("ko-KR") : price;
  if (layout === "tile") {
    return /*#__PURE__*/React.createElement("article", _extends({
      onClick: onClick,
      style: {
        width: 200,
        flexShrink: 0,
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "1 / 1",
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        background: "var(--mrt-gray-100)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        marginTop: 10,
        flexWrap: "wrap"
      }
    }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      key: i,
      tone: b.tone,
      variant: b.variant
    }, b.label))), /*#__PURE__*/React.createElement("h3", {
      style: titleStyle(2)
    }, title), score != null && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
      score: score,
      count: reviews,
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: priceRow
    }, /*#__PURE__*/React.createElement("strong", {
      style: priceStyle
    }, formatted), /*#__PURE__*/React.createElement("span", {
      style: priceSuffixStyle
    }, priceSuffix)));
  }
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "stretch",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      padding: "4px 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      flexShrink: 0,
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      background: "var(--mrt-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: titleStyle(1)
  }, title), score != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    score: score,
    count: reviews,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginTop: 8,
      flexWrap: "wrap"
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: b.tone,
    variant: b.variant
  }, b.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...priceRow,
      marginTop: "auto",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: priceStyle
  }, formatted), /*#__PURE__*/React.createElement("span", {
    style: priceSuffixStyle
  }, priceSuffix))));
}
const titleStyle = lines => ({
  margin: lines === 1 ? 0 : "8px 0 0",
  fontSize: "var(--fs-title)",
  fontWeight: "var(--fw-semibold)",
  letterSpacing: "var(--ls-snug)",
  lineHeight: "var(--lh-snug)",
  color: "var(--mrt-ink)",
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});
const priceRow = {
  display: "flex",
  alignItems: "baseline",
  gap: 2,
  marginTop: 8
};
const priceStyle = {
  fontSize: "var(--fs-h3)",
  fontWeight: "var(--fw-extrabold)",
  letterSpacing: "var(--ls-snug)",
  color: "var(--mrt-ink)"
};
const priceSuffixStyle = {
  fontSize: "var(--fs-body)",
  fontWeight: "var(--fw-bold)",
  color: "var(--mrt-ink)"
};
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/web/CouponCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip CouponCard — small white "쿠폰 받기" card. Left emoji/icon,
 * a label + bold amount, and a circular purple download button on the right.
 * Used on web promo strips (몽골 패키지 할인 45,000).
 */
function CouponCard({
  icon = "🧳",
  label,
  amount,
  suffix = "",
  onDownload,
  style = {},
  ...rest
}) {
  const [got, setGot] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      background: "var(--mrt-white)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 18px",
      fontFamily: "var(--font-sans)",
      minWidth: 230,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--mrt-gray-700)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--mrt-ink)",
      letterSpacing: "var(--ls-tight)",
      marginTop: 1
    }
  }, typeof amount === "number" ? amount.toLocaleString("ko-KR") : amount, suffix)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setGot(true);
      onDownload && onDownload();
    },
    "aria-label": "\uCFE0\uD3F0 \uBC1B\uAE30",
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: "var(--r-circle)",
      border: "none",
      background: got ? "var(--mrt-green)" : "var(--mrt-purple)",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 14px rgba(107,78,255,0.35)",
      transition: "transform var(--dur-fast) var(--ease-standard)"
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.92)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, got ? /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4v11M7 11l5 5 5-5M5 20h14"
  }))));
}
Object.assign(__ds_scope, { CouponCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/CouponCard.jsx", error: String((e && e.message) || e) }); }

// components/web/GnbHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── myrealtrip wordmark (ink) ──────────────────────────── */
function Wordmark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "var(--mrt-ink)",
    "aria-hidden": "true",
    style: {
      transform: "translateY(-1px)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 12.8L21 4.2c.8-.37 1.6.43 1.24 1.23L13.7 24c-.36.8-1.5.74-1.78-.09l-2.06-6.2-6.2-2.06c-.86-.28-.92-1.45-.16-1.85z",
    opacity: "0.96"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: "-0.045em",
      color: "var(--mrt-ink)",
      fontFamily: "var(--font-sans)"
    }
  }, "myrealtrip"));
}
const DEFAULT_CATEGORIES = [{
  icon: "💥",
  label: "할인"
}, {
  icon: "✈️",
  label: "항공"
}, {
  icon: "🏠",
  label: "국내 숙소"
}, {
  icon: "🏨",
  label: "해외 숙소"
}, {
  icon: "🛡️",
  label: "해외여행보험",
  ad: true
}, {
  icon: "🧳",
  label: "패키지"
}, {
  icon: "🏡",
  label: "한인민박"
}, {
  icon: "🗽",
  label: "투어·티켓"
}, {
  icon: "🚗",
  label: "글로벌렌터카"
}];
const DEFAULT_SUBTABS = ["홈", "뷰티·웰니스", "패키지초특가", "렌터카특가"];

/**
 * MyRealTrip GnbHeader — the full desktop global nav bar: a white top row
 * (logo · search · 파트너 로그인 · 로그인 및 회원가입), a category icon row
 * (할인 · 항공 · 숙소 · 보험 · 패키지 · 투어 · 렌터카 · 더보기), and a
 * text sub-tab row (홈 · 뷰티·웰니스 …). Sticky to the top of the page.
 */
function GnbHeader({
  categories = DEFAULT_CATEGORIES,
  subTabs = DEFAULT_SUBTABS,
  searchPlaceholder = "\"렌터카 없이 제주 동부\" 리무진 버스로 편히",
  activeSubTab = "홈",
  onSubTab,
  sticky = true,
  style = {},
  ...rest
}) {
  const [sub, setSub] = React.useState(activeSubTab);
  const selectSub = t => {
    setSub(t);
    onSubTab && onSubTab(t);
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 50,
      background: "var(--mrt-white)",
      fontFamily: "var(--font-sans)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rowInner,
      height: "var(--gnb-top-h)",
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: "var(--web-search-w)",
      height: "var(--web-search-h)",
      background: "var(--mrt-gray-100)",
      borderRadius: "var(--r-pill)",
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    defaultValue: "",
    placeholder: searchPlaceholder,
    style: {
      flex: 1,
      border: "none",
      background: "none",
      outline: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--mrt-ink)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mrt-gray-500)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--mrt-gray-700)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "\uD30C\uD2B8\uB108 \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      height: 44,
      padding: "0 20px",
      borderRadius: "var(--r-pill)",
      border: "none",
      background: "var(--web-cta-blue)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-snug)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "\uB85C\uADF8\uC778 \uBC0F \uD68C\uC6D0\uAC00\uC785")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rowInner,
      height: "var(--gnb-cat-h)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(CatItem, _extends({
    key: c.label
  }, c))), /*#__PURE__*/React.createElement(CatItem, {
    icon: "",
    label: "\uB354\uBCF4\uAE30",
    more: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rowInner,
      height: "var(--gnb-sub-h)",
      display: "flex",
      alignItems: "stretch",
      gap: 22,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, subTabs.map(t => {
    const on = t === sub;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => selectSub(t),
      style: {
        border: "none",
        background: "none",
        padding: "0 1px",
        cursor: "pointer",
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-title)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        color: on ? "var(--mrt-ink)" : "var(--mrt-gray-500)",
        letterSpacing: "var(--ls-snug)"
      }
    }, t, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 2.5,
        background: "var(--mrt-ink)",
        borderRadius: 2
      }
    }));
  })));
}
function CatItem({
  icon,
  label,
  ad,
  more
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 40,
      padding: "0 12px",
      borderRadius: "var(--r-sm)",
      border: "none",
      background: hover ? "var(--mrt-gray-50)" : "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      whiteSpace: "nowrap",
      position: "relative"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-title)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--mrt-ink)",
      letterSpacing: "var(--ls-snug)"
    }
  }, label), more && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mrt-gray-500)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginLeft: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })), ad && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 4,
      fontSize: 8.5,
      fontWeight: "var(--fw-bold)",
      color: "var(--mrt-gray-400)",
      letterSpacing: "0.04em"
    }
  }, "AD"));
}
const rowInner = {
  maxWidth: "var(--web-content-w)",
  margin: "0 auto",
  paddingLeft: "var(--web-gutter)",
  paddingRight: "var(--web-gutter)"
};
Object.assign(__ds_scope, { GnbHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/GnbHeader.jsx", error: String((e && e.message) || e) }); }

// components/web/RegionCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip RegionCircle — circular destination category used on the
 * web home (전체 / 국내 / 유럽 / 동남아시아 …). A photo fill with a dark
 * scrim and centered white label; the selected item gets a purple ring.
 */
function RegionCircle({
  image,
  label,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "var(--region-size)",
      height: "var(--region-size)",
      borderRadius: "var(--r-circle)",
      overflow: "hidden",
      boxShadow: selected ? "0 0 0 3px var(--mrt-purple)" : "none",
      outline: selected ? "2px solid var(--mrt-white)" : "none",
      outlineOffset: selected ? "-5px" : 0,
      transition: "transform var(--dur-base) var(--ease-out)",
      transform: hover && !selected ? "translateY(-2px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.42))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "var(--fs-title)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-snug)",
      textShadow: "0 1px 3px rgba(0,0,0,0.4)"
    }
  }, label)), selected && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "6px solid var(--mrt-purple)"
    }
  })));
}
Object.assign(__ds_scope, { RegionCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/RegionCircle.jsx", error: String((e && e.message) || e) }); }

// components/web/WebProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MyRealTrip WebProductCard — the desktop "오늘 추천 상품" grid card.
 * Rounded image with a top-left merchandising badge and a top-right
 * bookmark, then title (2-line clamp), bold price, rating, and an
 * optional muted 광고 label. Hovers lift on desktop.
 */
function WebProductCard({
  image,
  title,
  price,
  score,
  reviews,
  badge,
  isNew = false,
  isAd = false,
  bookmarked = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [saved, setSaved] = React.useState(bookmarked);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "var(--web-card-radius)",
      overflow: "hidden",
      background: "var(--mrt-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-out)"
    }
  }), isNew && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      left: 8,
      background: "var(--mrt-red)",
      color: "#fff",
      fontSize: 10,
      fontWeight: "var(--fw-extrabold)",
      padding: "2px 5px",
      borderRadius: 4,
      letterSpacing: "0.02em"
    }
  }, "NEW"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: isNew ? 30 : 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone,
    variant: badge.variant || "soft"
  }, badge.label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      setSaved(v => !v);
    },
    "aria-label": "\uC800\uC7A5",
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      width: 32,
      height: 32,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: saved ? "var(--mrt-ink)" : "rgba(0,0,0,0.25)",
    stroke: "#fff",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 21l-6-4.3L6 21V5a2 2 0 012-2h8a2 2 0 012 2z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--mrt-ink)",
      letterSpacing: "var(--ls-snug)",
      lineHeight: 1.42,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      minHeight: "2.84em",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      alignItems: "baseline",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-snug)",
      color: "var(--mrt-ink)"
    }
  }, Number(price).toLocaleString("ko-KR")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-bold)",
      color: "var(--mrt-ink)"
    }
  }, "\uC6D0")), score != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    score: score,
    count: reviews,
    size: "sm"
  })), isAd && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      fontSize: "var(--fs-caption)",
      color: "var(--mrt-gray-400)",
      fontWeight: "var(--fw-medium)"
    }
  }, "\uAD11\uACE0")));
}
Object.assign(__ds_scope, { WebProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/web/WebProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
/* MyRealTrip app — root shell: phone frame, tab routing, overlays */
function App() {
  const {
    BottomNav
  } = window.MyRealTripDesignSystem_349059;
  const [tab, setTab] = React.useState("home");
  const [overlay, setOverlay] = React.useState(null); // {type:'collection'} | {type:'product', tour}
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [tab, overlay]);
  const openProduct = tour => setOverlay({
    type: "product",
    tour
  });
  const openCollection = () => setOverlay({
    type: "collection"
  });
  const closeOverlay = () => setOverlay(null);
  let body;
  if (tab === "home") body = /*#__PURE__*/React.createElement(HomeScreen, {
    onOpenProduct: openProduct,
    onOpenCollection: openCollection
  });else if (tab === "trip") body = /*#__PURE__*/React.createElement(MyTripScreen, null);else if (tab === "community") body = /*#__PURE__*/React.createElement(Placeholder, {
    title: "\uCEE4\uBBA4\uB2C8\uD2F0",
    emoji: "\uD83D\uDCAC",
    sub: "\uC5EC\uD589\uC790\uB4E4\uC758 \uC0DD\uC0DD\uD55C \uC774\uC57C\uAE30"
  });else body = /*#__PURE__*/React.createElement(Placeholder, {
    title: "\uB9C8\uC774\uD398\uC774\uC9C0",
    emoji: "\uD83D\uDE42",
    sub: "\uB0B4 \uC815\uBCF4 \xB7 \uCFE0\uD3F0 \xB7 \uC608\uC57D \uB0B4\uC5ED"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "device"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    className: "screen",
    ref: scrollRef
  }, body), /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onChange: k => {
      if (k !== "deal") {
        setTab(k);
        setOverlay(null);
      }
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "screen overlay-screen"
  }, overlay.type === "collection" ? /*#__PURE__*/React.createElement(CollectionScreen, {
    onBack: closeOverlay,
    onOpenProduct: openProduct
  }) : /*#__PURE__*/React.createElement(ProductDetailScreen, {
    tour: overlay.tour,
    onBack: closeOverlay
  }))));
}
function Placeholder({
  title,
  emoji,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      padding: "10px 20px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "8px 0 0",
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "var(--mrt-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "120px 0",
      color: "var(--mrt-gray-400)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 54
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      marginTop: 14,
      fontWeight: 600
    }
  }, sub)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CollectionScreen.jsx
try { (() => {
/* MyRealTrip — Collection / tour list (맛집여행-style landing) */
function CollectionScreen({
  onBack,
  onOpenProduct
}) {
  const {
    TopBar,
    Button,
    Input,
    Chip,
    ProductCard,
    SectionHeader
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_DATA;
  const cities = [["도쿄", 249], ["오사카", 204], ["후쿠오카", 146], ["파리", 88], ["런던", 72], ["서울", 70], ["교토", 67], ["방콕", 62]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--mrt-ink)",
      background: "var(--mrt-white)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\uB9DB\uC9D1\uC5EC\uD589",
    onBack: onBack,
    actions: [{
      label: "찜",
      icon: /*#__PURE__*/React.createElement(Icon, {
        d: Icons.heart,
        size: 23
      })
    }, {
      label: "공유",
      icon: /*#__PURE__*/React.createElement(Icon, {
        d: Icons.share,
        size: 22
      })
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "8px 16px 20px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: pillGhost
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.home,
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: pillGhost
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.heart,
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      ...pillGhost,
      gap: 6,
      paddingInline: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M8 5v14l11-7z",
      fill: "currentColor",
      stroke: "none"
    }),
    size: 16
  }), "\uD50C\uB808\uC774\uB9AC\uC2A4\uD2B8"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...pillGhost,
      gap: 6,
      paddingInline: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "11",
      width: "3.5",
      height: "9"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "6",
      width: "3.5",
      height: "14"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "14",
      width: "3.5",
      height: "6"
    })),
    size: 16
  }), "\uB7AD\uD0B9")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.035em",
      lineHeight: 1.28
    }
  }, "\uAE4C\uB2E4\uB85C\uC6B4 \uD55C\uAD6D\uC778 \uC785\uB9DB\uC774", /*#__PURE__*/React.createElement("br", null), "\uBA3C\uC800 \uAC80\uC99D\uD55C \uC804\uC138\uACC4 \uB9DB\uC9D1"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 16,
      color: "var(--mrt-gray-500)",
      fontWeight: 500
    }
  }, "\uB9C8\uC774\uB9AC\uC5BC\uD2B8\uB9BD \uC5EC\uD589\uC790\uB4E4\uC774 \uC9C1\uC811 \uB2E4\uB140\uC624\uACE0 \uB0A8\uAE34 \uB9AC\uBDF0."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 18,
      fontSize: 15,
      color: "var(--mrt-gray-700)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--mrt-red)"
    }
  }), "\uC9C0\uAE08\uAE4C\uC9C0 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--mrt-ink)"
    }
  }, "296\uAC1C \uB3C4\uC2DC"), "\uC5D0 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--mrt-ink)"
    }
  }, "2,748\uAC1C \uB9AC\uBDF0"), "\uAC00 \uC313\uC600\uC5B4\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "22px 16px 18px",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "box",
    placeholder: "\uB3C4\uC2DC, \uC74C\uC2DD, \uB9DB\uC9D1 \uC774\uB984",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    size: "lg"
  }, "\uAC80\uC0C9"), /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    size: "lg"
  }, "+ \uB9DB\uC9D1 \uB4F1\uB85D")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--mrt-gray-500)"
    }
  }, "\uC778\uAE30 \uB3C4\uC2DC"), cities.map(([c, n]) => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    label: c,
    count: n
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--mrt-gray-50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 16px 30px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\uCD5C\uADFC \uC62C\uB77C\uC628 \uB9AC\uBDF0",
    subtitle: "\uD55C\uAD6D\uC778 \uC5EC\uD589\uC790\uB4E4\uC774 \uBC29\uAE08 \uB2E4\uB140\uC628 \uB9DB\uC9D1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 18
    }
  }, D.tours.map(t => /*#__PURE__*/React.createElement(ProductCard, {
    key: t.id,
    layout: "row",
    image: t.image,
    title: t.title,
    score: t.score,
    reviews: t.reviews,
    price: t.price,
    badges: t.badges,
    onClick: () => onOpenProduct(t)
  })))));
}
const pillGhost = {
  display: "inline-flex",
  alignItems: "center",
  height: 44,
  padding: "0 14px",
  borderRadius: "var(--r-pill)",
  border: "1.5px solid var(--border-default)",
  background: "var(--mrt-white)",
  color: "var(--mrt-ink)",
  fontSize: 14.5,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "var(--font-sans)",
  whiteSpace: "nowrap"
};
Object.assign(window, {
  CollectionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CollectionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
/* MyRealTrip — Home (홈) */
function HomeScreen({
  onOpenProduct,
  onOpenCollection
}) {
  const {
    CategoryTile,
    ProductCard,
    SectionHeader,
    Badge
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_DATA;
  const [tab, setTab] = React.useState("해외");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--mrt-ink)",
      background: "var(--mrt-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4px 14px 10px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: "var(--mrt-gray-50)",
      borderRadius: "var(--r-pill)",
      padding: 4
    }
  }, ["해외", "국내"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      border: "none",
      cursor: "pointer",
      padding: "8px 18px",
      borderRadius: "var(--r-pill)",
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      whiteSpace: "nowrap",
      background: tab === t ? "var(--mrt-ink)" : "transparent",
      color: tab === t ? "#fff" : "var(--mrt-gray-500)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      color: "var(--mrt-ink)"
    }
  }, ["searchFull", "bookmark", "send", "bell"].map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons[k],
    size: 23
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--mrt-gray-50)",
      borderRadius: "var(--r-md)",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: "linear-gradient(135deg,#6CA8FF,#2D6BE0)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.35
    }
  }, "\uB8F8 \uC5C5\uADF8\uB808\uC774\uB4DC\uB85C \uD55C \uCE35 \uB354 \uC5EC\uC720\uB86D\uAC8C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--mrt-gray-500)",
      marginTop: 2
    }
  }, "\uC2E0\uB77C\uBAA8\uB178\uADF8\uB7A8 \uAC15\uB989 \uB2E8\uB3C5 \uD2B9\uAC00 19\uB9CC\uC6D0\uB300")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mrt-gray-400)",
      fontSize: 20
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 12px 18px"
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement(CategoryTile, {
    key: s.label,
    icon: s.icon,
    label: s.label,
    onClick: () => onOpenCollection()
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateRows: "1fr 1fr",
      gap: "16px 6px",
      overflowX: "auto",
      padding: "0 16px 20px",
      scrollbarWidth: "none"
    }
  }, D.quickLinks.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.label,
    onClick: () => onOpenCollection(),
    style: {
      ...plainBtn,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 7,
      width: 64
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1
    }
  }, q.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--mrt-gray-900)",
      textAlign: "center",
      lineHeight: 1.2
    }
  }, q.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--mrt-gray-50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...plainBtn,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, tab === "해외" ? "전세계" : "대한민국"), /*#__PURE__*/React.createElement(Icon, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    size: 20,
    sw: 2.4
  })), /*#__PURE__*/React.createElement(Banner, {
    banners: D.banners
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 16px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\uC81C\uC8FC \uBC14\uB2E4\uC5D0\uC11C\uC758 \uC790\uC720, \uD638\uD551\uD22C\uC5B4\uB85C \uB5A0\uB098\uC694",
    size: "md",
    action: "\uB354\uBCF4\uAE30"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 16
    }
  }, D.tours.slice(0, 3).map(t => /*#__PURE__*/React.createElement(ProductCard, {
    key: t.id,
    layout: "row",
    image: t.image,
    title: t.title,
    score: t.score,
    reviews: t.reviews,
    price: t.price,
    badges: t.badges,
    onClick: () => onOpenProduct(t)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--mrt-gray-50)",
      margin: "24px 0 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 16px 30px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "\uC544\uC774\uC640 \uD568\uAED8 \uB5A0\uB098\uC694!",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px 0",
      marginTop: 18
    }
  }, D.kids.map(k => /*#__PURE__*/React.createElement(CategoryTile, {
    key: k.label,
    shape: "circle",
    icon: k.icon,
    label: k.label,
    badge: k.badge,
    onClick: () => onOpenCollection()
  })))));
}
function Banner({
  banners
}) {
  const [i, setI] = React.useState(0);
  const b = banners[i % banners.length];
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i + 1),
    style: {
      ...plainBtn,
      width: "100%",
      display: "block",
      position: "relative",
      height: 132,
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      background: `linear-gradient(120deg, ${b.from}, ${b.to})`,
      textAlign: "left",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "rgba(255,255,255,0.85)",
      marginBottom: 8
    }
  }, b.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.03em",
      lineHeight: 1.3,
      whiteSpace: "pre-line"
    }
  }, b.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      background: "rgba(0,0,0,0.28)",
      color: "#fff",
      fontSize: 12,
      fontWeight: 700,
      padding: "3px 10px",
      borderRadius: "var(--r-pill)"
    }
  }, i % banners.length + 1, "/", banners.length));
}
const iconBtn = {
  width: 42,
  height: 42,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "var(--mrt-ink)"
};
const plainBtn = {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  color: "var(--mrt-ink)",
  fontFamily: "var(--font-sans)"
};
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MyTripScreen.jsx
try { (() => {
/* MyRealTrip — My Trip (내 여행) */
function MyTripScreen() {
  const {
    Button
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_DATA;
  const [tab, setTab] = React.useState("예정된 여행");
  const tabs = ["예정된 여행", "지난 여행", "취소된 여행", "여행 컬렉션"];
  const filters = ["맞춤여행", "항공권", "투어·티켓", "숙소"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--mrt-ink)",
      background: "var(--mrt-white)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 14px 4px 20px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, "\uB0B4 \uC5EC\uD589"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.headset,
    size: 23
  })), /*#__PURE__*/React.createElement("button", {
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.bell,
    size: 23
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      padding: "12px 20px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      ...plainBtn,
      paddingBottom: 12,
      position: "relative",
      fontSize: 16,
      fontWeight: 700,
      color: tab === t ? "var(--mrt-ink)" : "var(--mrt-gray-400)"
    }
  }, t, tab === t && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -1,
      height: 2.5,
      background: "var(--mrt-ink)",
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "18px 20px 0"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: f
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: i === 0 ? "var(--mrt-ink)" : "var(--mrt-gray-500)"
    }
  }, f), i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 14,
      background: "var(--border-default)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "44px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, "\uC544\uC9C1 \uC608\uC815\uB41C \uC5EC\uD589\uC774 \uC5C6\uC73C\uC2DC\uB124\uC694!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--mrt-gray-500)",
      marginTop: 8
    }
  }, "\uC5EC\uD589\uC9C0\uB97C \uCD94\uCC9C\uD574\uB4DC\uB9B4\uAE4C\uC694?")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "8px 18px 0",
      display: "flex",
      alignItems: "center",
      gap: 14,
      border: "1.5px solid var(--border-default)",
      borderRadius: "var(--r-lg)",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34
    }
  }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: "var(--mrt-blue)",
      letterSpacing: "-0.02em"
    }
  }, "LA\uC5EC\uD589 + \uC190\uD765\uBBFC \uC9C1\uAD00 0\uC6D0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      marginTop: 2
    }
  }, "\uBC14\uB85C \uC751\uBAA8\uD558\uB7EC \uAC00\uAE30")), /*#__PURE__*/React.createElement(Icon, {
    d: Icons.chevron,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "14px 18px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1.5px solid var(--border-default)",
      borderRadius: "var(--r-lg)",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--mrt-gray-700)"
    }
  }, "\uBBF8\uC815 \xB7 \uC608\uC0B0 500\uB9CC\uC6D0 \xB7 5\uC77C \xB7 2\uC778"), /*#__PURE__*/React.createElement(Button, {
    tone: "secondary",
    size: "sm"
  }, "\uB2E4\uC2DC \uAC80\uC0C9")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 18px 30px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, "\uC774 \uC608\uC0B0\uC774\uBA74 \uAC08 \uC218 \uC788\uC5B4\uC694!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, D.budget.map(b => /*#__PURE__*/React.createElement(BudgetCard, {
    key: b.city,
    b: b
  })))));
}
function BudgetCard({
  b
}) {
  const won = n => n.toLocaleString("ko-KR") + "원";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1.5px solid var(--border-default)",
      borderRadius: "var(--r-lg)",
      padding: "18px 18px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30
    }
  }, b.flag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, b.city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--mrt-gray-500)",
      marginTop: 2
    }
  }, b.country))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      color: "var(--mrt-blue)",
      letterSpacing: "-0.02em"
    }
  }, won(b.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--mrt-gray-500)",
      marginTop: 2
    }
  }, "1\uC778\uB2F9 ", b.per, "\uC6D0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border-subtle)",
      fontSize: 13.5,
      color: "var(--mrt-gray-700)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2708\uFE0F ", won(b.air)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE8 ", won(b.hotel)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF7D\uFE0F ", won(b.etc))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--mrt-gray-500)",
      marginTop: 10
    }
  }, "\uCD5C\uC800\uAC00 \uCD9C\uBC1C\uC77C: ", b.date));
}
Object.assign(window, {
  MyTripScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MyTripScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProductDetailScreen.jsx
try { (() => {
/* MyRealTrip — Product detail */
function ProductDetailScreen({
  tour,
  onBack
}) {
  const {
    TopBar,
    Button,
    Rating,
    Badge
  } = window.MyRealTripDesignSystem_349059;
  const t = tour || window.MRT_DATA.tours[0];
  const [saved, setSaved] = React.useState(false);
  const meta = [{
    icon: Icons.people,
    label: `최소 인원 ${t.min}명`
  }, {
    icon: Icons.clock,
    label: `${t.duration} 소요`
  }, {
    icon: Icons.walk,
    label: "도보이동"
  }, {
    icon: Icons.globe,
    label: t.lang
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--mrt-ink)",
      background: "var(--mrt-white)",
      minHeight: "100%",
      paddingBottom: 88,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    actions: [{
      label: "공유",
      icon: /*#__PURE__*/React.createElement(Icon, {
        d: Icons.send,
        size: 22
      })
    }, {
      label: "저장",
      icon: /*#__PURE__*/React.createElement(Icon, {
        d: Icons.bookmark,
        size: 22
      })
    }, {
      label: "공유",
      icon: /*#__PURE__*/React.createElement(Icon, {
        d: Icons.share,
        size: 21
      })
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--mrt-gray-500)",
      fontWeight: 600
    }
  }, "\uB300\uD55C\uBBFC\uAD6D \u203A ", t.city), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "10px 0 0",
      fontSize: 23,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.34
    }
  }, t.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      padding: "16px 18px 18px",
      overflowX: "auto",
      scrollbarWidth: "none"
    }
  }, [["저장", Icons.bookmark], ["문의", Icons.send], ["만나는시간", Icons.clock], ["만나는장소", Icons.pin]].map(([l, ic]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 44,
      padding: "0 18px",
      borderRadius: "var(--r-pill)",
      background: "var(--mrt-gray-50)",
      fontSize: 14.5,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ic,
    size: 17
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2,
      aspectRatio: "1/1",
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      background: "var(--mrt-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, window.MRT_DATA.tours.filter(x => x.id !== t.id).slice(0, 2).map(x => /*#__PURE__*/React.createElement("div", {
    key: x.id,
    style: {
      flex: 1,
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      background: "var(--mrt-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: x.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0",
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    score: t.score,
    count: t.reviews
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, t.badges.map((b, i) => /*#__PURE__*/React.createElement(Badge, {
    key: i,
    tone: b.tone,
    variant: b.variant
  }, b.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px 16px",
      padding: "22px 18px 26px"
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "var(--mrt-gray-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: m.icon,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--mrt-ink)"
    }
  }, m.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--mrt-gray-50)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 18px 10px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, "\uD3EC\uD568 \xB7 \uBD88\uD3EC\uD568 \uC0AC\uD56D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694"), /*#__PURE__*/React.createElement(Incl, {
    ok: true,
    label: "\uC232\uCCB4\uD5D8\uBE44"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginBottom: 12
    }
  }, "\uBD88\uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694"), /*#__PURE__*/React.createElement(Incl, {
    label: "\uAC1C\uC778 \uACBD\uBE44"
  }), /*#__PURE__*/React.createElement(Incl, {
    label: "\uAD50\uD1B5\uBE44"
  }), /*#__PURE__*/React.createElement(Incl, {
    label: "\uC8FC\uCC28\uBE44"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 18px 16px",
      background: "var(--mrt-white)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-0.03em"
    }
  }, t.price.toLocaleString("ko-KR")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "\uC6D0~")), /*#__PURE__*/React.createElement(Button, {
    tone: "primary",
    size: "xl",
    block: true,
    style: {
      flex: 1
    }
  }, "\uC635\uC158 \uC120\uD0DD")));
}
function Incl({
  ok,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "5px 0",
      fontSize: 16,
      color: "var(--mrt-ink)",
      fontWeight: 500
    }
  }, ok ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "11",
    fill: "var(--mrt-green)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11.4l3.2 3.2L16 8",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "11",
    fill: "var(--mrt-red)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 7.5l7 7M14.5 7.5l-7 7",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", null, "- ", label));
}
Object.assign(window, {
  ProductDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProductDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shared.jsx
try { (() => {
/* Shared chrome + line icons for the MyRealTrip app kit */
const Icon = ({
  d,
  size = 24,
  sw = 1.9
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const Icons = {
  search: /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }),
  searchFull: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })),
  back: /*#__PURE__*/React.createElement("path", {
    d: "M15 4l-8 8 8 8"
  }),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.5-9.5-9A5 5 0 0112 6a5 5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"
  }),
  bell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 01-3.4 0"
  })),
  send: /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
  }),
  bookmark: /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
  }),
  share: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"
  })),
  home: /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5L12 3l9 7.5M5 9.5V20h5v-5.5h4V20h5V9.5"
  }),
  headset: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 13a8 8 0 0116 0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "13",
    width: "3.5",
    height: "6",
    rx: "1.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "13",
    width: "3.5",
    height: "6",
    rx: "1.6"
  })),
  chevron: /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }),
  clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  people: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 20c0-3.3 2.5-5.4 5.5-5.4s5.5 2.1 5.5 5.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.5a3 3 0 010 6"
  })),
  pin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "2"
  })),
  walk: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "4",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 21l1.5-6-2.5-2 1-5 3 2 2 1M9 14l1-5"
  })),
  globe: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"
  }))
};
function StatusBar({
  dark = false
}) {
  const c = dark ? "#fff" : "var(--mrt-ink)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px 0 26px",
      flexShrink: 0,
      fontFamily: "var(--font-sans)",
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "11:33"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
    fill: c
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 2.5C10.8 2.5 12.9 3.4 14.4 4.9L13.2 6.1C12 4.9 10.3 4.2 8.5 4.2S5 4.9 3.8 6.1L2.6 4.9C4.1 3.4 6.2 2.5 8.5 2.5Z",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "9",
    r: "1.6"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    fill: c
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "1",
    width: "17",
    height: "10",
    rx: "2.6",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2.5",
    width: "13",
    height: "7",
    rx: "1.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18.5",
    y: "4",
    width: "1.5",
    height: "4",
    rx: "0.7",
    opacity: "0.5"
  }))));
}
Object.assign(window, {
  Icon,
  Icons,
  StatusBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
/* MyRealTrip UI kit — shared mock data (plain JS, no JSX) */
window.MRT_DATA = {
  services: [{
    icon: "✈️",
    label: "항공"
  }, {
    icon: "🗽",
    label: "투어·티켓"
  }, {
    icon: "🏠",
    label: "국내숙소"
  }, {
    icon: "🏨",
    label: "해외숙소"
  }, {
    icon: "🚗",
    label: "글로벌렌터카"
  }],
  quickLinks: [{
    icon: "🏝️",
    label: "제주도 초특가"
  }, {
    icon: "🏘️",
    label: "한인민박"
  }, {
    icon: "📱",
    label: "간편 eSIM"
  }, {
    icon: "🚙",
    label: "국내 렌터카"
  }, {
    icon: "🍣",
    label: "일본미식"
  }, {
    icon: "🧖",
    label: "뷰티·웰니스"
  }, {
    icon: "🛡️",
    label: "여행자보험"
  }, {
    icon: "🎢",
    label: "입장권 특가"
  }],
  banners: [{
    city: "비비드 시드니",
    title: "도시가 빛으로 물드는\n비비드 시드니 특가 오픈!",
    sub: "특가 상품 구매시 면세점 -10% 할인",
    from: "#3B1E6E",
    to: "#7A2FA8"
  }, {
    city: "제주",
    title: "제주 바다에서의 자유,\n호핑투어로 떠나요",
    sub: "여름 성수기 전 마지막 특가",
    from: "#0E5E63",
    to: "#11888F"
  }],
  tours: [{
    id: "t1",
    city: "안덕",
    title: "[안덕] 형제섬 호핑투어(요트), 동남아도 부럽지 않은 제주 바다",
    score: 4.6,
    reviews: 312,
    price: 69000,
    badges: [{
      tone: "guarantee",
      label: "최저가보장제"
    }, {
      tone: "instant",
      label: "즉시 확정"
    }],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=70&auto=format&fit=crop",
    duration: "4시간",
    min: 2,
    lang: "한국어"
  }, {
    id: "t2",
    city: "서귀포",
    title: "[서귀포] 제주도 호핑투어(스노쿨링)",
    score: 4.7,
    reviews: 64,
    price: 64000,
    badges: [{
      tone: "sale",
      variant: "solid",
      label: "특가"
    }],
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=70&auto=format&fit=crop",
    duration: "3시간",
    min: 2,
    lang: "한국어"
  }, {
    id: "t3",
    city: "서귀포",
    title: "[서귀포] 체험 스쿠버다이빙 가디언다이브",
    score: 4.9,
    reviews: 361,
    price: 95000,
    badges: [{
      tone: "instant",
      label: "즉시 확정"
    }],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=70&auto=format&fit=crop",
    duration: "2시간 30분",
    min: 1,
    lang: "한국어"
  }, {
    id: "t4",
    city: "부산",
    title: "[영남/호남/충청] 숲파티포레와 숲탐험대가 되어보는 시간, 숲체험교실",
    score: 4.8,
    reviews: 120,
    price: 35000,
    badges: [{
      tone: "new",
      label: "키즈"
    }],
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70&auto=format&fit=crop",
    duration: "1시간 40분",
    min: 4,
    lang: "한국어"
  }],
  kids: [{
    icon: "🤸",
    label: "제주도 특가",
    badge: "특가 진행중!"
  }, {
    icon: "🏛️",
    label: "역사 도슨트"
  }, {
    icon: "🎭",
    label: "공연/전시"
  }, {
    icon: "🌳",
    label: "숲체험/팜크닉"
  }, {
    icon: "🏕️",
    label: "해외 영어캠프",
    badge: "여름방학 오픈!"
  }, {
    icon: "🏨",
    label: "국내 숙소"
  }, {
    icon: "🎟️",
    label: "입장권 특가"
  }, {
    icon: "⋯",
    label: "전체보기"
  }],
  budget: [{
    flag: "🇳🇱",
    city: "암스테르담",
    country: "네덜란드",
    total: 4737560,
    per: "237만",
    air: 2847200,
    hotel: 954360,
    etc: 936000,
    date: "6/26(금)"
  }, {
    flag: "🇺🇸",
    city: "로스앤젤레스",
    country: "미국",
    total: 4664992,
    per: "233만",
    air: 3184400,
    hotel: 464560,
    etc: 1016000,
    date: "6/24(수)"
  }, {
    flag: "🇯🇵",
    city: "오사카",
    country: "일본",
    total: 1284200,
    per: "64만",
    air: 384200,
    hotel: 540000,
    etc: 360000,
    date: "6/19(목)"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MyRealTrip web home — content sections */

const COL = {
  maxWidth: "var(--web-content-w)",
  margin: "0 auto",
  paddingLeft: "var(--web-gutter)",
  paddingRight: "var(--web-gutter)"
};
const sectionTitle = {
  margin: 0,
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: "-0.035em",
  color: "var(--mrt-ink)"
};

/* ── Full-width hero ad banner (RAWROW) ─────────────────── */
function HeroAd() {
  const h = window.MRT_WEB.hero;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(90deg,#eceef1,#e3e6ea 60%,#d6dade)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...COL,
      position: "relative",
      height: 360,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1.28,
      color: "var(--mrt-ink)"
    }
  }, h.tagline1, /*#__PURE__*/React.createElement("br", null), h.tagline2), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "0.12em",
      color: "var(--mrt-gray-700)"
    }
  }, h.brand)), /*#__PURE__*/React.createElement("img", {
    src: h.image,
    alt: "",
    style: {
      position: "absolute",
      right: 24,
      top: "50%",
      transform: "translateY(-50%)",
      height: 250,
      objectFit: "contain",
      filter: "saturate(0.4)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 28,
      bottom: 18,
      fontSize: 12,
      color: "var(--mrt-gray-400)"
    }
  }, "\uAD11\uACE0")));
}

/* ── 로마 ▾ + filter chips + ranked 2-col list ──────────── */
function RankedSection({
  onOpen
}) {
  const {
    Chip
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_WEB;
  const [f, setF] = React.useState("투어·티켓");
  const filters = ["투어·티켓", "숙소", "패키지", "한인민박"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...COL,
      paddingTop: 44,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...plainBtn,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.04em"
    }
  }, "\uB85C\uB9C8"), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mrt-ink)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      margin: "18px 0 26px"
    }
  }, filters.map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x,
    label: x,
    selected: x === f,
    onClick: () => setF(x)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: 56,
      rowGap: 22
    }
  }, D.ranked.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.rank,
    onClick: onOpen,
    style: {
      ...plainBtn,
      display: "flex",
      alignItems: "center",
      gap: 18,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: r.image,
    alt: "",
    style: {
      width: 76,
      height: 76,
      borderRadius: 12,
      objectFit: "cover",
      flexShrink: 0,
      background: "var(--mrt-gray-100)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: "var(--mrt-ink)",
      width: 26,
      flexShrink: 0
    }
  }, r.rank), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--mrt-ink)",
      letterSpacing: "-0.02em",
      lineHeight: 1.4
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: 17,
      fontWeight: 800,
      color: "var(--mrt-ink)",
      letterSpacing: "-0.02em"
    }
  }, r.price.toLocaleString("ko-KR"), "\uC6D0"))))));
}

/* ── 오늘 추천 상품 (4-up grid) ─────────────────────────── */
function RecommendSection({
  onOpen
}) {
  const {
    WebProductCard
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_WEB;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...COL,
      paddingTop: 36,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "\uB85C\uB9C8 \uC5EC\uD589, \uC624\uB298 \uCD94\uCC9C \uC0C1\uD488"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--web-grid-gap)",
      marginTop: 22
    }
  }, D.products.map((p, i) => /*#__PURE__*/React.createElement(WebProductCard, _extends({
    key: i
  }, p, {
    onClick: onOpen
  })))));
}

/* ── 쉽게 떠나는 패키지 (wide banner) ───────────────────── */
function PackageBanner() {
  const p = window.MRT_WEB.package;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...COL,
      paddingTop: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionTitle
  }, "\uC27D\uAC8C \uB5A0\uB098\uB294 \uD328\uD0A4\uC9C0"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 22,
      height: 300,
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      bottom: 30,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.32
    }
  }, p.title1, /*#__PURE__*/React.createElement("br", null), p.title2), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 15,
      fontWeight: 500,
      color: "rgba(255,255,255,0.9)"
    }
  }, p.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 22,
      bottom: 22,
      background: "rgba(0,0,0,0.5)",
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      padding: "5px 13px",
      borderRadius: "var(--r-pill)"
    }
  }, p.page)));
}

/* ── LA 손흥민 hero + coupon strip + region rail + countries ── */
function PromoSection() {
  const {
    CouponCard,
    RegionCircle,
    Chip
  } = window.MyRealTripDesignSystem_349059;
  const D = window.MRT_WEB;
  const h = D.laHero;
  const [region, setRegion] = React.useState("전체");
  const [country, setCountry] = React.useState("전체");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...COL,
      paddingTop: 44,
      paddingBottom: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 270,
      borderRadius: 16,
      overflow: "hidden",
      background: "linear-gradient(115deg,#0a2417 0%,#10341f 45%,#1b4a2c 100%)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: h.image,
    alt: "",
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      width: "52%",
      objectFit: "cover",
      objectPosition: "center",
      opacity: 0.92,
      maskImage: "linear-gradient(90deg, transparent, #000 30%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 30%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "rgba(255,255,255,0.92)"
    }
  }, h.line1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "#34D17A",
      marginTop: 12
    }
  }, h.line2), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "#fff",
      marginTop: 4
    }
  }, h.line3)), /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      right: 26,
      bottom: 24,
      height: 40,
      padding: "0 18px",
      borderRadius: "var(--r-pill)",
      border: "none",
      background: "rgba(0,0,0,0.55)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uB354 \uC54C\uC544\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "22px 4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30
    }
  }, "\uD83E\uDDF3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--mrt-gray-600)",
      fontWeight: 500
    }
  }, "\uBCF5\uC7A1\uD55C \uC5EC\uD589 \uC900\uBE44, \uD328\uD0A4\uC9C0 \uD558\uB098\uB85C \uB05D!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      color: "var(--mrt-blue-strong)",
      letterSpacing: "-0.02em",
      marginTop: 2
    }
  }, "\uC989\uC2DC \uC801\uC6A9\uB418\uB294 \uCFE0\uD3F0 \uBC1B\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(CouponCard, {
    icon: "\uD83D\uDC2A",
    label: "\uBABD\uACE8 \uD328\uD0A4\uC9C0 \uD560\uC778",
    amount: 45000
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 28,
      alignItems: "flex-start"
    }
  }, D.regions.map(r => /*#__PURE__*/React.createElement(RegionCircle, {
    key: r.label,
    image: r.image,
    label: r.label,
    selected: r.label === region,
    onClick: () => setRegion(r.label)
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      ...plainBtn,
      width: 44,
      height: 44,
      borderRadius: "var(--r-circle)",
      boxShadow: "var(--shadow-md)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--mrt-ink)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 26,
      flexWrap: "wrap"
    }
  }, D.countries.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    label: c,
    selected: c === country,
    onClick: () => setCountry(c)
  }))));
}
const plainBtn = {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  color: "var(--mrt-ink)",
  fontFamily: "var(--font-sans)"
};
Object.assign(window, {
  HeroAd,
  RankedSection,
  RecommendSection,
  PackageBanner,
  PromoSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebHome.jsx
try { (() => {
/* MyRealTrip web home — root */
function WebApp() {
  const {
    GnbHeader
  } = window.MyRealTripDesignSystem_349059;
  const [toast, setToast] = React.useState(false);
  const openProduct = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1700);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mrt-white)",
      minHeight: "100vh",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(GnbHeader, null), /*#__PURE__*/React.createElement(HeroAd, null), /*#__PURE__*/React.createElement(RankedSection, {
    onOpen: openProduct
  }), /*#__PURE__*/React.createElement(RecommendSection, {
    onOpen: openProduct
  }), /*#__PURE__*/React.createElement(PackageBanner, null), /*#__PURE__*/React.createElement(PromoSection, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: 36,
      transform: "translateX(-50%)",
      background: "rgba(26,27,30,0.94)",
      color: "#fff",
      padding: "13px 22px",
      borderRadius: "var(--r-pill)",
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      zIndex: 100,
      boxShadow: "var(--shadow-lg)"
    }
  }, "\uC0C1\uD488 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4 \u2192"));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(WebApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
/* MyRealTrip web kit — shared mock data (plain JS) */
window.MRT_WEB = {
  hero: {
    // RAWROW-style full-width ad banner
    tagline1: "먼 여정일수록,",
    tagline2: "도구는 완벽해야 하니까.",
    brand: "RAWROW",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=900&q=70&auto=format&fit=crop"
  },
  ranked: [{
    rank: 1,
    title: "이탈리아 남부 당일 가이드투어",
    price: 160000,
    image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd8?w=200&q=70&auto=format&fit=crop"
  }, {
    rank: 2,
    title: "[바티칸] 미술관+성베드로 대성당 입장권",
    price: 72000,
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=200&q=70&auto=format&fit=crop"
  }, {
    rank: 3,
    title: "로마 콜로세움 아레나 입장 가이드투어",
    price: 89000,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&q=70&auto=format&fit=crop"
  }, {
    rank: 4,
    title: "바티칸 오전 패스트트랙 가이드투어",
    price: 69000,
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=200&q=70&auto=format&fit=crop"
  }],
  products: [{
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=70&auto=format&fit=crop",
    badge: {
      tone: "free",
      label: "무료취소"
    },
    title: "이탈리아 로마 베네치아 이심 eSIM 5G 무제한 데이터 e심 문자 VPN 무료",
    price: 2200,
    score: 5.0,
    reviews: 6,
    isAd: true
  }, {
    image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?w=500&q=70&auto=format&fit=crop",
    badge: {
      tone: "instant",
      label: "즉시 확정"
    },
    isNew: true,
    title: "[유럽33개국 eSIM] 데이터 전용 매일 1GB or 2GB씩 QR (터키, 튀르키예)",
    price: 16400,
    score: 5.0,
    reviews: 1,
    isAd: true
  }, {
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=500&q=70&auto=format&fit=crop",
    title: "로마필수코스 바티칸+로마야경 완벽한하루",
    price: 99000,
    score: 4.6,
    reviews: 215,
    isAd: true
  }, {
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=500&q=70&auto=format&fit=crop",
    badge: {
      tone: "guarantee",
      label: "최저가보장제"
    },
    title: "떼아모10년:판매 1등야경 로마인생샷 테르미니역미팅 당일예약OK",
    price: 45000,
    score: 4.6,
    reviews: 2094,
    isAd: true
  }],
  package: {
    title1: "푸꾸옥 윈덤 리조트 휴양",
    title2: "최저가 60만원 대 부터",
    sub: "올인클루시브 + 18시 체크아웃 + 케이블카",
    image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1100&q=70&auto=format&fit=crop",
    page: "3/7"
  },
  laHero: {
    line1: "왕복 항공권과 호텔, LAFC 직관 패키지까지!",
    line2: "LA 여행 + 손흥민 직관",
    line3: "모두 무료로 보내드립니다",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900&q=70&auto=format&fit=crop"
  },
  regions: [{
    label: "전체",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "국내",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "유럽",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "동남아시아",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "북미",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "동아시아",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=240&q=70&auto=format&fit=crop"
  }, {
    label: "오세아니아",
    image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=240&q=70&auto=format&fit=crop"
  }],
  countries: ["전체", "대한민국", "미국", "베트남", "태국", "이탈리아", "캐나다", "일본", "호주", "인도네시아", "중국", "프랑스"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.CouponCard = __ds_scope.CouponCard;

__ds_ns.GnbHeader = __ds_scope.GnbHeader;

__ds_ns.RegionCircle = __ds_scope.RegionCircle;

__ds_ns.WebProductCard = __ds_scope.WebProductCard;

})();
