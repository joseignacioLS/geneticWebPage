About the website
    This is a custom website developed for the laboratory of genetics in the university of Alicante.
    Unluckily, the hosting service of the university only allows vanilla js, so in order to have a
    easy-to-work-with and dynamic website I have developed this modular system.

    In order to modify it you need to modify javascript files.
    If you are not familiar with javascript, please be careful,
    backup before editing, and work in small steps.

    What can be easily done?
    -Modify Article List
    -Modify People List
    -Modify Collaborators List
    -Modify Resources List

    What requires advanced JS knowledge?
    -Modify text/images inside the webpage
    -Modify colors/fonts/sizes

How to update this website

1. Include new articles
    1.1 Open the file "pub-list.js" inside the "js/data/" folder
    1.2 Copy the first element inside the variable "pubList", it looks like this:

    {"title":"Regulatory Connections Between the Cyanobacterial Factor PipX and the Ribosome Assembly GTPase EngA", "authors":"Carmen Jerez, Paloma Salinas, Antonio Llop, Raquel Cantos, Javier Espinosa, Jose I Labella & Asuncion Contreras", "year":"2021", "refe":"Front. Microbiol., 09 December 2021 doi: 10.3389/fmicb.2021.781760", "url":"https://www.frontiersin.org/articles/10.3389/fmicb.2021.781760/full"},

    Notice that is surrounded by this symbols "{}" and that I also copied the comma at the end.

    1.3 Paste it to duplicate the first element.

    You should have something like this:

    const pubList = [
    {"title":"Regulatory Connections Between the Cyanobacterial Factor PipX and the Ribosome Assembly GTPase EngA", "authors":"Carmen Jerez, Paloma Salinas, Antonio Llop, Raquel Cantos, Javier Espinosa, Jose I Labella & Asuncion Contreras", "year":"2021", "refe":"Front. Microbiol., 09 December 2021 doi: 10.3389/fmicb.2021.781760", "url":"https://www.frontiersin.org/articles/10.3389/fmicb.2021.781760/full"},
    {"title":"Functional and structural characterization of PII-like protein CutA does not support involvement in heavy metal tolerance and hints at a small-molecule carrying/signaling role", "authors":"Khaleb A Selim, Lorena Tremino, Claro Marco-Marin, Vikram Alva, Javier Espinosa, Asuncion Contreras, Marcus D Hartmann, Karl Forchhammer & Vicente Rubio", "year":"2021", "refe":"FEBS J. 2021 Feb;288(4):1142-1162. doi: 10.1111/febs.15464. Epub 2020 Jul 22.", "url":"https://febs.onlinelibrary.wiley.com/doi/10.1111/febs.15464"},
    ...

    and want to have something like this:

    const pubList = [
    {"title":"Regulatory Connections Between the Cyanobacterial Factor PipX and the Ribosome Assembly GTPase EngA", "authors":"Carmen Jerez, Paloma Salinas, Antonio Llop, Raquel Cantos, Javier Espinosa, Jose I Labella & Asuncion Contreras", "year":"2021", "refe":"Front. Microbiol., 09 December 2021 doi: 10.3389/fmicb.2021.781760", "url":"https://www.frontiersin.org/articles/10.3389/fmicb.2021.781760/full"},
    {"title":"Regulatory Connections Between the Cyanobacterial Factor PipX and the Ribosome Assembly GTPase EngA", "authors":"Carmen Jerez, Paloma Salinas, Antonio Llop, Raquel Cantos, Javier Espinosa, Jose I Labella & Asuncion Contreras", "year":"2021", "refe":"Front. Microbiol., 09 December 2021 doi: 10.3389/fmicb.2021.781760", "url":"https://www.frontiersin.org/articles/10.3389/fmicb.2021.781760/full"},
    {"title":"Functional and structural characterization of PII-like protein CutA does not support involvement in heavy metal tolerance and hints at a small-molecule carrying/signaling role", "authors":"Khaleb A Selim, Lorena Tremino, Claro Marco-Marin, Vikram Alva, Javier Espinosa, Asuncion Contreras, Marcus D Hartmann, Karl Forchhammer & Vicente Rubio", "year":"2021", "refe":"FEBS J. 2021 Feb;288(4):1142-1162. doi: 10.1111/febs.15464. Epub 2020 Jul 22.", "url":"https://febs.onlinelibrary.wiley.com/doi/10.1111/febs.15464"},
    ...

    See how the first element is duplicated?

    1.4 Replace the data in the new element at the top like this:

    const pubList = [
    {"title":"New title", "authors":"new authors", "year":"new year", "refe":"new citation", "url":"new url"},
    {"title":"Regulatory Connections Between the Cyanobacterial Factor PipX and the Ribosome Assembly GTPase EngA", "authors":"Carmen Jerez, Paloma Salinas, Antonio Llop, Raquel Cantos, Javier Espinosa, Jose I Labella & Asuncion Contreras", "year":"2021", "refe":"Front. Microbiol., 09 December 2021 doi: 10.3389/fmicb.2021.781760", "url":"https://www.frontiersin.org/articles/10.3389/fmicb.2021.781760/full"},
    {"title":"Functional and structural characterization of PII-like protein CutA does not support involvement in heavy metal tolerance and hints at a small-molecule carrying/signaling role", "authors":"Khaleb A Selim, Lorena Tremino, Claro Marco-Marin, Vikram Alva, Javier Espinosa, Asuncion Contreras, Marcus D Hartmann, Karl Forchhammer & Vicente Rubio", "year":"2021", "refe":"FEBS J. 2021 Feb;288(4):1142-1162. doi: 10.1111/febs.15464. Epub 2020 Jul 22.", "url":"https://febs.onlinelibrary.wiley.com/doi/10.1111/febs.15464"},
    ...

    1.5 It is important that your new data does not have double ticks like this --> ". If that is the case, replace your " by '.

2. Modify an article
    2.1 Find the article you want to modify in the list indicated above
    2.2 Modify the data. Care with " symbols

3. Delete an article
    3.1 Find the article you want to delete in the list indicated above
    3.2 Remove the element which is inside the curly brackets plus the trailing comma: {...},

4. Include more words in the italic word list
    Publication titles are automatically decorated to show specific words in italics. In order to add words to this list you need to:
    4.1 Open js/data/italic-words.js
    4.2 Add a new word to the cursives list. P.e. if I wanted to add "Bacillus" the list would look like this:

    cursives = [
        "S. elongatus",
        "Synechococcus elongatus",
        "Escherichia coli",
        "Synechococcus",
        "pipX",
        "nblA",
        "Bacillus"
    ]


5. Network list
    Similar to Article List pub in collaborators.js

6. Resources list
    Similar to Article List but in resources-list.js

7. People List
    Similar to Article List but in people-list.js

