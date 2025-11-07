import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "topbar" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-9 col-md-9"><div class="topbar-info-content"><p>Our agents work with you to customize policies <a href="#"> Explore Our Services</a></p></div></div><div class="col-lg-3 col-md-3"><div class="topbar-social-links"><ul><li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li></ul></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]), { __name: "TopHeader" });
const _imports_0$1 = publicAssetsURL("/images/acom-logo.webp");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "main-header" }, _attrs))}><div class="header-sticky"><nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand" href="/"><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" width="139" height="40"></a><div class="collapse navbar-collapse main-menu"><div class="nav-menu-wrapper"><ul class="navbar-nav mr-auto" id="menu"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/about-us">About Us</a></li><li class="nav-item"><a class="nav-link" href="/loan-programs">Loan Programs</a></li><li class="nav-item"><a class="nav-link" href="/deals-funded">Deals Funded</a></li><li class="nav-item"><a class="nav-link" href="/commerical-lending-mastery">Commercial Lending Mastery</a></li></ul></div><div class="header-btn d-inline-flex"><a href="/loan-application" class="btn-default">Loan Application</a></div></div><div class="navbar-toggle"></div></div></nav><div class="responsive-menu"></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Navbar" });
const _imports_0 = publicAssetsURL("/images/icon-newsletter-mail.svg");
const _imports_1 = publicAssetsURL("/images/footer-logo.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="footer-newsletter-box"><div class="row align-items-center"><div class="col-lg-6"><div class="footer-newsletter-item"><div class="icon-box"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="footer-newsletter-item-content"><h3>Stay informed with our newsletter</h3></div></div></div><div class="col-lg-6"><div class="footer-newsletter-form"><form id="newslettersForm" action="#" method="POST"><div class="form-group"><input type="email" name="mail" class="form-control" id="mail" placeholder="Enter your email" required><button type="submit" class="btn-default btn-highlighted">subscribe</button></div></form></div></div></div></div></div><div class="col-lg-3 col-md-12"><div class="about-footer"><div class="footer-logo"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="about-footer-content"><p>We are committed to providing personalized insurance solutions.</p></div></div></div><div class="col-lg-2 col-md-6 col-12"><div class="footer-links"><h3>quick links</h3><ul><li><a href="/">home</a></li><li><a href="/about-us">about us</a></li><li><a href="/loan-programs">services</a></li><li><a href="/deals-funded">Deals Funded</a></li></ul></div></div><div class="col-lg-2 col-md-6 col-12"><div class="footer-links"><h3>usefull links</h3><ul><li><a href="#">support</a></li><li><a href="#">services</a></li><li><a href="#">term &amp; condition </a></li><li><a href="#">privacy policy</a></li></ul></div></div><div class="col-lg-2 col-md-6 col-12"><div class="footer-links"><h3>our services</h3><ul><li><a href="#">Construction Loans</a></li><li><a href="#">Bridge Loans</a></li><li><a href="#">SBA &amp; USDA Loans</a></li><li><a href="#">Equipment Finance</a></li></ul></div></div><div class="col-lg-3 col-md-6 col-12"><div class="footer-links"><h3>get in touch</h3><ul><li><a href="#">+01 789 852 654</a></li><li><a href="#">support@domain.com</a></li><li><a href="#">Insurance way, suite 100, Metropolis, NY 10001, USA</a></li></ul></div></div></div><div class="footer-copyright"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="footer-copyright-text"><p>Copyright © 2025 All Rights Reserved | Developed By <a href="" target="_blank" class="text-white">Vibrantick Infotech Solutions</a></p></div></div><div class="col-lg-6 col-md-6"><div class="footer-social-links"><ul><li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li><li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li></ul></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Footer" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopHeader = __nuxt_component_0;
  const _component_Navbar = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TopHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-D5Rcy6qa.mjs.map
