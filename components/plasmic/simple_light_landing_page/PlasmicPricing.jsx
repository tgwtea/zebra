// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tczukc3QRaUy2S2e1ykNYP
// Component: T5A1MGvWTRisE
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: dPDEhKmGLUtA/component
import Section from "../../Section"; // plasmic-import: recmZTLggqWV3/component
import Plan from "../../Plan"; // plasmic-import: -2nQvgCQE0Ilh/component
import Bullet from "../../Bullet"; // plasmic-import: Y4nL-XrPTQJu5/component
import Button from "../../Button"; // plasmic-import: bMyck7Xc0NdJR/component
import Faq from "../../Faq"; // plasmic-import: H-WTdYuo2torg/component
import Footer from "../../Footer"; // plasmic-import: HfJG6oNJPD_e/component
import { useScreenVariants as useScreenVariantsul3OqjQpMtrtZ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Ul3oqjQPMtrtZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tczukc3QRaUy2S2e1ykNYP/projectcss
import sty from "./PlasmicPricing.module.css"; // plasmic-import: T5A1MGvWTRisE/css

export const PlasmicPricing__VariantProps = new Array();

export const PlasmicPricing__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPricing__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsul3OqjQpMtrtZ()
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Pricing"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column___2KI0Z)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__eldrf)}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ncbbi
                      )}
                    >
                      {"$10"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__yi8DA)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column__yhWi)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan___53ZNl)}
                  description={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__eThO)}
                    >
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__x2Urk
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__qmXgK
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___5RcaK
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__ywg6S
                        )}
                      />
                    </p.Stack>
                  }
                  name={"Team"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___19S40
                      )}
                    >
                      {"$49"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__xwVzi)}
                    color={"blue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column___7Dgqy)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__gwob)}
                  name={"Enterprise"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hktRy
                      )}
                    >
                      {"$199"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__amagq)}
                    color={"outlineBlue"}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            className={classNames("__wab_instance", sty.faqSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"FAQ"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lKbMv)}
            >
              <Faq
                className={classNames("__wab_instance", sty.faq__qfLTr)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Are there long-term contracts?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq___8LYt)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Can I add or remove licenses?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__hb4VI)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>
            </p.Stack>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "pricingSection", "columns", "faqSection", "footer"],
  header: ["header"],
  pricingSection: ["pricingSection", "columns"],
  columns: ["columns"],
  faqSection: ["faqSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPricing__ArgProps,
          internalVariantPropNames: PlasmicPricing__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing";
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pricingSection: makeNodeComponent("pricingSection"),
    columns: makeNodeComponent("columns"),
    faqSection: makeNodeComponent("faqSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPricing;
/* prettier-ignore-end */
