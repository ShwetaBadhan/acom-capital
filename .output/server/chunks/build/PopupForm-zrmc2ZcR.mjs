import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext } from 'vue';

const _imports_0 = publicAssetsURL("/images/about-image.jpg");
const _sfc_main = {
  __name: "PopupForm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-overlay" id="modalOverlay" style="${ssrRenderStyle({ "display": "none" })}"><div class="modal-container"><div class="modal-image"><button class="close-btn">×</button><div class="image-content"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="modal-form"><h3 class="form-title mb-2">Submit your Contact info</h3><hr><form id="contactForm" onsubmit="handleSubmit(event)"><div class="input-group mb-2"><span class="input-group-text"><i class="bi bi-person"></i></span><input type="text" class="form-control" placeholder="First Name"></div><div class="input-group mb-2"><span class="input-group-text"><i class="bi bi-person"></i></span><input type="text" class="form-control" placeholder="Last Name"></div><div class="input-group mb-2"><span class="input-group-text"><i class="bi bi-telephone"></i></span><input type="text" class="form-control" placeholder="Phone"></div><div class="input-group mb-2"><span class="input-group-text"><i class="bi bi-envelope"></i></span><input type="text" class="form-control" placeholder="Email"></div><div class="checkbox-group"><input type="checkbox" id="terms" name="terms" required><label for="terms" class="checkbox-label"> I agree to the terms &amp; conditions provided by the company. By providing my email &amp; phone number, I agree to receive text messages &amp; emails from the company. </label></div><button type="submit" class="submit-btn">Submit</button><div class="footer-links text-center mt-2"><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-conditions">Terms of Service</a></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "PopupForm" });

export { __nuxt_component_0 as _, _imports_0 as a };
//# sourceMappingURL=PopupForm-zrmc2ZcR.mjs.map
