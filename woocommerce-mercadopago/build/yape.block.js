(()=>{"use strict";var e={20:(e,t,o)=>{var s=o(609),n=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,o){var s,i={},p=null,l=null;for(s in void 0!==o&&(p=""+o),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:p,ref:l,props:i,_owner:a.current}}t.jsx=i,t.jsxs=i},609:e=>{e.exports=window.React},848:(e,t,o)=>{e.exports=o(20)}},t={};const o=window.wc.wcBlocksRegistry,s=window.wc.wcSettings,n=window.wp.element,r=window.wp.htmlEntities,a="mercadopago_blocks_update_cart";var c=function o(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}(848);const i=({description:e,linkText:t,linkSrc:o,checkoutClass:s="pro"})=>(0,c.jsx)("div",{className:`mp-checkout-${s}-terms-and-conditions`,children:(0,c.jsx)("terms-and-conditions",{description:e,"link-text":t,"link-src":o})}),p=({title:e,description:t,linkText:o,linkSrc:s})=>(0,c.jsx)("div",{className:"mp-test-mode-container",children:(0,c.jsx)("test-mode",{title:e,description:t,"link-text":o,"link-src":s})}),l=({labelMessage:e,emptyErrorMessage:t,invalidErrorMessage:o})=>(0,c.jsx)("input-field",{"label-message":e,"empty-error-message":t,"invalid-error-message":o}),m=({label:e,src:t,emptyErrorMessage:o,invalidErrorMessage:s,tooltipText:n})=>(0,c.jsx)("input-code",{label:e,src:t,"empty-error-message":o,"invalid-error-message":s,"tooltip-text":n}),d=({message:e,src:t,icon:o,footerText:s})=>(0,c.jsx)("checkout-notice",{message:e,src:t,icon:o,"footer-text":s}),_=(e,t,o)=>{const s={name:e,message:t,target:o,plugin:{version:wc_mercadopago_custom_checkout_params.plugin_version},platform:{name:"woocommerce",uri:window.location.href,version:wc_mercadopago_custom_checkout_params.platform_version,location:`${wc_mercadopago_custom_checkout_params.location}_${wc_mercadopago_custom_checkout_params.theme}`}};navigator.sendBeacon("https://api.mercadopago.com/v1/plugins/melidata/errors",JSON.stringify(s))};var u;const y="mp_checkout_blocks",g="woo-mercado-pago-yape",k=(0,s.getSetting)("woo-mercado-pago-yape_data",{}),h=(0,r.decodeEntities)(k.title)||"Checkout Yape",x=e=>{const{PaymentMethodLabel:t}=e.components,o=(0,r.decodeEntities)(k?.params?.fee_title||""),s=`${h} ${o}`;return(0,c.jsx)(t,{text:s})},f=e=>{(e=>{const{extensionCartUpdate:t}=wc.blocksCheckout,{eventRegistration:o,emitResponse:s}=e,{onPaymentSetup:r,onCheckoutSuccess:c,onCheckoutFail:i}=o;(0,n.useEffect)((()=>{((e,t)=>{e({namespace:a,data:{action:"add",gateway:t}})})(t,g);const e=r((()=>({type:s.responseTypes.SUCCESS})));return()=>(((e,t)=>{e({namespace:a,data:{action:"remove",gateway:t}})})(t,g),e())}),[r]),(0,n.useEffect)((()=>{const e=c((async e=>{const t=e.processingResponse;return _("MP_YAPE_BLOCKS_SUCCESS",t.paymentStatus,y),{type:s.responseTypes.SUCCESS}}));return()=>e()}),[c]),(0,n.useEffect)((()=>{const e=i((e=>{const t=e.processingResponse;return _("MP_YAPE_BLOCKS_ERROR",t.paymentStatus,y),{type:s.responseTypes.FAIL,messageContext:s.noticeContexts.PAYMENTS,message:t.paymentDetails.message}}));return()=>e()}),[i])})(e);const{test_mode:t,test_mode_title:o,test_mode_description:s,test_mode_link_text:r,test_mode_link_src:u,terms_and_conditions_description:h,terms_and_conditions_link_text:x,terms_and_conditions_link_src:f,input_field_label:v,yape_title:w,yape_subtitle:E,input_code_icon:S,checkout_notice_icon_one:j,checkout_notice_icon_two:b,checkout_notice_message:R,input_code_label:C,footer_text:T,yape_tooltip_text:N,yape_input_code_error_message1:M,yape_input_code_error_message2:P,yape_phone_number_error_message1:O,yape_phone_number_error_message2:B}=k.params,L=(0,n.useRef)(null),{eventRegistration:U,emitResponse:$}=e,{onPaymentSetup:A}=U;return window.mpFormId="blocks_checkout_form",window.mpCheckoutForm=document.querySelector(".wc-block-components-form.wc-block-checkout__form"),(0,n.useEffect)((()=>{const e=A((async()=>{const e=getCodeValue(),t=document.getElementById("checkout__yapePhoneNumber").value.replaceAll(" ","");if(""===e&&""===t)return document.getElementsByTagName("input-field")[0].validate(),document.getElementsByTagName("input-code")[0].validate(),{type:$.responseTypes.ERROR};const o={otp:e,phoneNumber:t},s={},n=new MercadoPago(wc_mercadopago_yape_checkout_params.public_key).yape(o);try{const e=await n.create();s["mercadopago_yape[token]"]=e.id}catch(e){return console.warn("Token creation error: ",e),{type:$.responseTypes.ERROR}}return{type:$.responseTypes.SUCCESS,meta:{paymentMethodData:s}}}));return()=>e()}),[A,$.responseTypes.ERROR,$.responseTypes.SUCCESS]),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"mp-checkout-custom-load",children:(0,c.jsx)("div",{className:"spinner-card-form"})}),(0,c.jsxs)("div",{className:"mp-checkout-yape-container",children:[(0,c.jsxs)("div",{ref:L,className:"mp-checkout-yape-content",children:[(0,c.jsx)("div",{className:"mp-checkout-yape-test-mode",children:t?(0,c.jsx)(p,{title:o,description:s,linkText:r,linkSrc:u}):null}),(0,c.jsxs)("div",{className:"mp-checkout-yape-title-container",children:[(0,c.jsx)("h2",{className:"mp-checkout-yape-title",children:w}),(0,c.jsx)("p",{className:"mp-checkout-yape-subtitle",children:E})]}),(0,c.jsxs)("div",{className:"mp-checkout-yape-inputs",children:[(0,c.jsx)(l,{labelMessage:v,emptyErrorMessage:O,invalidErrorMessage:B}),(0,c.jsx)(m,{label:C,src:S,emptyErrorMessage:M,invalidErrorMessage:P,tooltipText:N})]}),(0,c.jsxs)(d,{message:R,src:j,icon:b,children:["footerText=",T]})]}),(0,c.jsx)("div",{className:"mp-checkout-yape-terms-and-conditions",children:(0,c.jsx)(i,{description:h,linkText:x,linkSrc:f})})]}),(0,c.jsx)("div",{id:"mercadopago-utilities",style:{display:"none"},children:(0,c.jsx)("input",{type:"hidden",id:"yapeToken",name:"mercadopago_yape[token]"})})]})},v={name:g,label:(0,c.jsx)(x,{}),content:(0,c.jsx)(f,{}),edit:(0,c.jsx)(f,{}),canMakePayment:()=>!0,ariaLabel:h,supports:{features:null!==(u=k?.supports)&&void 0!==u?u:[]}};(0,o.registerPaymentMethod)(v)})();