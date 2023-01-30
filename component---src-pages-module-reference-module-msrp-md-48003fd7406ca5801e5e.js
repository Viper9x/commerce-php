"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[54427],{87745:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return u}});var a=t(87462),i=t(63366),l=(t(15007),t(64983)),r=t(91515),d=["components"],o={},m={_frontmatter:o},p=r.Z;function u(e){var n=e.components,t=(0,i.Z)(e,d);return(0,l.mdx)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"magento_msrp-module"},"Magento_Msrp module"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("strong",{parentName:"p"},"Magento_Msrp")," module is responsible for Manufacturer's Suggested Retail Price functionality.\nA current module provides base functional for msrp pricing rendering, configuration and calculation."),(0,l.mdx)("h2",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"The Magento_Msrp module creates the following attributes:"),(0,l.mdx)("p",null,"Entity type - ",(0,l.mdx)("inlineCode",{parentName:"p"},"catalog_product"),"."),(0,l.mdx)("p",null,"Attribute group - ",(0,l.mdx)("inlineCode",{parentName:"p"},"Advanced Pricing"),"."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"msrp")," - Manufacturer's Suggested Retail Price"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"msrp_display_actual_price_type")," -Display Actual Price")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Pay attention")," if described attributes not removed when the module is removed/disabled, it would trigger errors\nbecause they use models and blocks from Magento_Msrp module:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Msrp\\Block\\Adminhtml\\Product\\Helper\\Form\\Type")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Msrp\\Model\\Product\\Attribute\\Source\\Type\\Price")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Msrp\\Block\\Adminhtml\\Product\\Helper\\Form\\Type\\Price"))),(0,l.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,l.mdx)("h2",{id:"structure"},"Structure"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Pricing\\")," - directory contains interfaces and implementation for msrp pricing calculations\n(",(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Msrp\\Pricing\\MsrpPriceCalculatorInterface"),"), price renderers\nand price models."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Pricing\\Price\\")," - the directory contains declares msrp price model interfaces and implementations."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Pricing\\Renderer\\")," - contains price renderers implementations."),(0,l.mdx)("p",null,"For information about a typical file structure of a module in Magento 2,\nsee ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/module-file-structure.html#module-file-structure"},"Module file structure"),"."),(0,l.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,l.mdx)("p",null,"Developers can pass custom ",(0,l.mdx)("inlineCode",{parentName:"p"},"msrpPriceCalculators")," for ",(0,l.mdx)("inlineCode",{parentName:"p"},"Magento\\Msrp\\Pricing\\MsrpPriceCalculator")," using type configuration using  ",(0,l.mdx)("inlineCode",{parentName:"p"},"di.xml"),"."),(0,l.mdx)("p",null,"For example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'    <type name="Magento\\Msrp\\Pricing\\MsrpPriceCalculator">\n        <arguments>\n            <argument name="msrpPriceCalculators" xsi:type="array">\n                <item name="configurable" xsi:type="array">\n                    <item name="productType" xsi:type="const">Magento\\ConfigurableProduct\\Model\\Product\\Type\\Configurable::TYPE_CODE</item>\n                    <item name="priceCalculator" xsi:type="object">Magento\\MsrpConfigurableProduct\\Pricing\\MsrpPriceCalculator</item>\n                </item>\n            </argument>\n       </arguments>\n   </type>\n')),(0,l.mdx)("p",null,"More information about ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/di-xml-file.html"},"type configuration"),"."),(0,l.mdx)("p",null,"Extension developers can interact with the Magento_Msrp module. For more information about the Magento extension mechanism, see ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plug-ins"),"."),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Msrp module."),(0,l.mdx)("h3",{id:"events"},"Events"),(0,l.mdx)("p",null,"This module observes the following event:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"etc/frontend/")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_quote_collect_totals_after")," in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Magento\\Msrp\\Observer\\Frontend\\Quote\\SetCanApplyMsrpObserver")," file.")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"etc/webapi_rest")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_quote_collect_totals_after")," in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Magento\\Msrp\\Observer\\Frontend\\Quote\\SetCanApplyMsrpObserver")," file.")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"etc/webapi_soap")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"sales_quote_collect_totals_after")," in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Magento\\Msrp\\Observer\\Frontend\\Quote\\SetCanApplyMsrpObserver")," file.")),(0,l.mdx)("p",null,"For information about an event in Magento 2, see ",(0,l.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/events-and-observers.html#events"},"Events and observers"),"."),(0,l.mdx)("h3",{id:"layouts"},"Layouts"),(0,l.mdx)("p",null,"The module interacts with the following layout handles:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"view/base/layout")," directory:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_product_prices")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"cms_index_index"))),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_category_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_product_compare_index")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalog_product_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalogsearch_advanced_result")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"catalogsearch_result_index")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_cart_sidebar_total_renderers")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_onepage_failure")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"checkout_onepage_success")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"review_product_list")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"wishlist_index_configure_type_downloadable")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"wishlist_index_index")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"wishlist_search_view")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"wishlist_shared_index"))),(0,l.mdx)("p",null,"This module introduces the following layouts and layout handles:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"msrp_popup"))),(0,l.mdx)("h3",{id:"ui-components"},"UI components"),(0,l.mdx)("p",null,"Module provides product admin form modifier:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Magento\\Msrp\\Ui\\DataProvider\\Product\\Form\\Modifier\\Msrp")," - removes ",(0,l.mdx)("inlineCode",{parentName:"p"},"msrp_display_actual_price_type")," field from the form if config disabled else adds ",(0,l.mdx)("inlineCode",{parentName:"p"},"validate-zero-or-greater")," validation to the field."),(0,l.mdx)("h2",{id:"additional-information"},"Additional information"),(0,l.mdx)("h3",{id:"catalog-attributes"},"Catalog attributes"),(0,l.mdx)("p",null,"A current module extends ",(0,l.mdx)("inlineCode",{parentName:"p"},"etc/catalog_attributes.xml")," and provides following attributes for ",(0,l.mdx)("inlineCode",{parentName:"p"},"quote_item")," group:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"msrp")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"msrp_display_actual_price_type"))),(0,l.mdx)("h3",{id:"extension-attributes"},"Extension Attributes"),(0,l.mdx)("p",null,"The Magento_Msrp provides extension attributes for ",(0,l.mdx)("inlineCode",{parentName:"p"},"Magento\\Catalog\\Api\\Data\\ProductRender\\PriceInfoInterface")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"attribute code: ",(0,l.mdx)("inlineCode",{parentName:"li"},"msrp")),(0,l.mdx)("li",{parentName:"ul"},"attribute type: ",(0,l.mdx)("inlineCode",{parentName:"li"},"Magento\\Msrp\\Api\\Data\\ProductRender\\MsrpPriceInfoInterface"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-msrp-md-48003fd7406ca5801e5e.js.map