import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_2 } from './virtual_public-LxgLpsIY.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/icon-location.svg");
const _imports_1 = publicAssetsURL("/images/contact-cta-bg-img.jpg");
const _imports_3 = publicAssetsURL("/images/icon-email.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="page-header parallaxie"><div class="container"><div class="row align-items-center"><div class="col-lg-12"><div class="page-header-box"><h1 class="text-anime-style-2" data-cursor="-opaque">Contact <span>Us</span></h1><nav class="wow fadeInUp"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">home</a></li><li class="breadcrumb-item active" aria-current="page">contact us</li></ol></nav></div></div></div></div></div><div class="page-contact-us"><div class="container"><div class="row align-items-center"><div class="col-lg-6"><div class="contact-information"><div class="section-title"><h3 class="wow fadeInUp">contact us</h3><h2 class="text-anime-style-2" data-cursor="-opaque">Personalized <span>insurance </span>support and assistance today</h2><p class="wow fadeInUp" data-wow-delay="0.25s">Reach out to our team for tailored insurance solutions, expert advice, and prompt assistance with all your coverage needs.</p></div><div class="contact-info-list"><div class="contact-list-item wow fadeInUp" data-wow-delay="0.5s"><div class="icon-box"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="contact-list-content"><p>Insurance way, suite 100, Metropolis, NY 10001, USA</p></div></div></div><div class="contact-cta-box"><div class="contact-cta-image"><figure><img${ssrRenderAttr("src", _imports_1)} alt=""></figure></div><div class="contact-info-box"><div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s"><div class="icon-box"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="contact-info-content"><p>contact number:</p><h3>+01 789 852 654</h3></div></div><div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s"><div class="icon-box"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="contact-info-content"><p>email:</p><h3>support@domain.com</h3></div></div></div></div></div></div><div class="col-lg-6"><div class="contact-us-form"><div class="section-title"><h2 class="text-anime-style-2" data-cursor="-opaque">Get in <span>touch</span> with us </h2><p class="wow fadeInUp">Complete the form to start your personalized insurance journey.</p></div><form id="contactForm" action="#" method="POST" data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.25s"><div class="row"><div class="form-group col-md-6 mb-4"><input type="text" name="fname" class="form-control" id="fname" placeholder="First Name" required><div class="help-block with-errors"></div></div><div class="form-group col-md-6 mb-4"><input type="text" name="lname" class="form-control" id="lname" placeholder="Last Name" required><div class="help-block with-errors"></div></div><div class="form-group col-md-6 mb-4"><input type="email" name="email" class="form-control" id="email" placeholder="Email Address" required><div class="help-block with-errors"></div></div><div class="form-group col-md-6 mb-4"><input type="text" name="phone" class="form-control" id="phone" placeholder="Phone No" required><div class="help-block with-errors"></div></div><div class="form-group col-md-12 mb-5"><textarea name="message" class="form-control" id="message" rows="5" placeholder="Message"></textarea><div class="help-block with-errors"></div></div><div class="col-lg-12"><div class="contact-form-btn"><button type="submit" class="btn-default"><span>submit message</span></button><div id="msgSubmit" class="h3 hidden"></div></div></div></div></form></div></div></div></div></div><div class="google-map"><div class="container-fluid"><div class="row"><div class="col-lg-12"><div class="google-map-iframe"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-tZ2aZFI7.mjs.map
