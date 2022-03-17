import { createElement } from "../functions/basic.js"

const research = (main) => {
  let sectionContainer = createElement(
    "section",
    ["research--lines"],
    [
      "<br>",
      createElement(
        "p",
        [],
        [
          "<strong>Cyanobacteria</strong> are the simplest organisms performing <strong>oxygenic photosynthesis</strong>. They must adapt their metabolic processes to important environmental challenges, like those imposed by the succession of days and nights. However, the regulatory mechanisms behind the versatility and environmental adaptations of cyanobacteria are largely unknown, despite their enormous <strong>ecological and biotechnological importance</strong>. Since cyanobacteria are the ancestors of plant chloroplasts, their study is also important to <strong>understand life on Earth</strong>. Some cyanobacterial proteins have close relatives in chloroplasts, and many others are found exclusively in the cyanobacterial phylum.",
        ]
      ),
      "<br>",
      createElement(
        "div",
        ["research--img"],
        [
          createElement("img", [], [], {
            src: "./imagenes/basicos/research-02.png",
          }),
          createElement(
            "span",
            ["caption"],
            [
              "Liquid culture of <i>S. elongatus</i>, showing a zoom-in picture of the cells (bright-field and confocal microscopy)",
            ]
          ),
        ]
      ),
      createElement(
        "p",
        [],
        [
          "We are interested in understanding <strong>processes and regulatory mechanisms</strong> that allow cyanobacteria to inhabit most illuminated ecosystems and play essential roles in the carbon and nitrogen cycles. To this goal we are concentrating efforts in the characterization of the complex signaling network involving the unique protein <strong>PipX</strong> (for PII-interacting protein X), which was identified as a component of the <strong>nitrogen regulation network</strong> in <i>Synechococcus elongatus PCC7942</i>. We are using this cyanobacterium, amenable to genetic disection, to connect the wealth of genomic information to the particular features of cyanobacterial cells, for which we have recently developed a <a href='https://dfgm.ua.es/es/cyanobacterial-genetics/dclg/index.htm'>Cyanobacterial Linked Genome</a>, that uses as reference the gene set of <i>S. elongatus</i>.",
        ]
      ),
      "<br>",
      createElement(
        "div",
        ["research--img"],
        [
          createElement("img", [], [], {
            src: "./imagenes/basicos/research-03.png",
          }),
          createElement(
            "span",
            ["caption"],
            [
              "Model for the transcriptional regulation of the PipX regulon. The proteins PipX, PII (signal transduction), NtcA (transcriptional factor), PipY (PLP binding protein) and at least another transcriptional factor (hypothetically PlmA) interact physically or modulate the formation of other complexes in response to different effectors.",
            ]
          ),
        ]
      ),
    ]
  )
  main.appendChild(
    createElement(
      "h1",
      ["section--title"],
      ["Interation networks and functional genomics in cyanobacteria"]
    )
  )
  main.appendChild(sectionContainer)
}

export { research }
