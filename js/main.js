const pages = {
    "Home":"./index.htm",
    "Research":"./research.htm",
    "People":"./people.htm",
    "Publications":"./publications.htm",
    "Teaching":"https://dfgm.ua.es/en/genetics/teaching/genetics-teaching.html",
    "Network":"./network.htm",
    "Work With Us":"./workwithus.htm",
    "Contact":"./contact.htm",
    "Resources":"./resources.htm",
}

const nav = document.getElementsByTagName("nav")[0]
const main = document.getElementsByTagName("main")[0]
const footer = document.getElementsByTagName("footer")[0]





function appendNav(){

    let navLogos = document.createElement("section")
    navLogos.innerHTML = `<section class="nav--logos">
    <img src="./imagenes/basicos/logo-cg.png">
    <section class="nav--otherlogos">
        <img src="./imagenes/basicos/logo-minic.jpg">
        <img src="./imagenes/basicos/logo-generalitat.png">
        <img src="./imagenes/basicos/logo-ua.jpg">
    </section>
    </section>`
    let navBar = document.createElement("section")
    navBar.className = "nav--bar";

    for (let page in pages)
    {
        navBar.innerHTML += `<a class="nav--link" href="${pages[page]}">${page}</a>`
    }

    navBar.innerHTML += `</section>`

    nav.appendChild(navLogos)
    nav.appendChild(navBar)
}


function appendFooter(){
    footer.innerHTML = `
    <p class="footer--text">Cyanobacterial Genetics Alicante - Universidad de Alicante</p>`
}


function index(){
    appendNav();
    appendFooter()

    let section = document.createElement("section")
    section.className = "anuncio--SI"

    section.innerHTML += `
    <h1>The <em>Molecular Genetics of Cyanobacteria</em> Life Special Issue is open to submissions!</h1>
    <p>More information at Life's webpage <br><a href="https://www.mdpi.com/journal/life/special_issues/genetics_cyanobacteria" target="_blank"><img src="./imagenes/otros/life-logo.webp"</a></p>`

    
    main.appendChild(section)

    main.innerHTML += `<section class='index--welcome'><h1 class='section--title'>Welcome to our website</h1>
    <br>
    <p>Our research focus on the molecular mechanisms that allow bacteria to sense and adapt to environmental changes. We are particularly interested in regulatory interaction networks.</p><br>

    <p>Most of our work is carried out with a model system, the fresh water cyanobacterium <i>Synechococcus elongatus PCC 7942</i></p>
    </section>
    <section class='index--images'>
    <img src='./imagenes/basicos/foto-home01.jpg'>
    <img src='./imagenes/basicos/foto-home02.jpg'>
    </section>`

}

function research(){
    appendNav();
    appendFooter()
    main.innerHTML += `<section class='research--lines'>
    <h1  class='section--title'>Interation networks and functional genomics in cyanobacteria</h1><br>
    <p><strong>Cyanobacteria</strong> are the simplest organisms performing <strong>oxygenic photosynthesis</strong>. They must adapt their metabolic processes to important environmental challenges, like those imposed by the succession of days and nights. However, the regulatory mechanisms behind the versatility and environmental adaptations of cyanobacteria are largely unknown, despite their enormous <strong>ecological and biotechnological importance</strong>. Since cyanobacteria are the ancestors of plant chloroplasts, their study is also important to <strong>understand life on Earth</strong>. Some cyanobacterial proteins have close relatives in chloroplasts, and many others are found exclusively in the cyanobacterial phylum.</p><br>
    <div class='research--img'>
    <img src='./imagenes/basicos/research-02.png'>
    <span class='caption'>Liquid culture of <i>S. elongatus</i>, showing a zoom-in picture of the cells (bright-field and confocal microscopy)</span>
    </div>
    <p>We are interested in understanding <strong>processes and regulatory mechanisms</strong> that allow cyanobacteria to inhabit most illuminated ecosystems and play essential roles in the carbon and nitrogen cycles. To this goal we are concentrating efforts in the characterization of the complex signaling network involving the unique protein <strong>PipX</strong> (for PII-interacting protein X), which was identified as a component of the <strong>nitrogen regulation network</strong> in <i>Synechococcus elongatus PCC7942</i>. We are using this cyanobacterium, amenable to genetic disection, to connect the wealth of genomic information to the particular features of cyanobacterial cells, for which we have recently developed a <a href="https://dfgm.ua.es/es/cyanobacterial-genetics/dclg/index.htm">Cyanobacterial Linked Genome</a>, that uses as reference the gene set of S. elongatus.</p><br>
    
    <div class='research--img'>
    <img src='./imagenes/basicos/research-03.png'>
    <span class='caption'>Model for the transcriptional regulation of the PipX regulon. The proteins PipX, PII (signal transduction), NtcA (transcriptional factor), PipY (PLP binding protein) and at least another transcriptional factor (hypothetically PlmA) interact physically or modulate the formation of other complexes in response to different effectors.</span>
    </div>
    </section>`
    
}

function publications(){

    appendNav();
    appendFooter()
    let pubList = document.createElement("section");
    pubList.className="pub--list";

    pubList.innerHTML += "<h1 class='section--title'>Our Publications</h1>"
    
    for (i = 0; i < pubs.length; i++)
    {
        let art = document.createElement("article");
        art.className = "publication";
        art.innerHTML += `
        <section class='pub--authors'>
            <img src='./imagenes/basicos/bullet-ver.jpg'><p>${pubs[i].authors} (${pubs[i].year})</p>
        </section>
        <p class='pub--title'>${pubs[i].title}</p>
        <p class='pub--refe'>${pubs[i].refe}</p>
        <a href='${pubs[i].url}' target='_blank'><img src='./imagenes/basicos/bot-read-public.jpg'></a>`;
        pubList.appendChild(art)
    }

    main.appendChild(pubList);
}

function network(){
    appendNav();
    appendFooter()
    main.innerHTML += "<h1 class='section--title'>Our network</h1>"

    let collList = document.createElement("section")
    collList.className="col--list"

    for (let i = 0; i < collaborators.length; i++){
        let art = document.createElement("article")
        art.className="collaborator";
        art.innerHTML += `
        <p class='coll--name'>${collaborators[i].title} ${collaborators[i].name}</p>
        <p class='coll--country'>${collaborators[i].country}</p>
        <p>${collaborators[i].aff}</p>
        <a class='coll--link' href='${collaborators[i].url}' target='J_blank'><img src='./imagenes/basicos/bot-info.jpg'></a>
        `



        collList.appendChild(art);


    
    }
    main.append(collList);
}

function workWithUs() {
    appendNav();
    appendFooter()
    main.innerHTML += `
    <div class='work--section'>
    <section>
    <h1 class='section--title'>Do you want to work with us?</h1>
    <p class='work--descr'>If you are interested in joining the group as Ph.D. student or Post-doc please send your C.V. and research interests to <b>contrera@ua.es</b></p>
    </section>
    <img src='./imagenes/basicos/workwithus.jfif'>
    </div>`
}

function contact(){
    appendNav();
    appendFooter()
    main.innerHTML += "<h1 class='section--title'>Contact</h1>"
    let container = document.createElement("div")
    container.className="container--contact"

    let s1 = document.createElement("section")
    let s2 = document.createElement("section")

    s1.innerHTML = `
    <p>Dpto. Fisilog&iacute;a, Gen&eacute;tica y Microbiolog&iacute;a.</p>
    <p>Pabell&oacute;n 12</p>
    <p>Universidad de Alicante</p>
    <a href='https://web.ua.es/en/universidad-alicante/get-to-know-the-campus.html' target='_blank'><img src='./imagenes/basicos/bot-campus.jpg'></a>
    <p class='caption'>Carretera de San Vicente del Raspeig s/n
    03690 San Vicente del Raspeig (Alicante)
    fax (+34) 965 909 569</p>`

    s2.innerHTML = `
    <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3127.378242201547!2d-0.5132099!3d38.3865026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236bbaba189a9%3A0x7da3bc67c687893f!2sEdificio+12+-+Pabellon+Universitario+12%2C+Universidad+de+Alicante%2C+03690+San+Vicente+del+Raspeig%2C+Alicante!5e0!3m2!1sen!2ses!4v1419242111570'></iframe>
    `

    container.appendChild(s1)
    container.appendChild(s2)
    main.appendChild(container)
}


function resources(){
    appendNav();
    appendFooter()
    main.innerHTML += "<h1 class='section--title'>Resources</h1>"
    let container = document.createElement("div")
    container.className="container--resources"
    for (let i = 0; i < res_list.length; i++){
        let article = document.createElement("article")
        
        article.innerHTML = `
        <a href='${res_list[i].url}'>${res_list[i].name}</a>
        <p>${res_list[i].descr}</p>
        <img src='${res_list[i].img}'>`

        container.appendChild(article)
    }

    main.append(container)
}

function removeDuplicates(arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i])
        if (!(arr2.includes(arr[i]))){
            console.log("!")
            arr2.push(arr[i])
        }
    }
    return arr2
}

function people(filter="All"){
    nav.innerHTML = "";
    main.innerHTML = "";
    appendNav();
    appendFooter()

    main.innerHTML += `<h1 class="section--title">${filter}</h1>`

    //second Nav
    let nav_2 = document.createElement("section")
    nav_2.classList.add("nav--bar")
    nav_2.classList.add("second--navBar")
    nav.appendChild(nav_2)


        
    let categories = removeDuplicates(people_list.map(ele => ele.key))

    //aqui genero la segunda barra de navegación
    nav_2.innerHTML += `
    <span class='nav--link' onclick='people("All")'>All</span>`
    for (let i = 0; i < categories.length; i++){
        nav_2.innerHTML += `
        <span class='nav--link' onclick='people("${categories[i]}")'>${categories[i]}</span>`
    }


    //esta es la seccion de esta pagina
    let people_section = document.createElement("section")
    people_section.className="people--section"


    //si no hay filtro aplicado enseño la foto del grupo y una lista de gente por categorias
    if (filter == "All") {
        //foto
        let im = document.createElement("img");
        im.className="img--all"
        im.src = "./imagenes/people/grupo.jpg"
        main.appendChild(im);

        //lista de gente
        let sec = document.createElement("section")
        sec.className="group--description"


        for (let i = 0; i < categories.length; i++)
        {
            let sec2 = document.createElement("section")
            sec2.className="group--list"
            let tit = document.createElement("h2")
            tit.innerHTML = categories[i]
            sec2.appendChild(tit)

            for (let j = 0; j < people_list.length; j++){

                if (people_list[j].key == categories[i]){

                    sec2.innerHTML += `<p>${people_list[j].name}</p>`
                }
            }



            sec.append(sec2)
        }

        main.append(sec)
        



    }
    else
    {
        for (let i = 0; i < people_list.length; i++){
            if (people_list[i].key == filter){
                let article = document.createElement("article")
                let s1 = document.createElement("section")
                let s2 = document.createElement("section")
                s1.className = "people--card--img"
                s2.className = "people--card--info"
                article.className="people--card"
                s1.innerHTML += `<img src="${people_list[i].pic}">`
                s2.innerHTML += `
                    <p class="people--card--name">${people_list[i].name}</p>
                    <p class="people--card--title">${people_list[i].title}</p>
                    <p class="people--card--tlf">Telephone: ${people_list[i].tlf}</p>
                    <p class="people--card--mail">Email: ${people_list[i].mail}</p>
                `
                if (filter == "Group Leader"){
    
                    for (let j = 0; j < people_list[i].desc.length; j++){
                        s2.innerHTML += `<li>${people_list[i].desc[j]}</li>`
                    }
                    
                    
                }
                else{
                    s2.innerHTML += 
                    `
                    </section>
                    `
    
                }
                article.appendChild(s1)
                article.appendChild(s2)
                people_section.appendChild(article)
            }
        }
    }
    

    main.append(people_section)
    

}