/* ============================================================
   Magic Names – Múltiplos Modos
   - Swipe, Pigback, Grade → 3 letras aproximadas
   - Lexicon → binário VC + perguntas inteligentes (entropia)
   ============================================================ */

/* -------- Utils básicos -------- */

function normalize(str) {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function $(id) {
  return document.getElementById(id);
}

function show(id) {
  const el = $(id);
  if (el) el.style.display = "";
}

function hide(id) {
  const el = $(id);
  if (el) el.style.display = "none";
}

function openOnly(id) {
  document.querySelectorAll(".panel").forEach(p =>
    p.classList.remove("visible")
  );
  const el = $(id);
  if (el) el.classList.add("visible");
}

/* -------- HOME / Modo treino & performance -------- */

let homeStep = 1; // 1 = escolher treino/performance, 2 = escolher modo

function updateHomeUI() {
  openOnly("home");
  if (homeStep === 1) {
    show("home-step1");
    hide("home-step2");
  } else {
    hide("home-step1");
    show("home-step2");
  }
}

function goHome(forceStep1 = false) {
  if (forceStep1) homeStep = 1;
  updateHomeUI();
}

function setModeTraining() {
  document.body.classList.remove("performance");
  document.body.classList.add("training");
  homeStep = 2;
  updateHomeUI();
}

function setModePerformance() {
  document.body.classList.remove("training");
  document.body.classList.add("performance");
  homeStep = 2;
  updateHomeUI();
}

/* -------- Dados dos nomes -------- */

 const RAW_NAMES = [
  "Abel - M",
  "Abigail - F",
  "Abílio - M",
  "Abimael - M",
  "Abner - M",
  "Abraão - M",
  "Acácio - M",
  "Adailton - M",
  "Adair - M",
  "Adalberto - M",
  "Adalgisa - F",
  "Adalto - M",
  "Adão - M",
  "Adaúto - M",
  "Adeildo - M",
  "Adelaide - F",
  "Adelar - M",
  "Adélia - F",
  "Adelina - F",
  "Adelino - M",
  "Adelmo - M",
  "Adelso - M",
  "Ademar - M",
  "Ademílson - M",
  "Ademílton - M",
  "Ademir - M",
  "Adenildo - M",
  "Adenílson - M",
  "Adenílton - M",
  "Adenir - M",
  "Adevaldo - M",
  "Adílson - M",
  "Adir - M",
  "Admilson - M",
  "Adolfo - M",
  "Adonias - M",
  "Ádria - F",
  "Adrian - M",
  "Adriana - F",
  "Adriane - F",
  "Adriano - M",
  "Adriel - M",
  "Adriele - F",
  "Adrieli - F",
  "Adson - M",
  "Aécio - M",
  "Afonso - M",
  "Afrânio - M",
  "Ágata - F",
  "Agatha - F",
  "Agda - F",
  "Agenor - M",
  "Agnaldo - M",
  "Agostinho - M",
  "Aguinaldo - M",
  "Aída - F",
  "Aila - F",
  "Aílton - M",
  "Aírton - M",
  "Alaíde - F",
  "Alan - M",
  "Alana - F",
  "Alane - F",
  "Alaor - M",
  "Alba - F",
  "Albérico - M",
  "Albert - M",
  "Albertina - F",
  "Albertino - M",
  "Alberto - M",
  "Albino - M",
  "Alceu - M",
  "Alcides - M",
  "Alcilene - F",
  "Alcimar - M",
  "Alcindo - M",
  "Alcino - M",
  "Alcione - F",
  "Alcir - M",
  "Alda - F",
  "Aldair - M",
  "Aldeci - M",
  "Aldemar - M",
  "Aldemir - M",
  "Aldenir - M",
  "Aldenora - F",
  "Aldir - M",
  "Aldo - M",
  "Alecsandro - M",
  "Aléf - M",
  "Alencar - M",
  "Alesandra - F",
  "Alesandro - M",
  "Alessandra - F",
  "Alessandro - M",
  "Alex - M",
  "Alexander - M",
  "Alexandra - F",
  "Alexandre - M",
  "Alexandrina - F",
  "Aléxia - F",
  "Alexsander - M",
  "Alexsandra - F",
  "Alexsandro - M",
  "Alfredo - M",
  "Algusto - M",
  "Alice - F",
  "Alicia - F",
  "Alício - M",
  "Alífe - F",
  "Aline - F",
  "Alípio - M",
  "Alírio - M",
  "Alison - M",
  "Alisson - M",
  "Allan - M",
  "Allison - F",
  "Almerinda - F",
  "Almir - M",
  "Almira - F",
  "Almiro - M",
  "Aloísio - M",
  "Alonso - M",
  "Altair - M",
  "Altamir - M",
  "Altamiro - M",
  "Altino - M",
  "Aluísio - M",
  "Álvaro - M",
  "Alvina - F",
  "Alvino - M",
  "Alzira - F",
  "Amadeu - M",
  "Amado - M",
  "Amália - F",
  "Amanda - F",
  "Amara - F",
  "Amarildo - M",
  "Amaro - M",
  "Amauri - M",
  "Amélia - F",
  "Américo - M",
  "Amílton - M",
  "Ana - F",
  "Anália - F",
  "Analice - F",
  "Ananda - F",
  "Ananias - M",
  "Anastácio - M",
  "Ancelmo - M",
  "Anderson - M",
  "Andeson - M",
  "André - M",
  "Andréa - F",
  "Andrei - M",
  "Andreia - F",
  "Andresa - F",
  "Andressa - F",
  "Andrew - M",
  "Andreza - F",
  "Andriele - F",
  "Andrieli - F",
  "Ane - F",
  "Anésia - F",
  "Anésio - M",
  "Ângela - F",
  "Angélica - F",
  "Angelina - F",
  "Angelita - F",
  "Ângelo - M",
  "Aníbal - M",
  "Anildo - M",
  "Anilson - M",
  "Anilton - M",
  "Anísio - M",
  "Anita - F",
  "Anna - F",
  "Anne - F",
  "Anny - F",
  "Anselmo - M",
  "Antenor - M",
  "Antoni - M",
  "Antônia - F",
  "Antoniel - M",
  "Antonieta - F",
  "Antonino - M",
  "Antônio - M",
  "Aparecida - F",
  "Aparecido - M",
  "Aquiles - M",
  "Araci - F",
  "Argemiro - M",
  "Ari - M",
  "Ariana - F",
  "Ariane - F",
  "Ariel - M",
  "Ariéle - F",
  "Arílson - M",
  "Ariovaldo - M",
  "Aristeu - M",
  "Aristides - M",
  "Arivaldo - M",
  "Arlei - M",
  "Arlene - F",
  "Arlete - F",
  "Arlinda - F",
  "Arlindo - M",
  "Armando - M",
  "Arminda - F",
  "Armindo - M",
  "Arnaldo - M",
  "Arno - M",
  "Aroldo - M",
  "Artur - M",
  "Arthur - M",
  "Assis - M",
  "Ataíde - M",
  "Átila - M",
  "Augusta - F",
  "Augustinho - M",
  "Augusto - M",
  "Áurea - F",
  "Aurelina - F",
  "Aurélio - M",
  "Aurora - F",
  "Avelino - M",
  "Baltazar - M",
  "Bárbara - F",
  "Bartolomeu - M",
  "Beatris - F",
  "Beatriz - F",
  "Belmiro - M",
  "Benedita - F",
  "Benedito - M",
  "Benício - M",
  "Benjamim - M",
  "Bento - M",
  "Berenice - F",
  "Bernadete - F",
  "Bernado - M",
  "Bernardo - M",
  "Betânia - F",
  "Bianca - F",
  "Braian - M",
  "Brás - M",
  "Bráulio - M",
  "Brena - F",
  "Brenda - F",
  "Brendo - M",
  "Breno - M",
  "Bruna - F",
  "Bruno - M",
  "Bryan - M",
  "Cacilda - F",
  "Caetano - M",
  "Cailane - F",
  "Caio - M",
  "Caique - M",
  "Cairo - M",
  "Camila - F",
  "Camile - F",
  "Camili - F",
  "Camilla - F",
  "Camilo - M",
  "Cândida - F",
  "Cândido - M",
  "Caren - F",
  "Carina - F",
  "Carine - F",
  "Carla - F",
  "Carlito - M",
  "Carlo - M",
  "Carlos - M",
  "Carmelita - F",
  "Carmem - F",
  "Carmen - F",
  "Carol - F",
  "Carolaine - F",
  "Carolina - F",
  "Caroline - F",
  "Cássia - F",
  "Cassiane - F",
  "Cassiano - M",
  "Cássio - M",
  "Catarina - F",
  "Cátia - F",
  "Catiane - F",
  "Cauã - M",
  "Cauane - F",
  "Cecília - F",
  "Celeste - F",
  "Celi - F",
  "Célia - F",
  "Celina - F",
  "Célio - M",
  "Celma - F",
  "Celso - M",
  "Celson - M",
  "César - M",
  "Charlene - F",
  "Charles - M",
  "Cheila - F",
  "Christian - M",
  "Cibele - F",
  "Cícera - F",
  "Cícero - M",
  "Cilene - F",
  "Cínthia - F",
  "Cíntia - F",
  "Cirlene - F",
  "Ciro - M",
  "Clair - M",
  "Clara - F",
  "Clarice - F",
  "Clarissa - F",
  "Clarisse - F",
  "Claudecir - M",
  "Claudemir - M",
  "Claudenice - F",
  "Claudenir - M",
  "Claudete - F",
  "Cláudia - F",
  "Claudiana - F",
  "Claudiane - F",
  "Claudinei - M",
  "Claudinéia - F",
  "Claudino - M",
  "Cláudio - M",
  "Claudiomiro - M",
  "Claudionor - M",
  "Claudir - M",
  "Clayton - M",
  "Cleane - F",
  "Cléber - M",
  "Cleberson - M",
  "Clebson - M",
  "Clécio - M",
  "Cléia - F",
  "Cleide - F",
  "Cleidiane - F",
  "Cleidson - M",
  "Cleílson - M",
  "Cleilton - M",
  "Cleison - M",
  "Cleito - M",
  "Cleiton - M",
  "Clélia - F",
  "Clemente - M",
  "Clemilda - F",
  "Cleomar - M",
  "Cleonice - F",
  "Clésio - M",
  "Cleunice - F",
  "Cleusa - F",
  "Cleuza - F",
  "Cleverson - M",
  "Cleverton - M",
  "Clodoaldo - M",
  "Clotilde - F",
  "Clóves - M",
  "Clóvis - M",
  "Conceição - F",
  "Corina - F",
  "Cosma - F",
  "Cosme - M",
  "Cosmo - M",
  "Cremilda - F",
  "Creusa - F",
  "Creuza - F",
  "Crislaine - F",
  "Crislane - F",
  "Crispim - M",
  "Cristian - M",
  "Cristiana - F",
  "Cristiane - F",
  "Cristiano - M",
  "Cristina - F",
  "Cristine - F",
  "Cristofer - M",
  "Cristóvão - M",
  "Custódio - M",
  "Dagmar - F",
  "Daiana - F",
  "Daiane - F",
  "Daine - F",
  "Dalila - F",
  "Dalmo - M",
  "Dalton - M",
  "Dalva - F",
  "Dámaris - F",
  "Damiana - F",
  "Damião - M",
  "Dandara - F",
  "Daniel - M",
  "Daniela - F",
  "Daniele - F",
  "Danieli - F",
  "Danielle - F",
  "Danila - F",
  "Danilo - M",
  "Danúbia - F",
  "Dara - F",
  "Darci - M",
  "Dário - M",
  "Darlan - M",
  "Darlei - M",
  "Darlene - F",
  "Davi - M",
  "David - M",
  "Davison - M",
  "Dayana - F",
  "Dayane - F",
  "Dayse - F",
  "Débora - F",
  "Déborah - F",
  "Décio - M",
  "Deise - F",
  "Deisiane - F",
  "Deivid - M",
  "Deivide - M",
  "Deivison - M",
  "Dejair - M",
  "Dejanira - F",
  "Délcio - M",
  "Délio - M",
  "Delma - F",
  "Demétrio - M",
  "Dener - M",
  "Denílson - M",
  "Denis - M",
  "Denise - F",
  "Denison - M",
  "Denivaldo - M",
  "Denize - F",
  "Derli - M",
  "Deusdete - M",
  "Deusimar - M",
  "Devair - M",
  "Devanir - M",
  "Devid - M",
  "Diana - F",
  "Diane - F",
  "Diego - M",
  "Dilma - F",
  "Dilson - M",
  "Dimas - M",
  "Dina - F",
  "Dinalva - F",
  "Diógenes - M",
  "Diogo - M",
  "Dionata - F",
  "Dionatan - M",
  "Dione - F",
  "Dionei - M",
  "Diones - M",
  "Dionísio - M",
  "Dirce - F",
  "Dirceu - M",
  "Diva - F",
  "Divina - F",
  "Divino - M",
  "Djalma - M",
  "Doglas - M",
  "Dolores - F",
  "Domingas - F",
  "Domingo - M",
  "Domingos - M",
  "Donato - M",
  "Donizete - M",
  "Dora - F",
  "Doraci - F",
  "Doralice - F",
  "Dorival - M",
  "Douglas - M",
  "Dulce - F",
  "Dulcineia - F",
  "Durval - M",
  "Durvalina - F",
  "Edcarlos - M",
  "Edemar - M",
  "Edenílson - M",
  "Éder - M",
  "Ederson - M",
  "Edésio - M",
  "Edevaldo - M",
  "Edgar - M",
  "Edi - M",
  "Ediane - F",
  "Edicarlos - M",
  "Edigar - M",
  "Edilaine - F",
  "Edilane - F",
  "Edilene - F",
  "Edileusa - F",
  "Edileuza - F",
  "Edilma - F",
  "Edílson - M",
  "Edílton - M",
  "Edimar - M",
  "Edimílson - M",
  "Edina - F",
  "Edinaldo - M",
  "Edinalva - F",
  "Edinei - M",
  "Edinéia - F",
  "Edineide - F",
  "Edinílson - M",
  "Édio - M",
  "Edison - M",
  "Edite - F",
  "Edivaldo - M",
  "Edivan - M",
  "Edivânia - F",
  "Edjane - F",
  "Edmar - M",
  "Edmilson - M",
  "Edmundo - M",
  "Edna - F",
  "Ednaldo - M",
  "Ednalva - F",
  "Ednei - M",
  "Ednéia - F",
  "Ednílson - M",
  "Edno - M",
  "Edson - M",
  "Eduarda - F",
  "Eduardo - M",
  "Edvaldo - M",
  "Edvan - M",
  "Edvânia - F",
  "Efigênia - F",
  "Egídio - M",
  "Elaine - F",
  "Elane - F",
  "Élcio - M",
  "Elda - F",
  "Élder - M",
  "Elem - M",
  "Elen - F",
  "Elena - F",
  "Eleni - F",
  "Elenice - F",
  "Elenilda - F",
  "Elenildo - M",
  "Elenílton - M",
  "Elenir - F",
  "Elenita - F",
  "Eli - M",
  "Elian - M",
  "Eliana - F",
  "Eliandro - M",
  "Eliane - F",
  "Elias - M",
  "Élida - F",
  "Eliel - M",
  "Elielson - M",
  "Elielton - M",
  "Eliene - F",
  "Eliete - F",
  "Eliezer - M",
  "Elimar - M",
  "Elinaldo - M",
  "Eline - F",
  "Eliomar - M",
  "Elis - F",
  "Elisa - F",
  "Elisabete - F",
  "Elisabeth - F",
  "Elisandra - F",
  "Elisandro - M",
  "Elisângela - F",
  "Elisete - F",
  "Eliseu - M",
  "Elisiane - F",
  "Elismar - M",
  "Eliton - M",
  "Elivaldo - M",
  "Elivelton - M",
  "Eliza - F",
  "Elizabete - F",
  "Elizabeth - F",
  "Elizandra - F",
  "Elizângela - F",
  "Elizete - F",
  "Eliziane - F",
  "Ellen - F",
  "Elma - F",
  "Elmo - M",
  "Eloá - F",
  "Eloi - M",
  "Eloísa - F",
  "Eloíza - F",
  "Elsa - F",
  "Elso - M",
  "Elson - M",
  "Elves - M",
  "Élvio - M",
  "Elvira - F",
  "Elvis - M",
  "Elza - F",
  "Emanuel - M",
  "Emanuela - F",
  "Emanuele - F",
  "Emanueli - F",
  "Emanuelle - F",
  "Emerson - M",
  "Emídio - M",
  "Émile - M",
  "Emili - F",
  "Emília - F",
  "Emílio - M",
  "Emilly - F",
  "Emily - F",
  "Enedina - F",
  "Enílson - M",
  "Ênio - M",
  "Enivaldo - M",
  "Enoque - M",
  "Enzo - M",
  "Eraldo - M",
  "Erasmo - M",
  "Ercília - F",
  "Ercílio - M",
  "Eric - M",
  "Érica - F",
  "Erick - M",
  "Érico - M",
  "Ericson - M",
  "Érika - F",
  "Erike - F",
  "Erinaldo - M",
  "Erique - M",
  "Erison - M",
  "Erisvaldo - M",
  "Erivaldo - M",
  "Erivan - M",
  "Erivelton - M",
  "Erli - M",
  "Ernandes - M",
  "Ernando - M",
  "Ernane - M",
  "Ernani - M",
  "Ernestina - F",
  "Ernesto - M",
  "Eron - M",
  "Eronildo - M",
  "Esdras - M",
  "Esmael - M",
  "Esmeralda - F",
  "Esmeraldo - M",
  "Espedito - M",
  "Estefane - F",
  "Estefani - F",
  "Estefany - F",
  "Estela - F",
  "Estelita - F",
  "Ester - F",
  "Estevan - M",
  "Estêvão - M",
  "Esther - F",
  "Etelvina - F",
  "Euclides - M",
  "Eudes - M",
  "Eugênia - F",
  "Eugênio - M",
  "Eulália - F",
  "Euler - M",
  "Eunice - F",
  "Eurico - M",
  "Eurides - M",
  "Eurípedes - M",
  "Euzébio - M",
  "Eva - F",
  "Evaldo - M",
  "Evandro - M",
  "Evaní - M",
  "Evanildo - M",
  "Evanir - M",
  "Evaristo - M",
  "Evelin - F",
  "Eveline - F",
  "Evelyn - F",
  "Everaldo - M",
  "Everson - M",
  "Éverton - M",
  "Evilásio - M",
  "Evilin - M",
  "Ewerton - M",
  "Expedito - M",
  "Ezequias - M",
  "Ezequiel - M",
  "Ézio - M",
  "Fábia - F",
  "Fabiana - F",
  "Fabiane - F",
  "Fabiano - M",
  "Fábio - M",
  "Fabíola - F",
  "Fabrícia - F",
  "Fabrício - M",
  "Fagner - M",
  "Fátima - F",
  "Fausto - M",
  "Feliciano - M",
  "Felipe - M",
  "Félix - M",
  "Fellipe - M",
  "Fernanda - F",
  "Fernando - M",
  "Filipi - M",
  "Filomena - F",
  "Firmino - M",
  "Flávia - F",
  "Flaviana - F",
  "Flaviane - F",
  "Flaviano - M",
  "Flávio - M",
  "Flora - F",
  "Floriano - M",
  "Florinda - F",
  "Florisvaldo - M",
  "Franciane - F",
  "Francico - M",
  "Franciele - F",
  "Francieli - F",
  "Francilene - F",
  "Francimar - M",
  "Francinaldo - M",
  "Francine - F",
  "Francineide - F",
  "Francinete - F",
  "Francis - M",
  "Francisca - F",
  "Francisco - M",
  "Franciso - M",
  "Francivaldo - M",
  "Franisco - M",
  "Frank - M",
  "Franklin - M",
  "Fred - M",
  "Frederico - M",
  "Fredson - M",
  "Fábia - F",
  "Fabiana - F",
  "Fabiane - F",
  "Fabiano - M",
  "Fábio - M",
  "Fabíola - F",
  "Fabrícia - F",
  "Fabrício - M",
  "Fagner - M",
  "Fátima - F",
  "Fausto - M",
  "Feliciano - M",
  "Felipe - M",
  "Félix - M",
  "Fellipe - M",
  "Fernanda - F",
  "Fernando - M",
  "Filipi - M",
  "Filomena - F",
  "Firmino - M",
  "Flávia - F",
  "Flaviana - F",
  "Flaviane - F",
  "Flaviano - M",
  "Flávio - M",
  "Flora - F",
  "Floriano - M",
  "Florinda - F",
  "Florisvaldo - M",
  "Franciane - F",
  "Francico - M",
  "Franciele - F",
  "Francieli - F",
  "Francilene - F",
  "Francimar - M",
  "Francinaldo - M",
  "Francine - F",
  "Francineide - F",
  "Francinete - F",
  "Francis - M",
  "Francisca - F",
  "Francisco - M",
  "Franciso - M",
  "Francivaldo - M",
  "Franisco - M",
  "Frank - M",
  "Franklin - M",
  "Fred - M",
  "Frederico - M",
  "Fredson - M",
  "Gabriel - M",
  "Gabriela - F",
  "Gabriele - F",
  "Gabrieli - F",
  "Gabriella - F",
  "Gabrielle - F",
  "Gabrielly - F",
  "Gabriely - F",
  "Gaspar - M",
  "Geane - F",
  "Geísa - F",
  "Geise - F",
  "Geisiane - F",
  "Geison - M",
  "Genésio - M",
  "Geni - F",
  "Genilda - F",
  "Genildo - M",
  "Genílson - M",
  "Genival - M",
  "Genivaldo - M",
  "Gentil - M",
  "George - M",
  "Georgina - F",
  "Geovan - M",
  "Geovana - F",
  "Geovane - M",
  "Geovani - M",
  "Geovanna - F",
  "Geralda - F",
  "Geraldina - F",
  "Geraldo - M",
  "Gerlane - F",
  "Germano - M",
  "Gerônimo - M",
  "Gerson - M",
  "Gerusa - F",
  "Gervásio - M",
  "Gésica - F",
  "Géssica - F",
  "Getúlio - M",
  "Gian - M",
  "Gilberto - M",
  "Gilda - F",
  "Gildásio - M",
  "Gildete - F",
  "Gildo - M",
  "Gileno - M",
  "Gilmar - M",
  "Gilmara - F",
  "Gilso - M",
  "Gilson - M",
  "Gilvan - M",
  "Gilvânia - F",
  "Giovana - F",
  "Giovane - M",
  "Giovani - M",
  "Giovanna - F",
  "Girlene - F",
  "Gisela - F",
  "Gisele - F",
  "Giseli - F",
  "Giselle - F",
  "Gislaine - F",
  "Gislane - F",
  "Gislene - F",
  "Giulia - F",
  "Givaldo - M",
  "Givanildo - M",
  "Glauber - M",
  "Gláucia - F",
  "Gláucio - M",
  "Glauco - M",
  "Gledson - M",
  "Gleice - F",
  "Gleiciane - F",
  "Gleidson - M",
  "Gleison - M",
  "Gleisson - M",
  "Glenda - F",
  "Glória - F",
  "Gonçalo - M",
  "Gorete - F",
  "Graça - F",
  "Graciela - F",
  "Graciele - F",
  "Grasiela - F",
  "Grasiele - F",
  "Graziela - F",
  "Graziele - F",
  "Grazieli - F",
  "Gregori - M",
  "Gregório - M",
  "Greice - F",
  "Guido - M",
  "Guilherme - M",
  "Guilhermina - F",
  "Guiomar - F",
  "Gustavo - M",
  "Gutemberg - M",
  "Hebert - M",
  "Héctor - M",
  "Heitor - M",
  "Helen - F",
  "Helena - F",
  "Helenice - F",
  "Heleno - M",
  "Hélia - F",
  "Hélio - M",
  "Hellen - F",
  "Heloísa - F",
  "Henrique - M",
  "Henry - M",
  "Herbert - M",
  "Hércules - M",
  "Hermes - M",
  "Hermínio - M",
  "Hilário - M",
  "Hilda - F",
  "Homero - M",
  "Horácio - M",
  "Hosana - F",
  "Hudson - M",
  "Hugo - M",
  "Humberto - M",
  "Iago - M",
  "Ian - M",
  "Iana - F",
  "Iara - F",
  "Iasmim - F",
  "Iasmin - F",
  "Ícaro - M",
  "Idalina - F",
  "Ieda - F",
  "Igor - M",
  "Ilda - F",
  "Ilma - F",
  "Ilza - F",
  "Inácia - F",
  "Inácio - M",
  "Inaldo - M",
  "Inês - F",
  "Ingred - F",
  "Ingrid - F",
  "Ingride - F",
  "Ingridi - F",
  "Iolanda - F",
  "Ione - F",
  "Irã - M",
  "Iracema - F",
  "Iraci - F",
  "Irani - F",
  "Iranildo - M",
  "Irene - F",
  "Íria - F",
  "Irineu - M",
  "Íris - F",
  "Irma - F",
  "Isa - F",
  "Isabel - F",
  "Isabela - F",
  "Isabele - F",
  "Isabeli - F",
  "Isabella - F",
  "Isabelle - F",
  "Isabelly - F",
  "Isac - M",
  "Isadora - F",
  "Isael - M",
  "Isaías - M",
  "Isaque - M",
  "Isaura - F",
  "Ísis - F",
  "Ismael - M",
  "Israel - M",
  "Ítalo - M",
  "Itamar - M",
  "Iure - M",
  "Ivair - M",
  "Ivaldo - M",
  "Ivan - M",
  "Ivana - F",
  "Ivaneide - F",
  "Ivanete - F",
  "Ivani - F",
  "Ivânia - F",
  "Ivanilda - F",
  "Ivanilde - F",
  "Ivanildo - M",
  "Ivanílson - M",
  "Ivanir - M",
  "Ivete - F",
  "Ivo - M",
  "Ivonaldo - M",
  "Ivone - F",
  "Ivoneide - F",
  "Ivonete - F",
  "Izabel - F",
  "Izabela - F",
  "Izabele - F",
  "Izadora - F",
  "Izaquiel - M",
  "Izaura - F",
  "Jaci - F",
  "Jaciane - F",
  "Jaciara - F",
  "Jacilene - F",
  "Jacinta - F",
  "Jacinto - M",
  "Jacira - F",
  "Jackeline - F",
  "Jackson - M",
  "Jacó - M",
  "Jacqueline - F",
  "Jacson - M",
  "Jade - F",
  "Jader - M",
  "Jadiel - M",
  "Jadilson - M",
  "Jadir - M",
  "Jadson - M",
  "Jaiane - F",
  "Jailma - F",
  "Jailton - M",
  "Jaime - M",
  "Jaine - F",
  "Jair - M",
  "Jairo - M",
  "Jaison - M",
  "Jakeline - F",
  "Jamerson - M",
  "James - M",
  "Jamil - M",
  "Jamile - F",
  "Jamili - F",
  "Janaína - F",
  "Janderson - M",
  "Jandir - M",
  "Jandira - F",
  "Jane - F",
  "Janete - F",
  "Janice - F",
  "Janiel - M",
  "Janiele - F",
  "Janílson - M",
  "Janine - F",
  "Jânio - M",
  "Januário - M",
  "Jaqueline - F",
  "Jarbas - M",
  "Jardel - M",
  "Jason - M",
  "Jean - M",
  "Jeanderson - M",
  "Jeane - F",
  "Jedson - M",
  "Jéferson - M",
  "Jefersson - M",
  "Jefeson - M",
  "Jenifer - F",
  "Jeniffer - F",
  "Jennifer - F",
  "Jeová - M",
  "Jeovana - F",
  "Jeremias - M",
  "Jerferson - M",
  "Jerfeson - M",
  "Jerry - M",
  "Jesiel - M",
  "Jessé - M",
  "Jéssica - F",
  "Jesuino - M",
  "Jesus - M",
  "Jhenifer - F",
  "Jhone - M",
  "Jhony - M",
  "Joab - M",
  "Joabe - M",
  "Joacir - M",
  "Joana - F",
  "João - M",
  "Joaquim - M",
  "Joaquina - F",
  "Joares - M",
  "Jobson - M",
  "Jocélia - F",
  "Jocélio - M",
  "Jocilene - F",
  "Jocimar - M",
  "Joel - M",
  "Joelma - F",
  "John - M",
  "Joice - F",
  "Joise - F",
  "Jonas - M",
  "Jonata - M",
  "Jonatan - M",
  "Jônatas - M",
  "Jones - M",
  "Jonílson - M",
  "Jordan - M",
  "Jordana - F",
  "Jorge - M",
  "Jorgina - F",
  "Josafá - M",
  "José - M",
  "Joseane - F",
  "Josefa - F",
  "Josefina - F",
  "Joséildo - M",
  "Joséilton - M",
  "Joseli - M",
  "Josélia - F",
  "Joselina - F",
  "Josélio - M",
  "Joselita - F",
  "Joselito - M",
  "Joselma - F",
  "Josémar - M",
  "Josémir - M",
  "Josenilda - F",
  "Josenildo - M",
  "Josenílson - M",
  "Josenílton - M",
  "Josévaldo - M",
  "Josiane - F",
  "Josias - M",
  "Josiel - M",
  "Josiele - F",
  "Josilene - F",
  "Josimar - M",
  "Josina - F",
  "Josinaldo - M",
  "Josineide - F",
  "Josinete - F",
  "Josival - M",
  "Josivaldo - M",
  "Josivan - M",
  "Josué - M",
  "Jovelina - F",
  "Joyce - F",
  "Juan - M",
  "Juarez - M",
  "Jucélia - F",
  "Jucelino - M",
  "Jucélio - M",
  "Juciara - F",
  "Jucilene - F",
  "Jucimar - M",
  "Jucimara - F",
  "Judite - F",
  "Julho - M",
  "Júlia - F",
  "Julian - M",
  "Juliana - F",
  "Juliane - F",
  "Juliano - M",
  "Juliene - F",
  "Julieta - F",
  "Juliete - F",
  "Júlio - M",
  "Júnia - F",
  "Júnior - M",
  "Juraci - M",
  "Jurandir - M",
  "Jurema - F",
  "Juscelino - M",
  "Jussara - F",
  "Justina - F",
  "Justino - M",
  "Juvenal - M",
  "Kaik - M",
  "Kaike - M",
  "Kailane - F",
  "Kaline - F",
  "Kamila - F",
  "Karem - F",
  "Karen - F",
  "Karina - F",
  "Karine - F",
  "Karla - F",
  "Karoline - F",
  "Kássia - F",
  "Kátia - F",
  "Katiane - F",
  "Kauan - M",
  "Kauane - F",
  "Kauê - M",
  "Kayky - M",
  "Keila - F",
  "Kelen - F",
  "Keli - F",
  "Keliane - F",
  "Kellen - F",
  "Kelli - F",
  "Kelly - F",
  "Kelvin - M",
  "Kely - F",
  "Kênia - F",
  "Kennedy - M",
  "Késia - F",
  "Ketlen - F",
  "Ketlin - F",
  "Keven - M",
  "Kevin - M",
  "Kézia - F",
  "Laécio - M",
  "Laércio - M",
  "Laerte - M",
  "Laiane - F",
  "Laila - F",
  "Laís - F",
  "Laisa - F",
  "Laíse - F",
  "Laíza - F",
  "Lana - F",
  "Lara - F",
  "Larisa - F",
  "Larissa - F",
  "Laudelino - M",
  "Laudicéia - F",
  "Laura - F",
  "Lauri - M",
  "Laurinda - F",
  "Laurindo - M",
  "Laurita - F",
  "Lauro - M",
  "Lavínia - F",
  "Lázara - F",
  "Lázaro - M",
  "Leandra - F",
  "Leandro - M",
  "Leci - F",
  "Leda - F",
  "Leia - F",
  "Léia - F",
  "Leide - F",
  "Leidiane - F",
  "Leila - F",
  "Leilane - F",
  "Leiliane - F",
  "Leni - F",
  "Lenice - F",
  "Lenilda - F",
  "Lenílson - M",
  "Lenir - M",
  "Lenira - F",
  "Lenita - F",
  "Léo - M",
  "Leomar - M",
  "Leonan - M",
  "Leonardo - M",
  "Leonel - M",
  "Leoni - F",
  "Leonice - F",
  "Leônidas - M",
  "Leonilda - F",
  "Leonildo - M",
  "Leonor - F",
  "Leonora - F",
  "Leontina - F",
  "Leopoldo - M",
  "Letícia - F",
  "Levi - M",
  "Lia - F",
  "Liana - F",
  "Liane - F",
  "Lídia - F",
  "Lidiane - F",
  "Lídio - M",
  "Lígia - F",
  "Lília - F",
  "Liliam - F",
  "Lilian - F",
  "Liliana - F",
  "Liliane - F",
  "Lina - F",
  "Lincon - M",
  "Linda - F",
  "Lindalva - F",
  "Lindaura - F",
  "Lindinalva - F",
  "Lindomar - M",
  "Lino - M",
  "Lisandra - F",
  "Lisiane - F",
  "Lívia - F",
  "Lorena - F",
  "Lorenzo - M",
  "Lorival - M",
  "Lorivaldo - M",
  "Lorraine - F",
  "Lorran - M",
  "Lorrane - F",
  "Lourdes - F",
  "Lourenço - M",
  "Lourival - M",
  "Luan - M",
  "Luana - F",
  "Luane - F",
  "Luara - F",
  "Luca - M",
  "Lucas - M",
  "Lucca - M",
  "Lucélia - F",
  "Luci - F",
  "Lúcia - F",
  "Luciana - F",
  "Luciane - F",
  "Luciano - M",
  "Lucicleide - F",
  "Lucidalva - F",
  "Luciene - F",
  "Lucila - F",
  "Luciléia - F",
  "Lucileide - F",
  "Lucilene - F",
  "Lucília - F",
  "Lucimar - F",
  "Lucimara - F",
  "Lucimeire - F",
  "Lucinda - F",
  "Lucinéia - F",
  "Lucineide - F",
  "Lucinete - F",
  "Lúcio - M",
  "Lucivaldo - M",
  "Lucivânia - F",
  "Ludimila - F",
  "Ludmila - F",
  "Luísa - F",
  "Luiz - M",
  "Luíza - F",
  "Luma - F",
  "Luna - F",
  "Lurdes - F",
  "Lúsia - F",
  "Luzia - F",
  "Luziane - F",
  "Luzimar - F",
  "Luzinete - F",
  "Maciel - M",
  "Madalena - F",
  "Madson - M",
  "Magali - F",
  "Magda - F",
  "Magna - F",
  "Magno - M",
  "Magnólia - F",
  "Maiane - F",
  "Maiara - F",
  "Maico - M",
  "Maicon - M",
  "Maik - M",
  "Maike - M",
  "Mailson - M",
  "Maíra - F",
  "Maisa - F",
  "Maíza - F",
  "Manoel - M",
  "Manoela - F",
  "Manuela - F",
  "Mara - F",
  "Marcela - F",
  "Marcele - F",
  "Marceli - F",
  "Marcelina - F",
  "Marcelino - M",
  "Marcelo - M",
  "Márcia - F",
  "Marciana - F",
  "Marciano - M",
  "Marciel - M",
  "Marcilene - F",
  "Marcílio - M",
  "Márcio - M",
  "Marco - M",
  "Marcondes - M",
  "Marcone - M",
  "Marconi - M",
  "Marcos - M",
  "Marcus - M",
  "Margarete - F",
  "Margareth - F",
  "Margarida - F",
  "Mari - F",
  "Maria - F",
  "Mariana - F",
  "Mariane - F",
  "Mariângela - F",
  "Mariano - M",
  "Maricélia - F",
  "Mariele - F",
  "Marieta - F",
  "Marilda - F",
  "Marilei - F",
  "Mariléia - F",
  "Marileide - F",
  "Marilena - F",
  "Marilene - F",
  "Marília - F",
  "Marilúcia - F",
  "Marilza - F",
  "Marina - F",
  "Marinaldo - M",
  "Marinalva - F",
  "Marineide - F",
  "Marines - F",
  "Marinete - F",
  "Marinez - F",
  "Marino - M",
  "Mário - M",
  "Marisa - F",
  "Marise - F",
  "Marisete - F",
  "Maristela - F",
  "Marivalda - F",
  "Marivaldo - M",
  "Mariza - F",
  "Marizete - F",
  "Marlei - M",
  "Marleide - F",
  "Marlene - F",
  "Marlete - F",
  "Marli - F",
  "Marlon - M",
  "Marluce - F",
  "Marluci - F",
  "Marlúcia - F",
  "Marly - F",
  "Marta - F",
  "Martin - M",
  "Martinho - M",
  "Martins - M",
  "Mary - F",
  "Mateus - M",
  "Matias - M",
  "Matilde - F",
  "Maura - F",
  "Mauri - M",
  "Maurício - M",
  "Maurílio - M",
  "Mauro - M",
  "Max - M",
  "Maxsuel - M",
  "Maxuel - M",
  "Maxwell - M",
  "Mayara - F",
  "Mayra - F",
  "Maysa - F",
  "Meire - F",
  "Melissa - F",
  "Mercedes - F",
  "Mércia - F",
  "Messias - M",
  "Micael - M",
  "Micaela - F",
  "Micaele - F",
  "Micaeli - F",
  "Michel - M",
  "Michele - F",
  "Micheli - F",
  "Michelle - F",
  "Miguel - M",
  "Mikaele - F",
  "Milena - F",
  "Milene - F",
  "Milton - M",
  "Miqueias - M",
  "Mirela - F",
  "Mirele - F",
  "Míria - F",
  "Miriam - F",
  "Mírian - F",
  "Mirtes - F",
  "Misael - M",
  "Moacir - M",
  "Moiséis - M",
  "Moisés - M",
  "Monalisa - F",
  "Mônica - F",
  "Monique - F",
  "Morgana - F",
  "Murilo - M",
  "Nádia - F",
  "Nadir - M",
  "Nádja - F",
  "Nadson - M",
  "Naiane - F",
  "Naiara - F",
  "Nair - F",
  "Naira - F",
  "Nanci - F",
  "Nara - F",
  "Narciso - M",
  "Natacha - F",
  "Natal - M",
  "Natali - F",
  "Natália - F",
  "Natalício - M",
  "Natalina - F",
  "Natalino - M",
  "Nataly - F",
  "Natan - M",
  "Natanael - M",
  "Natasha - F",
  "Nathália - F",
  "Natiele - F",
  "Nayara - F",
  "Nazaré - F",
  "Nazareno - M",
  "Nei - M",
  "Neide - F",
  "Neila - F",
  "Neiva - F",
  "Nelci - F",
  "Neli - F",
  "Nélio - M",
  "Nelma - F",
  "Nelsa - F",
  "Nelso - M",
  "Nelson - M",
  "Nelza - F",
  "Neri - M",
  "Nestor - M",
  "Neusa - F",
  "Neuza - F",
  "Newton - M",
  "Nicolas - M",
  "Nicolau - M",
  "Nicole - F",
  "Nicoli - F",
  "Nilce - F",
  "Nilceia - F",
  "Nilda - F",
  "Nildo - M",
  "Nilma - F",
  "Nilo - M",
  "Nilsa - F",
  "Nilton - M",
  "Nilva - F",
  "Nilza - F",
  "Nivaldo - M",
  "Nívea - F",
  "Nívia - F",
  "Noé - M",
  "Noel - M",
  "Noeli - F",
  "Noélia - F",
  "Noemi - F",
  "Noêmia - F",
  "Nonato - M",
  "Norberto - M",
  "Norma - F",
  "Núbia - F",
  "Odair - M",
  "Odete - F",
  "Odila - F",
  "Odilon - M",
  "Olavo - M",
  "Olga - F",
  "Olímpio - M",
  "Olinda - F",
  "Oliveira - M",
  "Olívia - F",
  "Olívio - M",
  "Omar - M",
  "Ondina - F",
  "Onofre - M",
  "Orivaldo - M",
  "Orlando - M",
  "Orlei - M",
  "Óscar - M",
  "Oséias - M",
  "Osias - M",
  "Osmar - M",
  "Osmarina - F",
  "Osni - M",
  "Osório - M",
  "Osvaldo - M",
  "Oswaldo - M",
  "Otacílio - M",
  "Otaviano - M",
  "Otávio - M",
  "Otília - F",
  "Otoniel - M",
  "Oziel - M",
  "Pablo - M",
  "Palmira - F",
  "Paloma - F",
  "Pâmela - F",
  "Paola - F",
  "Patrícia - F",
  "Patrício - M",
  "Patrick - M",
  "Patrik - M",
  "Paula - F",
  "Paulina - F",
  "Paulino - M",
  "Paulo - M",
  "Pedrina - F",
  "Pedro - M",
  "Peterson - M",
  "Pierre - M",
  "Pietra - F",
  "Pietro - M",
  "Plínio - M",
  "Poliana - F",
  "Poliane - F",
  "Pricila - F",
  "Priscila - F",
  "Priscilla - F",
  "Queila - F",
  "Quitéria - F",
  "Rachel - F",
  "Rafael - M",
  "Rafaela - F",
  "Rafaele - F",
  "Rafaella - F",
  "Raí - M",
  "Raian - M",
  "Raiana - F",
  "Raiane - F",
  "Railan - M",
  "Railane - F",
  "Railda - F",
  "Railson - M",
  "Railton - M",
  "Raimunda - F",
  "Raimundo - M",
  "Raísa - F",
  "Raíssa - F",
  "Ralf - M",
  "Ramiro - M",
  "Ramón - M",
  "Rangel - M",
  "Raniele - F",
  "Raquel - F",
  "Raul - M",
  "Rayane - F",
  "Rayssa - F",
  "Rebeca - F",
  "Regiane - F",
  "Regina - F",
  "Reginaldo - M",
  "Régis - M",
  "Reinaldo - M",
  "Reinan - M",
  "Rejane - F",
  "Renan - M",
  "Renata - F",
  "Renato - M",
  "René - M",
  "Renilda - F",
  "Renildo - M",
  "Renílson - M",
  "Rian - M",
  "Ribamar - M",
  "Ricardo - M",
  "Richard - M",
  "Rildo - M",
  "Riquelme - M",
  "Rita - F",
  "Rivaldo - M",
  "Robério - M",
  "Robert - M",
  "Roberta - F",
  "Roberto - M",
  "Roberval - M",
  "Robison - M",
  "Robson - M",
  "Rodinei - M",
  "Rodnei - M",
  "Rodolfo - M",
  "Rodrigo - M",
  "Roger - M",
  "Rogéria - F",
  "Rogério - M",
  "Romário - M",
  "Romero - M",
  "Romeu - M",
  "Romilda - F",
  "Romildo - M",
  "Romilson - M",
  "Rômulo - M",
  "Ronald - M",
  "Ronaldo - M",
  "Ronan - M",
  "Rone - M",
  "Roni - M",
  "Roniel - M",
  "Ronílson - M",
  "Ronivaldo - M",
  "Ronivon - M",
  "Roque - M",
  "Rosa - F",
  "Rosália - F",
  "Rosalina - F",
  "Rosalvo - M",
  "Rosana - F",
  "Rosane - F",
  "Rosângela - F",
  "Rosária - F",
  "Rose - F",
  "Roseane - F",
  "Roselaine - F",
  "Roselene - F",
  "Roseli - F",
  "Rosélia - F",
  "Rosemari - F",
  "Rosemary - F",
  "Rosemeire - F",
  "Rosemere - F",
  "Roseni - F",
  "Rosenilda - F",
  "Rosenildo - M",
  "Rosenílson - M",
  "Rosenílton - M",
  "Rosévaldo - M",
  "Rosiane - F",
  "Rosicléia - F",
  "Rosicleide - F",
  "Rosilane - F",
  "Rosilda - F",
  "Rosileide - F",
  "Rosilene - F",
  "Rosimar - F",
  "Rosimeire - F",
  "Rosimere - F",
  "Rosimeri - F",
  "Rosinaldo - M",
  "Rosinéia - F",
  "Rosineide - F",
  "Rosinete - F",
  "Rosivaldo - M",
  "Ruan - M",
  "Rubem - M",
  "Rubens - M",
  "Rúbia - F",
  "Rudimar - M",
  "Rudinei - M",
  "Rui - M",
  "Rute - F",
  "Ruth - F",
  "Ruti - F",
  "Sabino - M",
  "Sabrina - F",
  "Sadi - M",
  "Saimon - M",
  "Salatiel - M",
  "Salete - F",
  "Salomão - M",
  "Salvador - M",
  "Samanta - F",
  "Samantha - F",
  "Samara - F",
  "Sâmia - F",
  "Sâmila - F",
  "Samir - M",
  "Samira - F",
  "Samuel - M",
  "Sandoval - M",
  "Sandra - F",
  "Sandro - M",
  "Sandy - F",
  "Santa - F",
  "Santiago - M",
  "Santina - F",
  "Santo - M",
  "Sara - F",
  "Sarah - F",
  "Saul - M",
  "Saulo - M",
  "Sávio - M",
  "Sebastiana - F",
  "Sebastião - M",
  "Sélio - M",
  "Selma - F",
  "Sérgio - M",
  "Severina - F",
  "Severino - M",
  "Sheila - F",
  "Shirlei - F",
  "Shirley - F",
  "Sidinei - M",
  "Sidnei - M",
  "Sidneia - F",
  "Silas - M",
  "Silene - F",
  "Silmara - F",
  "Silva - M",
  "Silvana - F",
  "Silvane - F",
  "Silvani - F",
  "Silvânia - F",
  "Silvano - M",
  "Silvério - M",
  "Silvestre - M",
  "Sílvia - F",
  "Silvino - M",
  "Sílvio - M",
  "Simão - M",
  "Simone - F",
  "Simoni - F",
  "Sinara - F",
  "Sinésio - M",
  "Síntia - F",
  "Sinval - M",
  "Sirlei - M",
  "Sirlene - F",
  "Sirley - F",
  "Sivaldo - M",
  "Socorro - F",
  "Soeli - F",
  "Sofia - F",
  "Solange - F",
  "Sônia - F",
  "Sophia - F",
  "Soraia - F",
  "Stefane - F",
  "Stefani - F",
  "Stefany - F",
  "Stephanie - F",
  "Suelém - F",
  "Suelen - F",
  "Sueli - F",
  "Suellen - F",
  "Suely - F",
  "Sulamita - F",
  "Susana - F",
  "Suzana - F",
  "Suzane - F",
  "Tábata - F",
  "Taciana - F",
  "Tadeu - M",
  "Taiana - F",
  "Taiane - F",
  "Taila - F",
  "Tailane - F",
  "Tainá - F",
  "Tainara - F",
  "Taís - F",
  "Taisa - F",
  "Taíse - F",
  "Taíssa - F",
  "Tales - M",
  "Tália - F",
  "Talis - M",
  "Talison - M",
  "Talisson - M",
  "Talita - F",
  "Talles - M",
  "Tâmara - F",
  "Tamires - F",
  "Tamiris - F",
  "Tânia - F",
  "Tarcísio - M",
  "Tatiana - F",
  "Tatiane - F",
  "Tatiele - F",
  "Tauan - M",
  "Tauane - F",
  "Taylor - M",
  "Tayná - F",
  "Taynara - F",
  "Telma - F",
  "Telmo - M",
  "Teodoro - M",
  "Teresa - F",
  "Teresinha - F",
  "Tereza - F",
  "Terezinha - F",
  "Thainá - F",
  "Thaís - F",
  "Thaisa - F",
  "Thália - F",
  "Thalita - F",
  "Thamires - F",
  "Thayná - F",
  "Thays - F",
  "Théo - M",
  "Therezinha - F",
  "Tiago - M",
  "Tomás - M",
  "Toni - M",
  "Túlio - M",
  "Uanderson - M",
  "Ubirajara - M",
  "Ubiratã - M",
  "Uéslei - M",
  "Ulisses - M",
  "Vagner - M",
  "Valber - M",
  "Valcir - M",
  "Valda - F",
  "Valdeci - M",
  "Valdelice - F",
  "Valdemar - M",
  "Valdemir - M",
  "Valdemiro - M",
  "Valdenice - F",
  "Valdenir - M",
  "Valdenor - M",
  "Valderi - M",
  "Valdete - F",
  "Valdevino - M",
  "Valdilene - F",
  "Valdinei - M",
  "Valdineia - F",
  "Valdir - M",
  "Valdira - F",
  "Valdirene - F",
  "Valdivino - M",
  "Valdo - M",
  "Valdomiro - M",
  "Valentim - M",
  "Valentina - F",
  "Valéria - F",
  "Valério - M",
  "Valesca - F",
  "Valmir - M",
  "Valmira - F",
  "Valmor - M",
  "Valquíria - F",
  "Valter - M",
  "Vanda - F",
  "Vander - M",
  "Vanderlan - M",
  "Vanderlei - M",
  "Vanderléia - F",
  "Vanderson - M",
  "Vandir - M",
  "Vando - M",
  "Vaneide - F",
  "Vanesa - F",
  "Vanessa - F",
  "Vânia - F",
  "Vanilda - F",
  "Vanildo - M",
  "Vanilson - M",
  "Vanusa - F",
  "Vanuza - F",
  "Venâncio - M",
  "Vera - F",
  "Veridiana - F",
  "Verônica - F",
  "Vicente - M",
  "Vicentina - F",
  "Victor - M",
  "Vilma - F",
  "Vilson - M",
  "Vinício - M",
  "Vinícius - M",
  "Virgílio - M",
  "Virgínia - F",
  "Vital - M",
  "Vitalina - F",
  "Vítor - M",
  "Vitória - F",
  "Vitório - M",
  "Vivaldo - M",
  "Vivian - F",
  "Viviane - F",
  "Vladimir - M",
  "Volnei - M",
  "Wagner - M",
  "Walace - M",
  "Waldemar - M",
  "Waldir - M",
  "Walison - M",
  "Walisson - M",
  "Wallace - M",
  "Wallison - M",
  "Walmir - M",
  "Walter - M",
  "Wanda - F",
  "Wander - M",
  "Wanderlei - M",
  "Wanderson - M",
  "Wanessa - F",
  "Warley - M",
  "Washington - M",
  "Weber - M",
  "Wederson - M",
  "Wedson - M",
  "Welder - M",
  "Weligton - M",
  "Welington - M",
  "Welinton - M",
  "Weliton - M",
  "Welligton - M",
  "Wellington - M",
  "Wellinton - M",
  "Welliton - M",
  "Wemerson - M",
  "Wendel - M",
  "Wendell - M",
  "Wender - M",
  "Wenderson - M",
  "Wesley - M",
  "Weslley - M",
  "Weverton - M",
  "Wilhan - M",
  "Wilian - M",
  "Wilker - M",
  "Willan - M",
  "Willian - M",
  "Willians - M",
  "Wilma - F",
  "Wilson - M",
  "Wilton - M",
  "Yara - F",
  "Yasmim - F",
  "Yasmin - F",
  "Yolanda - F",
  "Yuri - M",
  "Zacarias - M",
  "Zaqueu - M",
  "Zeli - F",
  "Zélia - F",
  "Zenaide - F",
  "Zenilda - F",
  "Zenildo - M",
  "Zilda - F",
  "Zilma - F",
  "Zuleide - F",
  "Zulmira - F",
  "Zumira - F"
];

const NAMES = RAW_NAMES.map(entry => {
  const parts = entry.split("-");
  const raw = parts[0].trim();
  const gender = (parts[1] || "").trim();
  const clean = normalize(raw.replace(/\s+/g, ""));
  return { raw, clean, gender };
});

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/* -------- Função comum de candidatos (aproximados) -------- */
/**
 * gender: "M" ou "F"
 * length: número de letras
 * letters: array de 3 letras imputadas
 * pigbackFirstReal: se true, a 1ª letra é a real
 */
function findApproxCandidates(gender, length, letters, pigbackFirstReal) {
  const out = [];
  const windowSize = 6;

  const inputLetters = letters.map(ch => normalize(ch || "").charAt(0));

  NAMES.forEach(n => {
    if (n.gender !== gender) return;
    if (n.clean.length !== length) return;
    if (n.clean.length < 3) return;

    const c = n.clean;
    let valid = true;
    let score = 0;

    for (let i = 0; i < 3; i++) {
      const real = c[i];
      const inp = inputLetters[i];
      const idxReal = ALPHABET.indexOf(real);
      const idxInp = ALPHABET.indexOf(inp);
      if (idxReal === -1 || idxInp === -1) {
        valid = false;
        break;
      }

      if (pigbackFirstReal && i === 0) {
        if (real !== inp) {
          valid = false;
          break;
        }
        continue;
      }

      const diff = (idxInp - idxReal + ALPHABET.length) % ALPHABET.length;
      if (diff <= 0 || diff > windowSize) {
        valid = false;
        break;
      }
      score += diff;
    }

    if (valid) {
      out.push({ ...n, score });
    }
  });

  out.sort((a, b) => a.score - b.score);
  return out.slice(0, 9);
}

/* ============================================================
   MODO SWIPE
   ============================================================ */

let swipeStage = "gender"; // "gender" | "length" | "letters"
let swipeGender = "M";
let swipeLength = 6;
let swipeLetters = ["_", "_", "_"];
let swipeLetterIndex = 0;
let swipeLetterChar = "m";

function updateSwipeLettersDisplay() {
  const txt = swipeLetters.map(l => (l === "_" ? "_" : l)).join(" ");
  $("swipeLetters").innerText = txt;
}

function updateSwipeUI() {
  ["swipe-step-gender", "swipe-step-length", "swipe-step-letters"].forEach(id =>
    hide(id)
  );
  if (swipeStage === "gender") show("swipe-step-gender");
  if (swipeStage === "length") show("swipe-step-length");
  if (swipeStage === "letters") show("swipe-step-letters");

  $("swipeGender").innerText = swipeGender;
  $("swipeLength").innerText = swipeLength;
  updateSwipeLettersDisplay();
}

function startSwipe() {
  swipeStage = "gender";
  swipeGender = "M";
  swipeLength = 6;
  swipeLetters = ["_", "_", "_"];
  swipeLetterIndex = 0;
  swipeLetterChar = "m";

  openOnly("swipePanel");
  updateSwipeUI();
}

/* Swipe handlers para SwipeMode */
(function setupSwipeMode() {
  const panel = $("swipePanel");
  if (!panel) return;

  let startX = null;
  let startY = null;

  panel.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  panel.addEventListener("touchend", e => {
    if (startX == null || startY == null) return;
    if (e.changedTouches && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < -30) swipeModeUp();
        else if (dy > 30) swipeModeDown();
      } else {
        if (dx > 30) swipeModeRight();
        else if (dx < -30) swipeModeLeft();
      }
    }
    startX = startY = null;
  });
})();

function swipeModeUp() {
  if (swipeStage === "gender") {
    swipeGender = "M";
  } else if (swipeStage === "length") {
    swipeLength = Math.min(swipeLength + 1, 12);
  } else if (swipeStage === "letters") {
    let idx = ALPHABET.indexOf(swipeLetterChar);
    if (idx === -1) idx = ALPHABET.indexOf("m");
    idx = (idx + 1) % ALPHABET.length;
    swipeLetterChar = ALPHABET[idx];
    swipeLetters[swipeLetterIndex] = swipeLetterChar.toUpperCase();
  }
  updateSwipeUI();
}

function swipeModeDown() {
  if (swipeStage === "gender") {
    swipeGender = "F";
  } else if (swipeStage === "length") {
    swipeLength = Math.max(swipeLength - 1, 3);
  } else if (swipeStage === "letters") {
    let idx = ALPHABET.indexOf(swipeLetterChar);
    if (idx === -1) idx = ALPHABET.indexOf("m");
    idx = (idx - 1 + ALPHABET.length) % ALPHABET.length;
    swipeLetterChar = ALPHABET[idx];
    swipeLetters[swipeLetterIndex] = swipeLetterChar.toUpperCase();
  }
  updateSwipeUI();
}

function swipeModeRight() {
  if (swipeStage === "gender") {
    swipeStage = "length";
  } else if (swipeStage === "length") {
    swipeStage = "letters";
    swipeLetterIndex = 0;
    swipeLetterChar = "m";
    swipeLetters = ["M", "_", "_"];
  } else if (swipeStage === "letters") {
    swipeLetterIndex++;
    if (swipeLetterIndex >= 3) {
      const candidates = findApproxCandidates(
        swipeGender,
        swipeLength,
        swipeLetters,
        false
      );
      showLexiconResults(candidates);
      return;
    } else {
      swipeLetterChar = "m";
      swipeLetters[swipeLetterIndex] = "M";
    }
  }
  updateSwipeUI();
}

function swipeModeLeft() {
  if (swipeStage === "length") {
    swipeStage = "gender";
  } else if (swipeStage === "letters") {
    swipeStage = "length";
  }
  updateSwipeUI();
}

/* ============================================================
   MODO PIGBACKING
   ============================================================ */

let pigStage = "gender";
let pigGender = "M";
let pigLength = 6;
let pigLetters = ["_", "_", "_"];
let pigLetterIndex = 0;
let pigLetterChar = "m";

function updatePigLettersDisplay() {
  const txt = pigLetters.map(l => (l === "_" ? "_" : l)).join(" ");
  $("pigLetters").innerText = txt;
}

function updatePigUI() {
  ["pig-step-gender", "pig-step-length", "pig-step-letters"].forEach(id =>
    hide(id)
  );
  if (pigStage === "gender") show("pig-step-gender");
  if (pigStage === "length") show("pig-step-length");
  if (pigStage === "letters") show("pig-step-letters");

  $("pigGender").innerText = pigGender;
  $("pigLength").innerText = pigLength;
  updatePigLettersDisplay();
}

function startPigback() {
  pigStage = "gender";
  pigGender = "M";
  pigLength = 6;
  pigLetters = ["_", "_", "_"];
  pigLetterIndex = 0;
  pigLetterChar = "m";

  openOnly("pigbackPanel");
  updatePigUI();
}

/* Swipe handlers para PigbackMode */
(function setupPigbackMode() {
  const panel = $("pigbackPanel");
  if (!panel) return;

  let startX = null;
  let startY = null;

  panel.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  panel.addEventListener("touchend", e => {
    if (startX == null || startY == null) return;
    if (e.changedTouches && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < -30) pigModeUp();
        else if (dy > 30) pigModeDown();
      } else {
        if (dx > 30) pigModeRight();
        else if (dx < -30) pigModeLeft();
      }
    }
    startX = startY = null;
  });
})();

function pigModeUp() {
  if (pigStage === "gender") {
    pigGender = "M";
  } else if (pigStage === "length") {
    pigLength = Math.min(pigLength + 1, 12);
  } else if (pigStage === "letters") {
    let idx = ALPHABET.indexOf(pigLetterChar);
    if (idx === -1) idx = ALPHABET.indexOf("m");
    idx = (idx + 1) % ALPHABET.length;
    pigLetterChar = ALPHABET[idx];
    pigLetters[pigLetterIndex] = pigLetterChar.toUpperCase();
  }
  updatePigUI();
}

function pigModeDown() {
  if (pigStage === "gender") {
    pigGender = "F";
  } else if (pigStage === "length") {
    pigLength = Math.max(pigLength - 1, 3);
  } else if (pigStage === "letters") {
    let idx = ALPHABET.indexOf(pigLetterChar);
    if (idx === -1) idx = ALPHABET.indexOf("m");
    idx = (idx - 1 + ALPHABET.length) % ALPHABET.length;
    pigLetterChar = ALPHABET[idx];
    pigLetters[pigLetterIndex] = pigLetterChar.toUpperCase();
  }
  updatePigUI();
}

function pigModeRight() {
  if (pigStage === "gender") {
    pigStage = "length";
  } else if (pigStage === "length") {
    pigStage = "letters";
    pigLetterIndex = 0;
    pigLetterChar = "m";
    pigLetters = ["M", "_", "_"];
  } else if (pigStage === "letters") {
    pigLetterIndex++;
    if (pigLetterIndex >= 3) {
      const candidates = findApproxCandidates(
        pigGender,
        pigLength,
        pigLetters,
        true // primeira letra real
      );
      showLexiconResults(candidates);
      return;
    } else {
      pigLetterChar = "m";
      pigLetters[pigLetterIndex] = "M";
    }
  }
  updatePigUI();
}

function pigModeLeft() {
  if (pigStage === "length") {
    pigStage = "gender";
  } else if (pigStage === "letters") {
    pigStage = "length";
  }
  updatePigUI();
}

/* ============================================================
   MODO GRADE
   ============================================================ */

let gradeGender = "M";
let gradeLength = 6;
let gradeLetters = ["_", "_", "_"];
let gradeLetterIndex = 0;

function updateGradeLettersDisplay() {
  const txt = gradeLetters.map(l => (l === "_" ? "_" : l)).join(" ");
  $("gradeLettersDisplay").innerText = txt;
}

function startGrade() {
  gradeGender = "M";
  gradeLength = 6;
  gradeLetters = ["_", "_", "_"];
  gradeLetterIndex = 0;

  $("gradeGender").innerText = gradeGender;
  $("gradeLength").innerText = gradeLength;
  updateGradeLettersDisplay();

  openOnly("gradeSetupPanel");
}

/* Swipe para ajustar length no gradeSetupPanel */
(function setupGradeSetupSwipe() {
  const panel = $("gradeSetupPanel");
  if (!panel) return;

  let startX = null;
  let startY = null;

  panel.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  panel.addEventListener("touchend", e => {
    if (startX == null || startY == null) return;
    if (e.changedTouches && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;

      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < -30) gradeSetupUp();
        else if (dy > 30) gradeSetupDown();
      } else {
        if (dx > 30) openGradeLetters();
      }
    }
    startX = startY = null;
  });
})();

function gradeSetupUp() {
  gradeLength = Math.min(gradeLength + 1, 12);
  $("gradeLength").innerText = gradeLength;
}

function gradeSetupDown() {
  gradeLength = Math.max(gradeLength - 1, 3);
  $("gradeLength").innerText = gradeLength;
}

function openGradeLetters() {
  const grid = $("gradeLetterGrid");
  grid.innerHTML = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(l => {
    const btn = document.createElement("button");
    btn.innerText = l;
    btn.onclick = () => selectGradeLetter(l);
    grid.appendChild(btn);
  });

  updateGradeLettersDisplay();
  openOnly("gradeLettersPanel");
}

function selectGradeLetter(L) {
  if (gradeLetterIndex >= 3) return;
  gradeLetters[gradeLetterIndex] = L;
  gradeLetterIndex++;
  updateGradeLettersDisplay();
}

function resetGradeLetters() {
  gradeLetters = ["_", "_", "_"];
  gradeLetterIndex = 0;
  updateGradeLettersDisplay();
}

function gradeDiscover() {
  if (gradeLetters.includes("_")) {
    alert("Selecione 3 letras.");
    return;
  }
  const candidates = findApproxCandidates(
    gradeGender,
    gradeLength,
    gradeLetters,
    false
  );
  showLexiconResults(candidates);
}

/* ============================================================
   LEXICON – Estado (com entropia + binária)
   ============================================================ */

let lexGender = "M";
let lexBinPattern = [];
let lexLength = 0;

let lexKnownShapes = {};        // pos -> "R"/"C"/"M"
let lexKnownLetters = {};       // pos -> "a"..."z"
let lexFirstVowelPos = null;    // posição exata (0-based) da 1ª vogal
let lexFirstVowelHalf = null;   // { half: number, isBefore: bool } pergunta binária

let lexHypotheses = [];
let lexCurrentPos = null;       // para forma/letra
let lexBinaryQuestion = null;   // guarda pergunta binária atual
let lexStep = 1;                // 1 = gênero, 2 = VC

function updateLexiconVCUI() {
  if (lexStep === 1) {
    show("lex-step1");
    hide("lex-step2");
  } else {
    hide("lex-step1");
    show("lex-step2");
  }
  $("genderBtn").innerText = lexGender;
  $("lexiconVCPreview").innerText = lexBinPattern.join("");
  $("lexiconLengthPreview").innerText = String(lexLength);
}

function startLexicon() {
  lexGender = "M";
  lexBinPattern = [];
  lexLength = 0;
  lexKnownShapes = {};
  lexKnownLetters = {};
  lexFirstVowelPos = null;
  lexFirstVowelHalf = null;
  lexHypotheses = [];
  lexCurrentPos = null;
  lexBinaryQuestion = null;
  lexStep = 1;

  openOnly("lexiconVCPanel");
  updateLexiconVCUI();
}

function toggleGender() {
  lexGender = lexGender === "M" ? "F" : "M";
  updateLexiconVCUI();
}

function lexiconGoToStep2() {
  lexStep = 2;
  updateLexiconVCUI();
}

function lexiconAddBit(bit) {
  lexBinPattern.push(bit);
  lexLength = lexBinPattern.length;
  updateLexiconVCUI();
}

function lexiconSelectVC(kind) {
  if (lexStep !== 2) return;
  let bit = null;
  if (kind === "UP") bit = "1";
  if (kind === "DOWN") bit = "2";
  if (!bit) return;
  lexiconAddBit(bit);
}

/* Swipe no Lexicon VC */
(function setupLexiconSwipe() {
  const panel = $("lexiconVCPanel");
  if (!panel) return;

  let startX = null;
  let startY = null;

  panel.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length === 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  });

  panel.addEventListener("touchend", e => {
    if (startX == null || startY == null) return;
    if (e.changedTouches && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const dx = endX - startX;
      const dy = endY - startY;

      if (lexStep !== 2) {
        startX = startY = null;
        return;
      }

      if (Math.abs(dy) > Math.abs(dx)) {
        if (dy < -30) lexiconSelectVC("UP");
        else if (dy > 30) lexiconSelectVC("DOWN");
      }
    }
    startX = startY = null;
  });
})();

/* Construir hipóteses (VC / CV) */

function patternMatches(clean, pattern, map) {
  for (let i = 0; i < pattern.length; i++) {
    const bit = pattern[i];
    const expected = map[bit]; // "V" ou "C"
    const isVowel = "aeiou".includes(clean[i]);
    if (expected === "V" && !isVowel) return false;
    if (expected === "C" && isVowel) return false;
  }
  return true;
}

function buildInitialHypotheses() {
  const base = NAMES.filter(
    n => n.gender === lexGender && n.clean.length === lexLength
  );
  const H1 = { "1": "V", "2": "C" };
  const H2 = { "1": "C", "2": "V" };
  const list = [];

  const c1 = base.filter(n => patternMatches(n.clean, lexBinPattern, H1));
  if (c1.length > 0) list.push({ map: H1, candidates: c1 });

  const c2 = base.filter(n => patternMatches(n.clean, lexBinPattern, H2));
  if (c2.length > 0) list.push({ map: H2, candidates: c2 });

  return list;
}

function lexiconFinishVC() {
  if (lexBinPattern.length === 0) {
    alert("Faça pelo menos um swipe (cima/baixo) para cada letra.");
    return;
  }
  lexLength = lexBinPattern.length;
  lexKnownShapes = {};
  lexKnownLetters = {};
  lexFirstVowelPos = null;
  lexFirstVowelHalf = null;
  lexHypotheses = buildInitialHypotheses();

  if (lexHypotheses.length === 0) {
    showLexiconResults([]);
    return;
  }

  proceedNextLexiconQuestion();
}

/* Funções auxiliares do Lexicon */

function letterShape(ch) {
  ch = ch.toLowerCase();
  const curves = "cgoqsu";
  const mixed = "bdjpr";
  if (curves.includes(ch)) return "C";
  if (mixed.includes(ch)) return "M";
  return "R";
}

function firstVowelIndex(clean) {
  for (let i = 0; i < clean.length; i++) {
    if ("aeiou".includes(clean[i])) return i;
  }
  return -1;
}

function applyShapeLetterVowelFilters(candidates) {
  let result = candidates.slice();

  for (const posStr in lexKnownShapes) {
    const pos = parseInt(posStr, 10);
    const targetShape = lexKnownShapes[pos];
    result = result.filter(c => letterShape(c.clean[pos]) === targetShape);
  }

  for (const posStr in lexKnownLetters) {
    const pos = parseInt(posStr, 10);
    const targetLetter = lexKnownLetters[pos];
    result = result.filter(c => c.clean[pos] === targetLetter);
  }

  if (lexFirstVowelPos !== null) {
    result = result.filter(c => firstVowelIndex(c.clean) === lexFirstVowelPos);
  }

  if (lexFirstVowelHalf) {
    const halfHuman = lexFirstVowelHalf.half;
    const threshold = halfHuman - 1;
    const wantBefore = lexFirstVowelHalf.isBefore;

    result = result.filter(c => {
      const idx = firstVowelIndex(c.clean);
      if (idx < 0) return false;
      const isBefore = idx <= threshold;
      return isBefore === wantBefore;
    });
  }

  return result;
}

function filterAllHypotheses() {
  const newList = [];
  for (const h of lexHypotheses) {
    const f = applyShapeLetterVowelFilters(h.candidates);
    if (f.length > 0) newList.push({ map: h.map, candidates: f });
  }
  lexHypotheses = newList;
}

function getAllCandidates() {
  const map = new Map();
  for (const h of lexHypotheses) {
    for (const c of h.candidates) {
      const key = c.raw + "|" + c.gender;
      if (!map.has(key)) map.set(key, c);
    }
  }
  return Array.from(map.values());
}

function lexiconAnswerBinary(isYes) {
  if (!lexBinaryQuestion) return;

  if (lexBinaryQuestion.kind === "firstVowelHalf") {
    lexFirstVowelHalf = {
      half: lexBinaryQuestion.half,
      isBefore: isYes
    };
  }

  lexBinaryQuestion = null;
  proceedNextLexiconQuestion();
}

/* Escolha inteligente da próxima pergunta (entropia + binária) */

function proceedNextLexiconQuestion() {
  filterAllHypotheses();
  const all = getAllCandidates();
  const total = all.length;

  if (total === 0) {
    showLexiconResults([]);
    return;
  }
  if (total <= 9) {
    showLexiconResults(all);
    return;
  }

  const questions = [];

  /* 1) posição exata da 1ª vogal */
  if (lexFirstVowelPos === null) {
    const counts = {};
    all.forEach(c => {
      const idx = firstVowelIndex(c.clean);
      if (idx >= 0) {
        counts[idx] = (counts[idx] || 0) + 1;
      }
    });
    const keys = Object.keys(counts);
    if (keys.length >= 2) {
      let sumsq = 0;
      keys.forEach(k => {
        const n = counts[k];
        sumsq += n * n;
      });
      const expected = sumsq / total;
      const gain = total - expected;
      questions.push({ kind: "firstVowelPos", gain });
    }
  }

  /* 2) forma (R/C/M) em cada posição */
  let bestShape = null;
  for (let i = 0; i < lexLength; i++) {
    if (lexKnownShapes[i] || lexKnownLetters[i]) continue;

    const counts = { R: 0, C: 0, M: 0 };
    all.forEach(c => { counts[letterShape(c.clean[i])]++; });

    const variants = Object.values(counts).filter(n => n > 0);
    if (variants.length < 2) continue;

    let sumsq = 0;
    variants.forEach(n => { sumsq += n * n; });
    const expected = sumsq / total;
    const gain = total - expected;

    if (!bestShape || gain > bestShape.gain) {
      bestShape = { kind: "shape", pos: i, gain };
    }
  }
  if (bestShape) questions.push(bestShape);

  /* 3) letra exata em cada posição */
  let bestLetter = null;
  for (let i = 0; i < lexLength; i++) {
    if (lexKnownLetters[i]) continue;

    const counts = {};
    all.forEach(c => {
      const ch = c.clean[i];
      counts[ch] = (counts[ch] || 0) + 1;
    });

    const variants = Object.values(counts).filter(n => n > 0);
    if (variants.length < 2) continue;

    let sumsq = 0;
    variants.forEach(n => { sumsq += n * n; });
    const expected = sumsq / total;
    const gain = total - expected;

    if (!bestLetter || gain > bestLetter.gain) {
      bestLetter = { kind: "letter", pos: i, gain };
    }
  }
  if (bestLetter) questions.push(bestLetter);

  /* 4) binária: 1ª vogal ≤ metade? */
  if (!lexFirstVowelHalf) {
    const halfHuman = Math.ceil(lexLength / 2);
    const threshold = halfHuman - 1;

    let before = 0;
    let after = 0;

    all.forEach(c => {
      const idx = firstVowelIndex(c.clean);
      if (idx < 0) return;
      if (idx <= threshold) before++;
      else after++;
    });

    const variants = [before, after].filter(n => n > 0);
    if (variants.length >= 2) {
      const sumsq = before * before + after * after;
      const expected = sumsq / total;
      const gain = total - expected;

      questions.push({
        kind: "firstVowelHalf",
        gain,
        half: halfHuman
      });
    }
  }

  if (!questions.length) {
    showLexiconResults(all.slice(0, 9));
    return;
  }

  questions.sort((a, b) => b.gain - a.gain);
  const q = questions[0];

  if (q.kind === "firstVowelPos") {
    openOnly("lexiconVowelPanel");
    return;
  }

  if (q.kind === "shape") {
    lexCurrentPos = q.pos;
    $("lexiconShapePos").innerText = q.pos + 1;
    openOnly("lexiconShapePanel");
    return;
  }

  if (q.kind === "letter") {
    lexCurrentPos = q.pos;
    $("lexiconLetterPos").innerText = q.pos + 1;
    buildLexiconLetterGrid();
    openOnly("lexiconLetterPanel");
    return;
  }

  if (q.kind === "firstVowelHalf") {
    lexBinaryQuestion = q;
    const txtEl = $("lexiconBinaryText");
    if (txtEl) txtEl.innerText = `1ª vogal ≤ ${q.half}?`;
    openOnly("lexiconBinaryPanel");
    return;
  }

  showLexiconResults(all.slice(0, 9));
}

/* Painel: posição da 1ª vogal (1–12) */
(function buildVowelPosGrid() {
  const grid = $("vowelPosGrid");
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const btn = document.createElement("button");
    btn.innerText = String(i);
    btn.onclick = () => {
      lexFirstVowelPos = i - 1;
      proceedNextLexiconQuestion();
    };
    grid.appendChild(btn);
  }
})();

/* Painel: forma (R/C/M) */
function lexiconAnswerShape(shape) {
  if (lexCurrentPos === null) return;
  lexKnownShapes[lexCurrentPos] = shape;
  lexCurrentPos = null;
  proceedNextLexiconQuestion();
}

/* Painel: letra exata (grade A–Z) */
function buildLexiconLetterGrid() {
  const grid = $("lexiconLetterGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(L => {
    const btn = document.createElement("button");
    btn.innerText = L;
    btn.onclick = () => {
      if (lexCurrentPos === null) return;
      lexKnownLetters[lexCurrentPos] = L.toLowerCase();
      lexCurrentPos = null;
      proceedNextLexiconQuestion();
    };
    grid.appendChild(btn);
  });
}

/* ============================================================
   RESULTADOS (compartilhado por todos os modos)
   ============================================================ */

function showLexiconResults(list) {
  openOnly("resultPanel");
  const box = $("resultBox");

  if (!list || list.length === 0) {
    box.innerText = "Nenhum nome encontrado!";
    return;
  }

  const out = list
    .slice(0, 9)
    .map(c => c.raw)
    .join("\n");

  box.innerText = out;
}

/* ============================================================
   MENU -> escolha de modo
   ============================================================ */

function startMode(mode) {
  if (mode === "lexicon") {
    startLexicon();
  } else if (mode === "swipe") {
    startSwipe();
  } else if (mode === "pigback") {
    startPigback();
  } else if (mode === "grade") {
    startGrade();
  } else {
    goHome(true);
  }
}

/* ============================================================
   SWIPE GLOBAL COM 2 DEDOS PARA VOLTAR AO MENU
   ============================================================ */

let twoTouchStart = null;

document.addEventListener("touchstart", e => {
  if (e.touches.length === 2) {
    twoTouchStart = [
      e.touches[0].clientY,
      e.touches[1].clientY
    ];
  } else {
    twoTouchStart = null;
  }
});

document.addEventListener("touchend", e => {
  if (!twoTouchStart) return;
  if (e.changedTouches.length === 2) {
    const endY1 = e.changedTouches[0].clientY;
    const endY2 = e.changedTouches[1].clientY;

    const moved1 = endY1 - twoTouchStart[0];
    const moved2 = endY2 - twoTouchStart[1];

    if (moved1 > 80 && moved2 > 80) {
      goHome(true); // volta para etapa 1 do menu
    }
  }
  twoTouchStart = null;
});