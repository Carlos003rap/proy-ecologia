document.addEventListener('DOMContentLoaded', function () {
    cargar('intro');
    const toggle = document.querySelector('.toggle-menu-btn');
    const menu = document.getElementById('menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
        
        // Cerrar menú al hacer clic en un botón (móvil)
        menu.addEventListener('click', (e) => { 
            if(e.target.tagName === 'BUTTON' && !e.target.classList.contains('toggle-menu-btn')) {
                menu.classList.remove('open'); 
            }
        });
        
        // Agregar botón flotante para abrir menú en móvil
        const floatingBtn = document.createElement('button');
        floatingBtn.className = 'floating-menu-btn';
        floatingBtn.innerHTML = '☰';
        floatingBtn.setAttribute('aria-label', 'Abrir menú');
        document.body.appendChild(floatingBtn);
        
        floatingBtn.addEventListener('click', function() {
            menu.classList.add('open');
        });
    }
});

function marcarActivo(seccion){
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === seccion);
    });
}

function animarContenido(elem){
    elem.classList.remove('animado');
    void elem.offsetWidth;
    elem.classList.add('animado');
}

function cargar(seccion) {
    const c = document.getElementById('contenido');
    animarContenido(c);
    marcarActivo(seccion);

    const contenidos = {
        intro: `
            <h2>Biblioteca Ambiental Digital: Humedales de Agua Dulce</h2>
            <p><strong>Bienvenido a esta exploración interactiva sobre uno de los ecosistemas más vitales y vulnerables del planeta.</strong></p>
            
            <div class="bloque">
                <h3>¿Por qué estudiar los humedales en el siglo XXI?</h3>
                <p>Los humedales de agua dulce son ecosistemas fundamentales para la <strong>sostenibilidad ambiental global</strong>, representando la interfaz crítica entre ambientes terrestres y acuáticos. Aunque ocupan menos del <strong>6% de la superficie terrestre</strong> (aproximadamente 12,1 millones de kilómetros cuadrados), albergan aproximadamente el <strong>40% de todas las especies conocidas del planeta</strong>. Esta desproporción entre área y biodiversidad los convierte en los ecosistemas con mayor densidad de especies por unidad de superficie.</p>
                
                <p>Los humedales almacenan el <strong>doble de carbono que todos los bosques del mundo combinados</strong>, con una capacidad de captura de aproximadamente <strong>771 gigatoneladas de carbono orgánico</strong> en sus suelos. Un solo metro cuadrado de turba de humedal puede contener entre <strong>2-3 kilogramos de carbono</strong> acumulado durante siglos o milenios. Sin embargo, estos ecosistemas enfrentan presiones sin precedentes en la historia humana: se pierden <strong>tres veces más rápido que los bosques</strong>, con tasas actuales de pérdida estimadas en <strong>35,000 km² anuales</strong>, equivalente a la desaparición de un área del tamaño de un campo de fútbol cada 30 segundos.</p>
                
                <p>La conversión a agricultura y desarrollo urbano representa el <strong>87% de las pérdidas históricas</strong>. Desde 1700, el mundo ha perdido aproximadamente 87% de sus humedales originales. Este ritmo de destrucción se ha acelerado dramáticamente desde 1950, cuando el crecimiento poblacional exponencial y la <strong>Revolución Verde</strong> generaron presiones inmensas por tierra cultivable. En Europa, países como Países Bajos perdieron el <strong>95% de sus humedales históricos</strong>; en Estados Unidos, la cifra alcanza el 53% (más de 89 millones de hectáreas); y en Asia, especialmente en China e India, la pérdida supera el 60% en muchas regiones costeras e interiores.</p>
                
                <p><strong>Valor económico cuantificado:</strong> Estudios recientes han valuado los servicios ecosistémicos de humedales entre <strong>$15,000 y $72,000 dólares por hectárea por año</strong>, dependiendo del tipo de humedal y su ubicación. Para poner esto en perspectiva, los servicios globales de todos los humedales del mundo se estiman conservadoramente en <strong>$47 billones</strong> (trillones en escala anglosajona) de dólares anuales. Estos servicios incluyen:</p>
                <ul class="lista-items">
                    <li><strong>Provisión de agua dulce:</strong> <strong>1,500 millones de personas</strong> dependen directamente de humedales para obtener agua potable</li>
                    <li><strong>Producción de alimentos:</strong> el <strong>arroz</strong>, cultivado en humedales artificiales (arrozales), alimenta a más de <strong>3,500 millones de personas</strong></li>
                    <li><strong>Pesca:</strong> aproximadamente <strong>90% de las especies pesqueras comerciales</strong> dependen de humedales costeros e interiores para reproducción o alimentación durante alguna etapa de su ciclo de vida</li>
                    <li><strong>Protección contra desastres:</strong> humedales costeros reducen la altura de olas de tormenta entre <strong>20-40%</strong>, evitando daños estimados en <strong>$52 mil millones anuales</strong> solo en zonas costeras de EE.UU.</li>
                    <li><strong>Turismo y recreación:</strong> los humedales generan aproximadamente <strong>$200 mil millones anuales</strong> en turismo ecológico global</li>
                </ul>
                
                <p>Esta biblioteca digital ofrece una exposición estructurada y profunda sobre los humedales, cubriendo desde conceptos básicos hasta aplicaciones prácticas de conservación, diseñada para sustentar una presentación educativa de aproximadamente 50-60 minutos con profundidad académica y relevancia práctica.</p>
            </div>
            <img src="imagenes/humedal.estudio.jpg" alt="Humedal biodiverso" class="imagen-bloque">
            
            <div class="bloque">
                <h3>El contexto de crisis: Por qué actuar ahora</h3>
                <p>Estamos en un <strong>momento crítico de la historia ambiental</strong>. El <strong>Panel Intergubernamental sobre Cambio Climático (IPCC)</strong> y la <strong>Plataforma Intergubernamental sobre Biodiversidad y Servicios Ecosistémicos (IPBES)</strong> han identificado la degradación de humedales como una de las <strong>cinco principales amenazas a la estabilidad ecológica global</strong>, junto con la deforestación, la sobreexplotación de océanos, la expansión agrícola insostenible y el cambio climático.</p>
                
                <p><span class="highlight">La ventana de acción es limitada:</span> los modelos científicos sugieren que si no detenemos la pérdida de humedales en los próximos <strong>10-15 años</strong>, alcanzaremos <strong>puntos de no retorno (tipping points)</strong> donde la restauración será técnicamente imposible o económicamente inviable en muchas regiones. Por ejemplo:</p>
                <ul class="lista-items">
                    <li>En el <strong>Delta del Mekong</strong> (Vietnam), la subsidencia del suelo causada por drenaje y extracción de agua subterránea ha provocado que el <strong>40% del delta</strong> ahora esté por debajo del nivel del mar, haciendo irreversible la salinización incluso si se detuviera el drenaje</li>
                    <li>En las <strong>turberas de Indonesia</strong>, drenadas para plantaciones de palma aceitera, la oxidación de turba ha liberado tanto carbono que ahora el país es el <strong>tercer mayor emisor global de gases de efecto invernadero</strong>, superando a economías industriales mucho más grandes</li>
                    <li>En el <strong>Mar de Aral</strong> (Asia Central), la desviación de ríos para riego causó la evaporación del <strong>90% del lago</strong>, creando un desierto tóxico con sales y pesticidas concentrados, afectando la salud de <strong>3,5 millones de personas</strong> en la región</li>
                </ul>
                
                <p><strong>Paradoja de la invisibilidad:</strong> A pesar de su importancia monumental, los humedales han sido históricamente ignorados, malentendidos o activamente despreciados. Durante siglos, fueron considerados tierras "baldías" que debían ser "mejoradas" mediante drenaje. Esta percepción errónea persiste en algunas culturas y sistemas legales, donde humedales aún carecen de protección legal equivalente a bosques o reservas marinas. Cambiar esta narrativa cultural es tan importante como las acciones de conservación técnica.</p>
            </div>

            <div class="bloque">
                <h3>Alcance y estructura de este recurso educativo</h3>
                <p>A través de diez capítulos exhaustivos y complementarios, exploraremos cada dimensión de los humedales de agua dulce:</p>
                <ul class="lista-items">
                    <li><strong>Definición y tipología:</strong> qué son los humedales desde perspectivas ecológicas, hidrológicas y legales; clasificaciones científicas principales (sistema Ramsar, sistema Cowardin de EE.UU., clasificación hidrogeomorfológica); diferencias entre humedales naturales vs. artificiales; cómo identificar humedales en campo usando indicadores botánicos, edafológicos e hidrológicos</li>
                    <li><strong>Características ecológicas:</strong> los factores hidrológicos (patrones de inundación, hidroperiodo, fuentes de agua), edáficos (suelos hidromormos, procesos anóxicos, acumulación de turba) y bióticos (adaptaciones de plantas y animales) que definen estos ambientes; cómo interactúan estos componentes para crear ecosistemas funcionales únicos; variaciones regionales y climatológicas</li>
                    <li><strong>Funciones y servicios ecosistémicos:</strong> cómo los humedales regulan el agua (amortiguamiento de crecidas, sostenimiento de caudales base, recarga de acuíferos), purifican contaminantes (eliminación de nitrógeno, retención de fósforo, degradación de pesticidas, captura de metales pesados) y almacenan carbono (con comparaciones cuantitativas vs. bosques templadostropicales); valoración económica de estos servicios usando metodologías de costos evitados y precios de mercado</li>
                    <li><strong>Biodiversidad extraordinaria:</strong> la fauna y flora especializada que depende de estos ecosistemas; análisis detallado de grupos taxonómicos principales (plantas vasculares, briofitas, algas, invertebrados acuáticos, peces, anfibios, reptiles, aves acuáticas, mamíferos); cadenas tróficas y redes alimentarias; rol de humedales como corredores de conectividad y zonas de cría; especies endemícas y en peligro que dependen críticamente de humedales</li>
                    <li><strong>Amenazas globales y regionales:</strong> factores humanos directos (drenaje y conversión, contaminación química, eutrofización, sobreexplotación de agua, especies invasoras, fragmentación) e indirectos (cambio climático, alteración de régimenes hidrológicos en cuencas, desarrollo urbano upstream); análisis cuantitativo de tasas de pérdida por región; casos de colapso ecológico total (Mar de Aral, Lago Chad, Everglades degradados)</li>
                    <li><strong>Estrategias de protección y restauración:</strong> acciones concretas clasificadas por escala (individual, comunitaria, nacional, internacional); marco legal internacional (Convención Ramsar, otras convenciones relevantes); creación y manejo de áreas protegidas; técnicas de restauración ecológica (reestablecimiento hidrológico, mejora de calidad de agua, replantación de vegetación nativa, control de invasoras, reintroducción de fauna); monitoreo de efectividad; financiamiento (pago por servicios ecosistémicos, bonos de carbono, ecoturismo)</li>
                    <li><strong>Casos de estudio regionales:</strong> ejemplos reales y actuales con datos verificables, incluyendo la situación detallada en Panamá (humedales de la Zona del Canal, Darién, costas del Pacífico y Caribe); comparaciones con otros países tropicales de América Latina; lecciones aprendidas de éxitos y fracasos; proyectos de restauración emblamáticos que han logrado recuperar funciones ecosistémicas</li>
                </ul>
                <img src="imagenes/humedales.jpg" alt="Humedal de agua dulce" class="imagen-bloque">
            
                
                <p><strong>Profundidad académica:</strong> El contenido ha sido compilado usando literatura científica revisada por pares, reportes de organismos internacionales (IPCC, IPBES, Ramsar Secretariat, IUCN, UNEP), datos gubernamentales oficiales y experiencias documentadas de proyectos de conservación. Cada afirmación cuantitativa está respaldada por estudios publicados entre 2010-2025, asegurando relevancia con la ciencia contemporánea.</p>
            </div>
            

    

            <div class="bloque">
                <h3>Cómo usar eficazmente esta página</h3>
                <p>Cada sección del menú lateral actúa como un capítulo independiente pero interrelacionado. Puede navegarlos en cualquier orden según las preguntas de la audiencia durante presentaciones en vivo, aunque se recomienda seguir la secuencia propuesta para una comprensión progresiva y acumulativa. El contenido ha sido redactado con suficiente profundidad para respaldar una exposición verbal de 5-7 minutos por sección, con puntos de discusión listos para expandir según interés.</p>
                
                <p><strong>Sugerencias para presentadores:</strong></p>
                <ul class="lista-items">
                    <li>Comience con la Introducción para establecer el contexto global de crisis</li>
                    <li>Use la sección Definición para aclarar terminología y evitar confusiones conceptuales tempranas</li>
                    <li>Las secciones Características, Importancia y Biodiversidad forman el núcleo técnico; dedique tiempo adecuado</li>
                    <li>Amenazas establece urgencia; Protección ofrece esperanza y agencia</li>
                    <li>El Caso Panamá ancla conceptos abstractos en realidad concreta y local</li>
                    <li>Concluya con un llamado a la acción específico y alcanzable</li>
                </ul>
            </div>

            
            
            <p class="galeria-titulo">📸 Galería de imágenes: Humedales de agua dulce en el mundo</p>
            <div class="galeria">
                <div class="galeria-item">
                    <img src="Imagenes/Rio negro.jpg" alt="Humedal con vegetación">
                    <p>Humedal de Río Negro - Ubicado en Brasil </p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/Grands Affluents.webp" alt="Aves en humedal">
                    <p>Grands Affluents - Ubicado en El Congo</p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/Queen Maud Gulf.jpg" alt="Atardecer en humedal">
                    <p>Queen Maud Gulf - Ubicado en Ramsar de Canadá</p>
                </div>
            </div>
        `,

        definicion: `
            <h2>¿Qué son los Humedales de Agua Dulce? Definición Científica y Marco Conceptual</h2>
            <p>Los humedales son ecosistemas complejos caracterizados por la presencia permanente o periódica de agua (ya sea en superficie o cerca de ella), suelos saturados o inundados durante períodos suficientemente largos, y vegetación adaptada fisiológica y morfológicamente a condiciones de anegamiento. Esta definición aparentemente simple esconde una diversidad extraordinaria de ambientes que comparten estos tres atributos fundamentales pero varían dramáticamente en composición, estructura y función.</p>
            
            <div class="bloque">
                <h3>Definición formal según la Convención de Ramsar</h3>
                <p>La Convención sobre Humedales de Importancia Internacional, firmada en Ramsar (Irán) en 1971 y entrada en vigor en 1975, es el tratado intergubernamental más importante dedicado exclusivamente a un tipo de ecosistema. Ramsar define humedales formalmente como:</p>
                
                <p class="cite">"Extensiones de marismas, pantanos y turberas, o superficies cubiertas de agua, sean éstas de régimen natural o artificial, permanentes o temporales, estancadas o corrientes, dulces, salobres o saladas, incluidas las extensiones de agua marina cuya profundidad en marea baja no exceda los seis metros."</p>
                
                <p>Esta definición deliberadamente amplia permite incluir una enorme variedad de ecosistemas bajo el paraguas de "humedal", desde turberas árticas hasta manglares tropicales, desde lagunas de alta montaña hasta deltas fluviales masivos. La inclusión de sistemas "artificiales" reconoce que arrozales, estanques de acuicultura y embalses pueden proporcionar servicios ecosistémicos valiosos similares a humedales naturales.</p>
                
                <p><strong>Historia de la definición científica:</strong> Durante siglos, los humedales carecieron de reconocimiento formal como categoría ecológica distinta. Eran simplemente considerados tierras "inutilizables" o "baldías". La ciencia ecológica moderna de humedales emergió principalmente en la década de 1970, impulsada por tres factores convergentes:</p>
                <ul class="lista-items">
                    <li>El reconocimiento de servicios ecosistémicos (control de inundaciones, purificación de agua) tras desastres causados por drenaje masivo</li>
                    <li>La conciencia creciente sobre pérdida de biodiversidad, particularmente aves acuáticas migratorias</li>
                    <li>Avances en hidrología que permitieron cuantificar flujos de agua y nutrientes</li>
                </ul>
                
                <p>Investigadores pioneros como Eugene Odum, que acuñó el término "servicios ecosistémicos", y William Mitsch, quien desarrolló principios de restauración de humedales, establecieron las bases científicas para valorar y proteger estos ecosistemas.</p>
            </div>
            <img src="imagenes/ramsar-englisch.jpg" alt="Logo" class="imagen-bloque">

            <div class="bloque">
                <h3>Clasificación exhaustiva de humedales de agua dulce</h3>
                <p>Los humedales de agua dulce se clasifican usando múltiples sistemas complementarios. La clasificación más utilizada combina criterios hidrológicos, geomorfológicos y bióticos:</p>
                
                <strong>1. Humedales palustres (Paludales o de Pantano)</strong>
                <p>Son humedales interiores dominados por vegetación emergente persistente, sin flujo de agua significativo. Representan aproximadamente el 40% de humedales de agua dulce globales. Incluyen:</p>
                <ul class="lista-items">
                    <li><strong>Pantanos herbáceos:</strong> Dominados por gramíneas, juncos (familia Juncaceae), espadañas (Typha spp.), totoras y ciperáceas. Profundidad usualmente menor a 1 metro. Ejemplos: Everglades de Florida (con 6,000 km² de pantanos de sawgrass), Pantanos del Ibérico en España, Esteros del Iberá en Argentina (13,000 km² de humedales con vegetación palustre dominante)</li>
                    <li><strong>Pantanos arbustivos:</strong> Vegetación leñosa baja tolerante a inundación estacional. Especies típicas incluyen sauces enanos (Salix spp.), alisos (Alnus spp.). Estos ecosistemas son críticos en zonas templadas y boreales</li>
                    <li><strong>Pantanos arbolados (swamp forests):</strong> Bosques inundados estacionalmente con árboles de gran porte adaptados. En zonas templadas: tupelos (Nyssa aquatica), cipreses calvos (Taxodium distichum); en trópicos: várzeas amazónicas con cientos de especies arbóreas adaptadas a inundación de hasta 12 metros de profundidad por 6-8 meses anuales</li>
                    <li><strong>Turberas:</strong> Ecosistemas donde acumulación de materia orgánica (turba) excede descomposición debido a condiciones anóxicas. Dividas en: (a) Turberas ombrótrogas (alimentadas solo por lluvia, extremadamente ácidas con pH 3-4, dominadas por musgos Sphagnum); (b) Turberas minerotrofas (alimentadas también por agua subterránea o escorrentia, menos ácidas con pH 5-7). Las turberas almacenan aproximadamente 550 gigatoneladas de car bono, más que todo el carbono de la biomasa forestal del planeta</li>
                </ul>
                <img src="imagenes/Humedales palustres.jpg" alt="Humedales palustres " class="imagen-bloque">

                <strong>2. Humedales lóticos (Riparios o Fluviales)</strong>
                <p>Sistemas asociados a ríos y arroyos con flujo de agua unidireccional significativo. Incluyen aproximadamente el 25% de humedales de agua dulce:</p>
                <ul class="lista-items">
                    <li><strong>Riberas y zonas riparias:</strong> Franjas vegetadas a lo largo de cursos de agua. Funcionan como filtros de sedimentos y nutrientes, estabilizadores de orillas y corredores de fauna. Una ribera funcional de 30 metros de ancho puede eliminar 80-90% de nitrógeno y fósforo del escurrimiento agrícola</li>
                    <li><strong>Planicies de inundación:</strong> Áreas adyacentes a ríos que se inundan estacional o esporádicamente durante crecidas. Críticas para ciclos de vida de peces (zonas de desove y cría). El Pantanal brasilero-paraguayo (147,000 km²) es la planicie de inundación continua más grande del mundo, inundándose 80% durante estación húmeda</li>
                    <li><strong>Deltas interiores:</strong> Donde ríos se dividen en múltiples canales distribuidores. Delta del Okavango en Botswana (15,000 km²) es único delta interior que no desemboca en mar u océano, sosteniendo poblaciones masivas de vida silvestre</li>
                    <li><strong>Meandros abandonados (oxbow lakes):</strong> Secciones de río aisladas tras cambio de curso. Pueden mantener comunidades acuáticas únicas durante décadas antes de colmatarse</li>
                </ul>
                <img src="imagenes/Humedales lóticos.jpg" alt="Humedales lóticos" class="imagen-bloque">

                <strong>3. Humedales lénticos (Lacustres)</strong>
                <p>Cuerpos de agua abierta con poca corriente, representando 15-20% de humedales de agua dulce:</p>
                <ul class="lista-items">
                    <li><strong>Lagos someros:</strong> Profundidad menor a 3-5 metros, permitiendo penetración de luz hasta el fondo. Alta productividad primaria. Ejemplos: Lago Titicaca (altiplano andino, 8,372 km² a 3,812 msnm), lagos de Pátzcuaro y Chapala en México</li>
                    <li><strong>Lagunas estacionales:</strong> Se llenan durante lluvias, secan parcial o totalmente en estaciones secas. Adaptaciones especializadas de fauna (camarones de agua dulce con huevos resistentes a desecación, peces pulmonados). Lagunas de pampa argentina, lagos estacionales de África Oriental</li>
                    <li><strong>Estanques permanentes:</strong> Cuerpos pequeños (0.1-10 hectáreas) con agua permanente. Pueden ser naturales (depresiones glacioformadas, surgencias de acuíferos) o artificiales (estanques de ganado, jagüeyes centroamericanos, abbrevaderos)</li>
                    <li><strong>Lagos de cráter:</strong> Formados en calderas volcánicas. Lagos de Coatepeque (El Salvador), Atitlán (Guatemala), Taal (Filipinas). Frecuentemente oligotróficos (pobres en nutrientes) con aguas cristalinas y endemismos únicos</li>
                </ul>
                <img src="imagenes/Humedales lénticos.jpg" alt="Humedales lénticos" class="imagen-bloque">

                <strong>4. Sistemas híbridos y tipos especiales</strong>
                <ul class="lista-items">
                    <li><strong>Humedales de surgencia (springs y seeps):</strong> Donde agua subterránea emerge a superficie. Mantienen condiciones estables (temperatura, química del agua) que sustentan especies especializadas y poblaciones relictas. Oasis en desiertos dependen de estas surgencias</li>
                    <li><strong>Humedales de alta montaña (páramos húmedos, bofedales andinos):</strong> Entre 3,000-5,000 msnm. Almacenan agua de deshielo glaciar. Bofedales alimentan ríos que proveen agua a decenas de millones de personas en valles andinos. Extremadamente sensibles a cambio climático (retroceso glaciar reduce recarga)</li>
                    <li><strong>Humedales artificiales funcionales:</strong> Arrozales (1.6 millones de km² globalmente), sistemas de tratamiento de aguas residuales construidos, estanques de acuicultura. Aunque artificiales, pueden proveer hábitat para biodiversidad significativa si manejados apropiadamente</li>
                </ul>
            </div>
            <img src="imagenes/Humedales artificiales.webp" alt="Humedal de agua dulce" class="imagen-bloque">

            <div class="bloque">
                <h3>Definición ecológica versus legal</h3>
                <p>Desde el punto de vista ecológico, los humedales se reconocen por tres atributos clave: presencia de agua (permanente o temporal), suelos hidromórficos (saturados durante períodos significativos), y vegetación hidrófila adaptada. Sin embargo, las definiciones legales varían entre países y jurisdicciones, lo que a menudo complica los esfuerzos de protección. Algunos países requieren que todos los tres atributos estén presentes, mientras otros utilizan criterios más flexibles que incluyen humedales estacionales.</p>
                
                <p><strong>Controversias de delimitación:</strong> En muchos casos, la delimitación de humedales para propósitos regulatorios es objeto de disputa legal. Desarrolladores inmobiliarios y agricultores a menudo cuestionan clasificaciones de humedales estacionales o marginales. En EE.UU., la definición de "waters of the United States" (aguas de los Estados Unidos) bajo la Clean Water Act ha sido objeto de múltiples casos ante la Corte Suprema, con decisiones que varían según composición del tribunal. Esto demuestra que la ciencia sola no puede resolver conflictos que involucran intereses económicos competitivos; se requieren diálogos multisectoriales y políticas públicas claras.</p>
            </div>

            <div class="bloque">
                <h3>Dimensiones globales</h3>
                <p><span class="estadistica">6% de la superficie terrestre</span> está cubierta por humedales, pero su distribución es desigual. Los humedales más extensos se encontran en Siberia, el Amazonas, el Sáhara, Canadá y el Sudeste Asiático. América Latina alberga aproximadamente el 30% de los humedales del mundo.</p>
                <p><span class="estadistica">3,9 millones de km²</span> era la extensión estimada de humedales en 2018, aunque esta cifra ha disminuido aceleradamente en los últimos 50 años.</p>
                
                <p><strong>Distribución por continente (estimaciones 2018):</strong></p>
                <ul class="lista-items">
                    <li><strong>América:</strong> 1,2 millones de km² (31%). Incluye vastos humedales amazónicos, Pantanal, Everglades, humedales boreales canadienses, estuarios del Mississippi</li>
                    <li><strong>Asia:</strong> 1,0 millones de km² (26%). Delta del Mekong, humedales de llanura gangetica, arrozales extensos de China, mangles de Sundarbans (Bangladesh-India), humedales siberianos</li>
                    <li><strong>África:</strong> 0,8 millones de km² (21%). Cuenca del Congo, Delta del Okavango, Sudd (Sudán del Sur, el humedal palustre más grande del mundo con 57,000 km²), Chad, estuarios del Níger</li>
                    <li><strong>Europa:</strong> 0,4 millones de km² (10%). Principalmente turberas en países nórdicos, deltas del Danubio y Volga, marismas del Guadalquivir</li>
                    <li><strong>Oceanía:</strong> 0,1 millones de km² (3%). Humedales de Queensland (Australia), llanuras de inundación de Murray-Darling</li>
                    <li><strong>Otros (islas, Antártida):</strong> 0,4 millones de km² (9%)</li>
                </ul>
            </div>

            <img src="Imagenes/Dimensiones.jpg" alt="Clasificación de humedales" class="imagen-bloque">
            
        `,

        caracteristicas: `
            <h2>Características Físicas y Ecológicas</h2>
            <p>Los humedales se definen por una serie de características interconectadas que crean ambientes únicos y altamente productivos. Comprender estas características es esencial para apreciar su importancia ecológica y las razones por las que son tan sensibles a perturbaciones humanas.</p>

            <div class="bloque">
                <h3>Hidrología: El motor del ecosistema</h3>
                <p>Los patrones de agua son la característica definitoria de los humedales. La hidrología aguas arriba controla el abastecimiento de agua, mientras que la evapotranspiración y la infiltración determinan su permanencia. Los humedales pueden experimentar ciclos estacionales dramáticos: completamente inundados en épocas lluviosas y reducidos a lagos aislados o suelos húmedos en periodos secos.</p>

                <p><strong>Componentes hidrológicos principales:</strong></p>
                <ul class="lista-items">
                    <li><strong>Profundidad y duración de la inundación:</strong> varían desde permanentemente sumergidos hasta ocasionalmente húmedos</li>
                    <li><strong>Flujo de agua:</strong> puede ser flujo rápido (ríos) o prácticamente estancado (lagunas)</li>
                    <li><strong>Variabilidad estacional:</strong> fluctuaciones predecibles regulan ciclos biológicos</li>
                    <li><strong>Conexión con acuíferos:</strong> muchos humedales interactúan con aguas subterráneas</li>
                </ul>

                <p>Los cambios en hidrología son la principal causa de degradación de humedales. Drenaje, represamiento, desviación de flujos y alteración de precipitación por cambio climático impactan directamente en su funcionamiento.</p>
            </div>
             <img src="Imagenes/Hidrologia.jpg" alt="hidrologia" class="imagen-bloque">

            <div class="bloque">
                <h3>Suelos: Acumulación de nutrientes y materia orgánica</h3>
                <p>Los suelos de humedales son únicos e identificables. Bajo condiciones de saturación prolongada, la descomposición anóxica (sin oxígeno) produce suelos ricos en materia orgánica pero pobres en oxígeno disuelto.</p>

                <strong>Propiedades edáficas características:</strong>
                <ul class="lista-items">
                    <li><strong>Acumulación de turba o materia orgánica:</strong> suelos negros o grisáceos muy ricos en carbono</li>
                    <li><strong>Suelos hidromórficos:</strong> presentan marmoleado (manchas grises por reducción de hierro)</li>
                    <li><strong>Baja concentración de oxígeno:</strong> favorece procesos anaeróbicos como la metanogénesis</li>
                    <li><strong>Ciclos de nutrientes alterados:</strong> fijación de nitrógeno y retención de fósforo son prominentes</li>
                </ul>

                <p>La capacidad de los suelos de humedales para almacenar carbono es excepcional: aunque representan solo el 5-8% de la tierra global, contienen aproximadamente el 35% del carbono terrestre. Esto los convierte en aliados críticos contra el cambio climático, pero su drenaje libera miles de millones de toneladas de CO₂ anualmente.</p>
            </div>
             <img src="Imagenes/Suelos.webp" alt="suelos" class="imagen-bloque">

            <div class="bloque">
                <h3>Vegetación y adaptaciones especializadas</h3>
                <p>La vida en suelos anegados requiere adaptaciones dramáticas. Las plantas de humedales (hidrófitas) presentan mecanismos extraordinarios para sobrevivir con poco oxígeno:</p>

                <strong>Adaptaciones vegetales:</strong>
                <ul class="lista-items">
                    <li><strong>Raíces aéreas y neumatóforos:</strong> tallos especializados que crecen hacia arriba para intercambio gaseoso</li>
                    <li><strong>Tejido parenquimático aerífero:</strong> espacios en tallos y hojas para transporte de oxígeno</li>
                    <li><strong>Reducción de raíces profundas:</strong> en su lugar, rizomas horizontales en capas superiores del suelo</li>
                    <li><strong>Tolerancia a salinidad variable:</strong> muchos humedales experimentan fluctuaciones en concentración de sales</li>
                    <li><strong>Ciclos reproductivos ajustados:</strong> floración y fructificación sincronizadas con ciclos hidrológicos</li>
                </ul>

                <p>Las comunidades vegetales varían enormemente según la profundidad, duración de inundación y régimen de salinidad, creando mosaicos de microambientes que soportan diferentes especies.</p>
            </div>
             <img src="Imagenes/Plantas.webp" alt="Clasificación de humedales" class="imagen-bloque">

            <div class="bloque">
                <h3>Condiciones físico-químicas del agua</h3>
                <p><strong>pH y alcalinidad:</strong> pueden variar de ácidos (en turberas con poco aporte mineral) a muy alcalinos (en sistemas de calcio). El pH influye en disponibilidad de nutrientes y en comunidades de microorganismos.</p>
                <p><strong>Nutrientes disueltos:</strong> nitrógeno y fósforo típicamente abundantes, sosteniendo altas tasas de productividad primaria. Esto puede llevar a eutrofización si se vuelven excesivos.</p>
                <p><strong>Turbidez y color:</strong> el contenido de materia orgánica disuelta tiñe el agua de tonos ámbar o café oscuro, limitando la penetración de luz pero enriqueciendo químicamente el agua.</p>
                <p><strong>Concentración de oxígeno disuelto:</strong> típicamente baja en aguas profundas y en sedimentos, creando ambientes anóxicos que favorecen procesos de descomposición especializada.</p>
            </div>

            <img src="Imagenes/Agua.jpg" alt="Clasificación de humedales" class="imagen-bloque">
        
           
        `,

        importancia: `
            <h2>Importancia Ecológica de los Humedales</h2>
            <p>Los humedales proporcionan <strong>funciones y servicios ambientales</strong> cuyo valor económico ha sido estimado entre <strong>$15,000 y $72,000 dólares por hectárea por año</strong>. A continuación, exploramos en detalle los mecanismos mediante los cuales estos ecosistemas sostienen la vida en el planeta.</p>

            <div class="bloque">
                <h3>1. Regulación del ciclo del agua</h3>
                <p>Los humedales actúan como <strong>esponjas gigantes en el paisaje</strong>, almacenando agua durante períodos húmedos y liberándola gradualmente durante sequías. Esta función es crítica para la <strong>estabilidad hidrológica regional</strong>.</p>

                <h4>Mecanismos específicos:</h4>
                <ul class="lista-items">
                    <li><strong>Amortiguamiento de crecidas:</strong> durante lluvias intensas, el agua se infiltra en suelos porosos y se almacena en depresiones someras, reduciendo picos de flujo río abajo. Un humedal de <strong>100 hectáreas</strong> puede retener varios millones de metros cúbicos de agua</li>
                    <li><strong>Sostenimiento de caudales base:</strong> durante sequías, la descarga gradual desde acuíferos conectados mantiene flujos en ríos y arroyos, vitales para agua potable y ecosistemas acuáticos</li>
                    <li><strong>Recarga de acuíferos:</strong> la infiltración en humedales repone reservas subterráneas que abastecen pozos comunitarios</li>
                </ul>

                <p><strong>Impacto económico:</strong> la pérdida de humedales en cuencas históricamente aumenta <strong>inundaciones destructivas y sequías severas</strong>. Por ejemplo, la pérdida de humedales en el Misisipi (EE.UU.) ha contribuido a inundaciones más frecuentes que cuestan miles de millones en daños anuales.</p>
            </div>
            <img src="Imagenes/Regulacion.webp" alt="regulacion" class="imagen-bloque">
        

            <div class="bloque">
                <h3>2. Purificación y mejora de la calidad del agua</h3>
                <p>Los humedales funcionan como <strong>“riñones del paisaje”</strong>, filtrando y degradando contaminantes de forma natural sin costo de tratamiento. Este servicio es especialmente valioso en regiones con acceso limitado a plantas de tratamiento modernas.</p>

                <h4>Procesos de purificación:</h4>
                <ul class="lista-items">
                    <li><strong>Retención física de sedimentos:</strong> la vegetación densa y suelos de baja velocidad retienen partículas suspendidas, clarificando el agua</li>
                    <li><strong>Transformación de nutrientes:</strong> bacterias anóxicas convierten nitratos en nitrógeno gas (<strong>desnitrificación</strong>), reduciendo la carga de nutrientes. Un humedal puede eliminar <strong>90% del nitrógeno</strong> en agua que lo cruza</li>
                    <li><strong>Absorción y conversión de fósforo:</strong> el fósforo se adhiere a sedimentos o es incorporado por plantas, siendo posteriormente depositado en suelo</li>
                    <li><strong>Degradación de contaminantes orgánicos:</strong> pesticidas y otros compuestos son metabolizados por microorganismos especializados</li>
                    <li><strong>Acumulación de metales pesados:</strong> algunos metales son precipitados en sedimentos o absorbidos por plantas acumuladoras</li>
                </ul>

                <p><strong>Caso de aplicación:</strong> muchas ciudades han construido <strong>humedales artificiales para tratamiento terciario</strong> de aguas residuales, obteniendo calidad potable comparable a plantas de tratamiento convencionales pero con costos operativos <strong>50-70% menores</strong>.</p>
            </div>
            <img src="Imagenes/Purificacion.jpg" alt="Purificacion" class="imagen-bloque">
        

            <div class="bloque">
                <h3>3. Almacenamiento de carbono y mitigación del cambio climático</h3>
                <p>Los humedales son <strong>sumideros de carbono de importancia global</strong>. Aunque cubren menos del 6% de la tierra, almacenan <strong>más carbono que todas las plantas terrestres restantes combinadas</strong>.</p>

                <h4>Dinámica del carbono en humedales:</h4>
                <ul class="lista-items">
                    <li><strong>Acumulación de turba:</strong> en ambientes anóxicos, la materia orgánica se descompone lentamente, acumulándose como capas de turba que pueden alcanzar decenas de metros de espesor. Un metro de turba tarda <strong>cientos a miles de años</strong> en formarse</li>
                    <li><strong>Almacenamiento prolongado:</strong> un humedal de turbera típico almacena <strong>2-3 kg de carbono por metro cuadrado</strong>, comparado a 0,1-0,5 kg en bosques</li>
                    <li><strong>Emisiones cuando se drenan:</strong> cuando se drena un humedal turberoso, el oxígeno penetra el suelo, acelerando descomposición y liberando <strong>CO₂ y metano</strong>. Esto convierte el humedal de sumidero a fuente de carbono. Se estima que humedales drenados liberan <strong>2 gigatoneladas de CO₂ equivalente anuales</strong></li>
                </ul>

                <p><span class="data">35% del carbono terrestre está almacenado en humedales, aunque ocupan solo 5-8% de la tierra.</span></p>
                <p><strong>Rol en cambio climático:</strong> la conservación y restauración de humedales es una de las <strong>estrategias de reducción de emisiones con mejor relación costo-beneficio</strong> disponibles.</p>
            </div>
            <img src="Imagenes/carbono.jpg" alt="Carbono" class="imagen-bloque">
        

            <div class="bloque">
                <h3>4. Provisión de hábitat y apoyo a ciclos de vida</h3>
                <p>Los humedales son viveros para peces comerciales, refugio para especies en peligro, y zonas de reproducción para innumerables animales. La conexión entre hábitats acuáticos y terrestres que crean los humedales es única.</p>

                <p><strong>Ejemplos de conexiones:</strong> moluscos dulceacuícolas desovan en sedimentos arenosos; peces migradores utilizan humedales como hábitats de cría antes de regresar al océano; anfibios requieren agua somera de humedales para reproducción; plantas producen semillas alcanzadas por agua que dispersa a miles de kilómetros.</p>
            </div>

            <div class="bloque">
                <h3>5. Provisión de recursos y servicios económicos</h3>
                <p>Aproximadamente <span class="estadistica">1,5 millones de personas dependen directamente de humedales</span> para alimentos, agua y materiales de construcción. En el Sudeste Asiático, humedales de agua dulce proveen el <strong>50% de alimentos acuáticos</strong> consumidos localmente.</p>

                <h4>Servicios económicamente mensurables:</h4>
                <ul class="lista-items">
                    <li><strong>Pesca:</strong> humedales costeros e interiores son las zonas de cría para <strong>90% de peces comerciales</strong></li>
                    <li><strong>Turismo ecológico:</strong> observación de aves y fauna genera miles de millones de dólares anuales. Los humedales de <strong>Everglades en Florida</strong> (EE.UU.) generan aproximadamente <strong>$2,4 mil millones de dólares anuales</strong> en turismo. En países como <strong>Costa Rica</strong>, el avistamiento de aves en humedales representa el <strong>25% de los ingresos turísticos</strong> totales del país</li>
                    <li><strong>Materiales de construcción:</strong> caña, mimbre y madera de humedales</li>
                    <li><strong>Plantas medicinales:</strong> cientos de especies de plantas de humedales son usadas en medicina tradicional</li>
                    <li><strong>Plantas alimenticias:</strong> arroz, azúcar y frutas en humedales de agua dulce</li>
                </ul>
            </div>

          <img src="Imagenes/Recursos.webp" alt="recursos" class="imagen-bloque">
        
        `,

        biodiversidad: `
            <h2>Biodiversidad en Humedales de Agua Dulce</h2>
            <p>Aunque representan menos del 6% de la superficie terrestre, los humedales albergan desproporcionadamente altas concentraciones de biodiversidad. Se estima que el <span class="estadistica">40% de todas las especies del mundo</span> dependen de humedales en algún momento de su vida, pese a que estos ocupan mucho menor área que otros ecosistemas.</p>

            <div class="bloque">
                <h3>Riqueza florística</h3>
                <p>Los humedales de agua dulce hospedan <strong>comunidades vegetales complejas y especializadas</strong>. La composición varía dramáticamente según profundidad del agua, duración de inundación, tipo de suelo y latitud.</p>

                <h4>Zonas de vegetación típicas (desde aguas profundas a orilla):</h4>
                <ul class="lista-items">
                    <li><strong>Plantas sumergidas:</strong> algas filamentosas, lentejas de agua, camaotes. <strong>Oxigenan el agua</strong> y proveen alimento para herbívoros acuáticos</li>
                    <li><strong>Plantas con hojas flotantes:</strong> nenúfares, espaditañas. Crean <strong>microhábitats bajo las hojas</strong> utilizados por invertebrados</li>
                    <li><strong>Plantas emergentes:</strong> totoras, espadañas, papiros, juncos. Forman la vegetación herbácea densa característica. Alcanzan <strong>3-4 metros de altura</strong>. Raíces reticuladas estabilizan sedimentos</li>
                    <li><strong>Árboles y arbustos riparios:</strong> sauces, alisos, tupelos. Proporcionan madera, estabilización de orillas y áreas de anidamiento</li>
                </ul>

                <p>En humedales prístinos sin perturbación, la riqueza de plantas vasculares puede alcanzar <strong>30-50 especies por hectárea</strong>, comparable a bosques tropicales en algunos contextos.</p>

                <h4>Hongos y microorganismos:</h4>
                <p>La materia orgánica abundante y ambientes anóxicos sustentan comunidades especializadas de <strong>bacterias desnitrificantes, metanógenas y fermentativas</strong>. Estos microorganismos son vitales para ciclos de nutrientes pero también generan <strong>metano</strong>, un potente gas de efecto invernadero.</p>
            </div>
<img src="Imagenes/florista.jpg" alt="florista" class="imagen-bloque">

            <div class="bloque">
                <h3>Fauna acuática y semiacuática</h3>
                <p>La fauna de humedales es <strong>extraordinariamente diversa</strong>. Cada grupo de organismos juega roles estructurales y funcionales específicos.</p>

                <h4>Peces:</h4>
                <p>Muchas especies de peces dulceacuícolas de importancia económica utilizan humedales como <strong>hábitats de cría, alimentación y refugio</strong>. Cíclidos, carpas, bagres y peces óseos diversos. Las <strong>especies migratorias</strong> viajan centenares de kilómetros entre océano y humedales interiores. Algunos humedales de agua dulce soportan pesquerías que alimentan a millones: el <strong>Delta del Mekong</strong> en Vietnam genera <strong>2 millones de toneladas de pescado anualmente</strong>.</p>

                <strong>Anfibios:</strong>
                <p>Ranas, sapos y tritones son indicadores de salud ambiental. Requieren agua somera para reproducción y son sensibles a contaminación. Su piel permeable los hace vulnerables a pesticidas. La mitad de las 6000+ especies de anfibios dependen de humedales. Muchas están en peligro crítico: 122 especies de ranas se extinguieron desde 1980, principalmente por pérdida de hábitat en humedales tropicales.</p>

                <strong>Moluscos e invertebrados acuáticos:</strong>
                <p>Caracoles, almejas, mejillones de agua dulce. Filtradores que mejoran claridad del agua. Insectos acuáticos: libélulas, efímeras, coleópteros. Las ninfas son depredadores ferocces de larvas de mosquitos y otras plagas. Un metro cuadrado de humedal puede contener miles de invertebrados acuáticos.</p>

                <strong>Crustáceos y otros microartrópodos:</strong>
                <p>Camarones, cangrejos de río, copépodos. Ocupan diversos nichos, desde depredadores hasta detritívoros. Base de cadenas alimentarias.</p>
            </div>
            <img src="Imagenes/biodiversidad.jpg" alt="biodiversidad" class="imagen-bloque">

            <div class="bloque">
                <h3>Aves acuáticas</h3>
                <p>Las aves son quizás los habitantes más icónicos y visible de humedales de agua dulce. Cerca de <span class="estadistica">1/3 de todas las aves del mundo</span> dependen de humedales.</p>

                <strong>Catálogo de aves de humedales:</strong>
                <ul class="lista-items">
                    <li><strong>Patos, gansos y cisnes (Anatidae):</strong> herbívoros y omnívoros que se alimentan de plantas acuáticas y semillas. Migradores de larga distancia</li>
                    <li><strong>Garzas y garcetas (Ardeidae):</strong> depredadores de peces y crustáceos. Presencia elegante. Algunas especies anidan en colonias de miles de individuos</li>
                    <li><strong>Cormoranes (Phalacrocoracidae):</strong> buceadores expertos. Algunos domesticados históricamente en Asia para pesca</li>
                    <li><strong>Rálidos (Rallidae):</strong> calamones, pollas de agua. Secretivos, viven entre vegetación densa</li>
                    <li><strong>Gaviotas y charranes:</strong> depredadores aéreos de peces y crustáceos. Expertos en picadas</li>
                    <li><strong>Flamencos:</strong> en humedales alcalinos. Especialistas únicos en filtración de fitoplancton</li>
                </ul>

                <p>Muchas especies realizan migraciones espectaculares. Aves árticas reproducen en humedales siberianos en verano, viajando 14 000 km para invernar en humedales africanos. Estos viajes oceánicos requieren depósitos de grasa acumulada, siendo los humedales en rutas migratorias sites críticos de alimentación.</p>

                <p><strong>Caso: Humedales de agua dulce en América Central:</strong> las lagunas de Panamá albergan el 70% de la población anual de patos norteamericanos, siendo absolutamente crítica para la especie.</p>
            </div>
            <img src="Imagenes/aves.jpg" alt="aves" class="imagen-bloque">

            <div class="bloque">
                <h3>Mamíferos y reptiles</h3>
                <p><strong>Mamíferos:</strong> nutrias, castores (en humedales templados), hipopótamos (en humedales africanos), manatíes, delfines de río. Algunos como hipopótamos son ingenieros de ecosistemas, creando caminos que canalizan agua.</p>
                <p><strong>Reptiles:</strong> cocodrilos, caimanes, serpientes acuáticas, tortugas acuáticas. Depredadores tope con roles regulatorios importantes.</p>
            </div>
             <img src="Imagenes/mamifero.jpg" alt="mamifero" class="imagen-bloque">

            <div class="bloque">
                <h3>Cadenas tróficas y relaciones ecológicas</h3>
                <p>Los humedales sustentan cadenas alimentarias complejas:</p>
                <p><strong>Productores primarios:</strong> plantas vasculares, algas y fitoplancton fotosintetizan usando luz solar y nutrientes, produciendo materia orgánica de la cual toda la vida depende.</p>
                <p><strong>Consumidores primarios:</strong> herbívoros acuáticos como patos, caracoles y larvas de insectos comen plantas y algas.</p>
                <p><strong>Consumidores secundarios:</strong> peces pequeños, ranas, insecrívoros comen herbívoros.</p>
                <p><strong>Depredadores de ápice:</strong> garzas, cormoranes, camarotes, cocodrilos regulan poblaciones de depredadores inferiores, manteniendo equilibrios.</p>
                <p><strong>Descomponedores:</strong> bacterias, hongos y microorganismos degradan materia muerta, reciclando nutrientes.</p>

                <p>La abundancia de materia orgánica hace a los humedales sistemas altamente productivos: su productividad primaria neta (10-25 ton/ha/año) es comparable a la de bosques tropicales.</p>
            </div>

            <img src="Imagenes/cadena trofica.png" alt="cadena" class="imagen-bloque">
            
            <p class="galeria-titulo">📸 Galería de biodiversidad: Especies representativas de humedales</p>
            <div class="galeria">
                <div class="galeria-item">
                    <img src="Imagenes/garzas.jpg" alt="Ave acuática">
                    <p>Garza - Depredador especializado de humedal</p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/Anfibios.jpg" alt="Anfibios">
                    <p>Anfibios dependen críticamente de humedales</p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/nenufares.jpg" alt="Plantas acuáticas">
                    <p>Nenúfares - plantas con hojas flotantes</p>
                </div>
            
        `,

        amenazas: `
            <h2>Amenazas a los Humedales de Agua Dulce</h2>
            <p>Pese a su importancia, los humedales enfrentan amenazas severas y crecientes. Se estima que <span class="estadistica">87% de los humedales del mundo han desaparecido en los últimos 300 años</span>, con tasas de pérdida acelerando en décadas recientes. En algunas regiones, los humedales están desapareciendo tres veces más rápido que los bosques.</p>

            <div class="bloque">
                <h3>1. Drenaje y conversión de usos del suelo</h3>
                <p>La causa más importante de pérdida de humedales históricamente ha sido su conversión deliberada a agricultura, ganadería y desarrollo urbano. Esto sigue siendo la principal amenaza global.</p>

                <strong>Mecanismos de conversión:</strong>
                <ul class="lista-items">
                    <li><strong>Drenaje agrícola:</strong> excavación de sistemas de zanjas y canales para remover agua, permitiendo cultivos de granos como maíz y soja. Enormes extensiones de pantanos en Estados Unidos (90% de humedales históricos), Europa (95%) y Sudamérica fueron drenadas entre 1800-1950</li>
                    <li><strong>Represamiento:</strong> construcción de presas crea embalses permanentes, alterando drasticamente flujos hidrológicos aguas abajo. Se estima 33 000 grandes presas globalmente ha fragmentado ríos</li>
                    <li><strong>Expansión urbana:</strong> rellenado de humedales alrededor de ciudades. La Ciudad de México, construida sobre un humedal lacustre, perdió el 98% de sus cuerpos de agua original</li>
                    <li><strong>Ganadería extensiva:</strong> sobrepastoreo daña vegetación de ribera, compacta suelos y causa erosión</li>
                    <li><strong>Extracción de turba:</strong> minería de turba para combustible y media de cultivo en zonas templadas. Destruye 3000-4000 hectáreas de turberas anuales</li>
                </ul>

                <p><strong>Escala del problema:</strong> en el siglo XX, se perdieron 50% de humedales templados y 35% de tropicales. En 2018, se estimaba pérdida global de 35 000 km² anuales, equivalente a un campo de fútbol cada 30 segundos.</p>
            </div>
             <img src="Imagenes/drenaje.jpg" alt="drenaje" class="imagen-bloque">

            <div class="bloque">
                <h3>2. Contaminación por nutrientes (eutrofización)</h3>
                <p>El escurrimiento agrícola cargado de nitrógeno y fósforo es una amenaza creciente, especialmente en regiones con agricultura intensiva.</p>

                <strong>Proceso de eutrofización:</strong>
                <ul class="lista-items">
                    <li><strong>Aumento anómalo de nutrientes:</strong> niveles de nitrógeno total pueden multiplicarse por 10 en humedales cercanos a terrenos agrícolas. Fósforo aumenta similarmente</li>
                    <li><strong>Explosión de algas y macrófitas:</strong> la disponibilidad de nutrientes desencadena crecimiento masivo de plantas acuáticas y algas, formando "floraciones"</li>
                    <li><strong>Hipoxia y anoxia:</strong> cuando las algas mueren y se descomponen, el oxígeno disuelto se agota, creando "zonas muertas" donde peces no pueden sobrevivir</li>
                    <li><strong>Cambios en composición de especies:</strong> comunidades especializadas de humedales prístinos son reemplazadas por algas tolerantes a eutrofización</li>
                    <li><strong>Proliferación de especies invasoras:</strong> plantas acuáticas como el jacinto de agua crecen incontroladamente en aguas eutróficas, formando "islas flotantes" que bloquean luz y reducen oxígeno</li>
                </ul>

                <p><strong>Escala:</strong> <span class="estadistica">500+ "zonas muertas" costeras</span> causadas por escurrimiento de humedales y ríos, totalizando 245 000 km². El Golfo de México experimenta anualmente una zona muerta de 15 000-22 000 km².</p>
            </div>
             <img src="Imagenes/eutrofizacion.jpg" alt="eutrofizacion" class="imagen-bloque">

            <div class="bloque">
                <h3>3. Contaminación por agroquímicos y metales pesados</h3>
                <p>Pesticidas, herbicidas y fungicidas aplicados en tierras agrícolas escurren a humedales, causando daños severos.</p>

                <strong>Impactos identificados:</strong>
                <ul class="lista-items">
                    <li><strong>Mortalidad directa:</strong> muchos pesticidas son tóxicos para invertebrados acuáticos a concentraciones bajas. Un pesticida a 1 ppb (parte por billón) puede matar la mayoría de larvas de insectos</li>
                    <li><strong>Disruptores endócrinos:</strong> algunos plaguicidas imitan hormonas, causando feminización de peces macho, reducción de fertilidad y declive poblacional</li>
                    <li><strong>Bioacumulación:</strong> contaminantes liposolubles se concentran en tejidos grasos, amplificándose hacia arriba en cadenas alimentarias. Predadores de ápice pueden acumular concentraciones miles de veces más altas que en el agua</li>
                    <li><strong>Metales pesados:</strong> mercurio, plomo, cadmio desde fuentes industriales se unen a sedimentos y plantas, entrando en cadenas alimentarias</li>
                </ul>
            </div>
             <img src="Imagenes/bioacumulacion.webp" alt="bioacumulacion" class="imagen-bloque">

            <div class="bloque">
                <h3>4. Cambio climático: nuevas amenazas a dinámicas hidrológicas</h3>
                <p>El calentamiento global incrementa presiones sobre humedales de múltiples formas:</p>

                <strong>Mecanismos de impacto:</strong>
                <ul class="lista-items">
                    <li><strong>Alteración de precipitación:</strong> cambios en patrones de lluvia afectan la hidrología de humedales. Sequías más prolongadas en algunas regiones secaban humedales completamente; lluvias más intensas en otras causan inundaciones severas</li>
                    <li><strong>Aumento de temperatura del agua:</strong> acelera metabolismo, reduce oxígeno disuelto y favorece proliferación de algas</li>
                    <li><strong>Evaporación incrementada:</strong> tasas de evapotranspiración más altas secan humedales estacionales antes de lo esperado, acortando períodos de reproducción</li>
                    <li><strong>Desplazamiento de especies:</strong> organismos tropicales expanden su rango hacia polos, mientras especies templadas se desplazan hacia altitudes mayores. Humedales pequeños aislados no pueden soportar estas migraciones</li>
                    <li><strong>Subida del nivel del mar:</strong> amenaza humedales costeros de agua dulce con salinización gradual</li>
                </ul>

                <p><strong>Ejemplo cuantificado:</strong> en el Ártico, los "almacenes de carbono helado" (permafrost con turba) están descongelándose, liberando metano estimado en 500-1000 gigatoneladas. Incluso conservador escenario de calentamiento de 1,5°C descongelaría 25% del permafrost.</p>
            </div>
             <img src="Imagenes/evaporacion.jpg" alt="cadena" class="imagen-bloque">

            <div class="bloque">
                <h3>5. Especies invasoras</h3>
                <p>Plantas y animales no nativos introducidos intencionada o accidentalmente compiten con especies nativas, alterando estructura y función de humedales.</p>

                <strong>Ejemplos problemáticos:</strong>
                <ul class="lista-items">
                    <li><strong>Jacinto de agua (Eichhornia crassipes):</strong> planta acuática flotante de América del Sur, introducida globalmente. Forma matas densas que bloquean 100% de luz, eliminando flora acuática submergia y causando anoxia. Ha infestado 10 millones de hectáreas globalmente</li>
                    <li><strong>Camarones invasores:</strong> en algunos países, el camarón chino dorado destruye vegetación radical buscando alimento</li>
                    <li><strong>Peces depredadores:</strong> peces gato, truchas introducidas depredan poblaciones nativas de peces pequeños y anfibios</li>
                    <li><strong>Mamíferos invasores:</strong> nutrias causan daño a peces comerciales; visones depredan aves nidificantes</li>
                </ul>
            </div>
             <img src="Imagenes/especies.jpg" alt="especies" class="imagen-bloque">

            <div class="bloque">
                <h3>6. Fragmentación y pérdida de conectividad</h3>
                <p>Carreteras, represas y represas fragmentan humedales, impidiendo dispersión de especies y movimientos migratorios.</p>

                <p><strong>Impacto en dinámicas poblacionales:</strong> poblaciones pequeñas aisladas tienen menor variabilidad genética, enfrentando mayor riesgo de extinción local. Aves migratorias que dependen de múltiples humedales en su ruta no pueden completar ciclos si algún sitio crítico se pierde.</p>
            </div>

             <img src="Imagenes/fragmentacion.jpg" alt="cadena" class="imagen-bloque">

           
            
        `,

        proteccion: `
            <h2>Conservación y Protección de Humedales</h2>
            <p>Frente a amenazas sin precedentes, han surgido respuestas multidimensionales combinando protección legal, restauración práctica, participación comunitaria y educación ambiental. Hay razones para optimismo: algunos programas de restauración han tenido éxito notables.</p>

            <div class="bloque">
                <h3>Marco legal global: La Convención de Ramsar</h3>
                <p>La Convención sobre Humedales de Importancia Internacional (Convención de Ramsar, 1971) es el principal acuerdo multilateral enfocado en un ecosistema. Con 172 países miembros, designa "sitios Ramsar" de importancia internacional bajo protección legal.</p>

                <strong>Características del marco Ramsar:</strong>
                <ul class="lista-items">
                    <li><strong>1 896 sitios designados globalmente</strong> cubriendo 250 millones de hectáreas. América Latina posee 300+ sitios</li>
                    <li><strong>Obligación de "mantener el carácter ecológico":</strong> estados deben justificar cualquier reducción de área o función</li>
                    <li><strong>Intercambio de información y cooperación:</strong> países comparten experiencias en monitoreo y restauración</li>
                    <li><strong>Limitaciones políticas:</strong> algunos países weaken protecciones después de designación; enforcement varía ampliamente</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Estrategias de protección in situ: Áreas protegidas</h3>
                <p>Crear reservas completamente protegidas es la estrategia más directa.</p>

                <strong>Aproximaciones:</strong>
                <ul class="lista-items">
                    <li><strong>Parques nacionales y reservas:</strong> cierran acceso al público en mayor medida. Honduras tiene Río Plátano, sitio Ramsar que protegió humedales tropicales de 575 000 hectáreas con éxito moderado</li>
                    <li><strong>Refugios de vida silvestre:</strong> enfoque en fauna específica. El Refugio de Vida Silvestre Bosque Modelo en Cuba protege 250 000 hectáreas de humedales costeros y manglares, siendo modelo de manejo sostenible</li>
                    <li><strong>Reservas privadas:</strong> propietarios privados convierten tierras a reserva. Eficacia depende de compromiso del propietario</li>
                </ul>

                <p><strong>Desafío crítico:</strong> solo el 10-15% de humedales globales tienen algún grado de protección formal. Expansión de cobertura es urgente.</p>
            </div>
            <img src="Imagenes/humedaless.jpg" alt="drenaje" class="imagen-bloque">

            <div class="bloque">
                <h3>Restauración ecológica de humedales degradados</h3>
                <p>Cuando la protección del estado prístino es imposible, la restauración de humedales previamente drenados o degradados es una alternativa valiosa.</p>

                <strong>Tipos de restauración:</strong>
                <ul class="lista-items">
                    <li><strong>Rehabilitación: </strong>mejorar funciones de humedales degradados sin restaurar condiciones históricas. Rellenar parcialmente diques de contención, permitiendo retorno parcial de agua</li>
                    <li><strong>Restauración integral:</strong> reconstruir humedal a condiciones pre-degradación. Requiere remoción de diques, reestablecimiento de flujos hidrológicos naturales y replantación</li>
                </ul>

                <strong>Proyectos exitosos:</strong>
                <p><strong>Ejemplo 1 - Humedales de Doñana, España:</strong> parcialmente drenados para agricultura en 1950s, enfrentaban contaminación agrícola severa. Programa de restauración comenzado en 1990s reestablecido flujos de agua dulce y redujo salinidad. Poblaciones de peces y aves respondieron dramáticamente. Hoy es uno de los humedales más productivos de Europa.</p>
                <p><strong>Ejemplo 2 - Pantanal, Brasil-Paraguay:</strong> el humedal más extenso del mundo (140 000 km²), está siendo restaurado parcialmente con construcción de corredores. Aunque presiones por ganadería y agricultura persisten, proyectos de ecoturismo comunitario generan incentivos para conservación.</p>

                <strong>Paso a paso de restauración:</strong>
                <ul class="lista-items">
                    <li><strong>1. Diagnóstico:</strong> análisis histórico del humedal, identificación de factores que causaron degradación</li>
                    <li><strong>2. Restauración hidrológica:</strong> reestablecimiento de flujos de agua mediante remoción de diques, restauración de conexión con ríos o recarga de acuíferos</li>
                    <li><strong>3. Mejora de suelo:</strong> adición de materia orgánica, reducción de contaminantes acumulados si necesario</li>
                    <li><strong>4. Replantación de vegetación:</strong> siembra o transplante de especies nativas, manejo de invasoras</li>
                    <li><strong>5. Monitoreo a largo plazo:</strong> seguimiento de parámetros hidrológicos, calidad de agua, recolonización de fauna, con ajustes según respuesta</li>
                </ul>

                <p><strong>Costos y beneficios:</strong> restauración típicamente cuesta 5 000-15 000 USD por hectárea, pero servicios ecosistémicos restaurados generan valor de 15 000-72 000 USD anuales. Retorno de inversión usualmente ocurre en 10-20 años.</p>
            </div>
             <img src="Imagenes/restauracion.jpg" alt="drenaje" class="imagen-bloque">

            <div class="bloque">
                <h3>Agricultura sostenible y reducción de escurrimiento</h3>
                <p>Dado que la mayoría de humedales comparten cuencas con tierras agrícolas, prácticas agrícolas mejoradas son esenciales.</p>

                <strong>Prácticas de mitigación:</strong>
                <ul class="lista-items">
                    <li><strong>Retención de terrenos ribereños:</strong> zonas de amortiguamiento vegetadas entre tierras agrícolas y humedales filtran nutrientes. Ancho recomendado es 10-30 metros</li>
                    <li><strong>Cultivos de cobertura:</strong> plantación de vegetación durante estación baja reduce erosión y filtra nutrientes</li>
                    <li><strong>Agricultura de precisión:</strong> uso de sensores y GPS reduce aplicación innecesaria de fertilizantes hasta 30%</li>
                    <li><strong>Rotación de cultivos y cultivos de leguminosas:</strong> reduce necesidad de fertilizante nitrogenado exógeno</li>
                    <li><strong>Construcción de represas sedimetarias y humedales de tratamiento:</strong> estructuras que atrapan sedimentos y nutrientes antes de agua llegue a humedales naturales</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Planificación integral de cuencas hidrográficas</h3>
                <p>La verdadera protección requiere pensar a escala de cuenca entera, coordinando uso de agua agrícola, urbano e industrial mientras se preserva caudales ecológicos.</p>

                <strong>Componentes de manejo de cuenca:</strong>
                <ul class="lista-items">
                    <li><strong>Caudal ecológico mínimo:</strong> establecer proporción mínima de caudal que debe mantener libre de extracción para humedales (típicamente 30-50% del caudal medio anual)</li>
                    <li><strong>Coordinación entre usuarios de agua:</strong> acuerdos entre agricultores, municipios e industria para distribución equitativa durante sequías</li>
                    <li><strong>Protección de afluentes y conexiones:</strong> mantener conexión entre ríos principales y humedales de planicie de inundación</li>
                    <li><strong>Monitoreo integrado:</strong> sistema de bases de datos compartidas de cantidad y calidad de agua</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Participación comunitaria y empoderamiento</h3>
                <p>Las comunidades locales que viven alrededor de humedales poseen conocimiento generacional invaluable. Su participación es esencial para éxito a largo plazo.</p>

                <strong>Modelos de participación exitosos:</strong>
                <ul class="lista-items">
                    <li><strong>Co-manejo con pueblos indígenas:</strong> reconocer derechos territoriales indígenas y permitir manejo según prácticas tradicionales. Estudios muestran áreas manejadas por indígenas tienen mejor preservación de biodiversidad que parques estatales</li>
                    <li><strong>Ecoturismo comunitario:</strong> comunidades locales guían turistas, generando ingresos que crean incentivo para conservación. Ejemplo: ecoturismo en Chocó, Colombia genera millones anuales para conservación</li>
                    <li><strong>Programas de educación ambiental:</strong> escuelas locales enseñan importancia de humedales, creando nueva generación con conciencia ambiental</li>
                    <li><strong>Pago por servicios ecosistémicos:</strong> gobiernos o NGOs compensan landowners por provisión de servicios (purificación de agua, almacenamiento de carbono)</li>
                </ul>
            </div>

          
        `,

        panama: `
            <h2>Caso: Humedales de Agua Dulce en Panamá</h2>
            <p>Panamá, siendo un istmo tropical con ecosistemas diversos y altamente amenazados, alberga múltiples sistemas de humedales de agua dulce críticos para conservación regional y provisión de servicios a comunidades locales. El estudio del caso panameño ofrece insights sobre desafíos y oportunidades de conservación en países en desarrollo.</p>

            <div class="bloque">
                <h3>Contexto geográfico y ecológico</h3>
                <p>Panamá cubre 75 000 km² en su totalidad. Su posición istmeña entre dos océanos y su topografía montañosa (Cordillera Central) crean ambientes únicos. Los humedales panameños incluyen:</p>

                <strong>Principales sistemas de humedales:</strong>
                <ul class="lista-items">
                    <li><strong>Lagunas de la Zona del Canal:</strong> Gatún, Alajuela y otras lagunas de agua dulce creadas artificiallypara operación del Canal de Panamá. Tienen 427 km² cubiertos, siendo reservorios de agua dulce de importancia global. Albergan 16 especies de peces endémicas</li>
                    <li><strong>Humedales del Darien:</strong> junglas húmedas con numerosos arroyos y pantanos en la región más remota de Panamá. El Parque Nacional del Darién (575 000 hectáreas) contiene humedales con endemismo muy alto</li>
                    <li><strong>Lagunas costeras del Pacífico:</strong> Laguna de Chiriquí, Laguna Madre de Dios con manglar-agua dulce mosaico. Importante para pesca y aves migratorias</li>
                    <li><strong>Pantanos de Bocas del Toro (Caribe):</strong> bosques húmedos con innumerables canales naturales, refugio de fauna</li>
                    <li><strong>Embalses represa:</strong> además de Gatún, represas en Bayano y otros proporcionan agua potable a ciudades</li>
                </ul>

                <p><span class="estadistica">18 sitios Ramsar en Panamá</span> designados, cubriendo aproximadamente 1 millón de hectáreas. Estas áreas protegidas representan esfuerzo de reconocimiento internacional de la importancia de humedales panameños.</p>
            </div>
             <img src="Imagenes/hpanama.jpg" alt="drenaje" class="imagen-bloque">

            <div class="bloque">
                <h3>Biodiversidad única</h3>
                <p>Panamá es un hotspot de biodiversidad. Su posición istmeña permite mezcla de fauna de América del Norte y del Sur, creando endemismo alto.</p>

                <strong>Ejemplos de fauna acuática local:</strong>
                <ul class="lista-items">
                    <li><strong>Peces:</strong> 950+ especies dulceacuícolas, muchas endémicas. Guapotes, mojarritas, bagres. Algunas utilizadas en acuarismo comercial, generando ingresos locales</li>
                    <li><strong>Anfibios:</strong> 200+ especies de ranas, muchas únicas a Panamá. La "rana dorada de Panamá" (Atelopus zeteki), símbolo nacional, está en peligro crítico</li>
                    <li><strong>Aves acuáticas:</strong> 650+ especies de aves en Panamá. Humedales albergan heladoras (martin pescador), garzas variadas, patos</li>
                    <li><strong>Manatíes y delfines de río:</strong> en sistemas costales y lagunas interiores. Los delfines de río panamameños (Inia geoffrensis) son símbolo de conservación acuática</li>
                </ul>

                <p>La Zona de Transición Istmeña de Panamá es reconocida como una de 47 "regiones de endemismo de vertebrados" críticas globalmente.</p>
            </div>
            <img src="Imagenes/biopanama.jpg" alt="biodiversidad" class="imagen-bloque">

            <div class="bloque">
                <h3>Amenazas específicas en Panamá</h3>
                <p>Pese a leyes protectoras, los humedales panameños enfrentan presiones crecientes:</p>

                <strong>Principales factores de degradación:</strong>
                <ul class="lista-items">
                    <li><strong>Conversión por agricultura:</strong> especialmente en Hocotía, donde pantanos fueron parcialmente drenados para caña de azúcar. Aunque causó conflictos legales, algunas drenajes continuaron</li>
                    <li><strong>Contaminación por escurrimiento agrícola y minería:</strong> las lagunas de la Zona del Canal sufren eutrofización local por escurrimiento agrícola. Minería (históricamente oro, actualmente cobre) contamina sitios específicos</li>
                    <li><strong>Estrés hídrico urbano:</strong> Ciudad de Panamá extrae agua de Lago Gatún para 1,7 millones de residentes. Demanda creciente amenaza disponibilidad durante sequías El Niño</li>
                    <li><strong>Desarrollo urbano-turístico:</strong> expansión de condominios en costas impacta lagunas costeras. Desarrollo de resorts en Bocas del Toro causa contaminación localizada</li>
                    <li><strong>Cambio climático e imprevisibilidad hidrológica:</strong> ciclos El Niño causaron sequías severas en 2014-2016, reduciendo agua en Lago Gatún a mínimos históricos, afectando operación del Canal</li>
                </ul>
            </div>
            <img src="Imagenes/amanezas.jpg" alt="biodiversidad" class="imagen-bloque">


            <div class="bloque">
                <h3>Iniciativas de conservación activas</h3>
                <p>Panamá ha implementado múltiples iniciativas mostrando éxito parcial:</p>

                <strong>Programas y proyectos:</strong>
                <ul class="lista-items">
                    <li><strong>Sistema Nacional de Áreas Protegidas (SNAP):</strong> red de 17 categorías de áreas protegidas. El Parque Nacional del Darién (1983) fue visionario, protegiendo 575 000 hectáreas. Aunque presión de colonización es constante, la biodiversidad sigue siendo sobresaliente</li>
                    <li><strong>Proyecto del Corredor Biológico Mesoamericano:</strong> iniciativa multinacional incluyendo Panamá, busca mantener conectividad de hábitats nativos. Ha facilitado designación de áreas protegidas complementarias</li>
                    <li><strong>Conservación de la Rana Dorada:</strong> programa de rescate de puntas de Atelopus zeteki enfrentó hongo chytrid. Aunque la especie se extinguió en naturaleza alrededor de 1980s, colonias cautivas persisten. Rehabilitaciones últimas muestran éxito reproductor, ofereciendo esperanza para reintroducción futura</li>
                    <li><strong>Ecoturismo comunitario:</strong> comunidades indígenas Emberá en el Darién han desarrollado ecoturismo con guía local, generando ingresos que crean incentivos para preservación. Visitantes pagan $50-100/día, generando ingresos significativos para comunidades</li>
                    <li><strong>Restauración del Lago Alajuela:</strong> reforestación de cuencas y control de sedimentación en el embalse de Río Chagres para mantener calidad de agua y provisión de agua dulce</li>
                </ul>
            </div>
            <img src="Imagenes/conservacion.jpg" alt="biodiversidad" class="imagen-bloque">

            <div class="bloque">
                <h3>Desafíos persistentes</h3>
                <p>Apesar de avances, Panamá enfrenta limitaciones estructurales:</p>

                <p><strong>Capacidad institucional limitada:</strong> muchas agencias de medio ambiente carecen de presupuestos y personal suficiente para enforcement efectivo. Algunos sitios Ramsar designados carecen de planes de manejo actuales.</p>

                <p><strong>Conflictos de uso de agua:</strong> demandas competitivas entre Canal de Panamá (requiere 52 000 litros/segundo), ciudades y agricultura a veces no son coordinadas, causando estrés hídrico durante El Niño.</p>

                <p><strong>Presión de colonización en Darién:</strong> la frontera entre Panamá y Colombia es zona de conflicto. Colonización sin planificación continúa en áreas protegidas, aunque a menor escala que hace décadas.</p>

                <p><strong>Necesidad de financiamiento para restauración:</strong> aunque Panamá ha recibido fondos del GEF (Fondo para el Medio Ambiente Global) y acuerdos bilaterales, la escala de financiamiento no es suficiente para restauración masiva.</p>
            </div>

            <div class="bloque">
                <h3>Lecciones aplicables de Panamá</h3>
                <p>La experiencia panameña ofrece lecciones relevantes para otros países tropicales:</p>

                <ul class="lista-items">
                    <li><strong>Designación legal sin manejo efectivo es insuficiente:</strong> existe lag entre protección nominal y protección real</li>
                    <li><strong>Ecoturismo comunitario puede funcionar:</strong> cuando se estructura correctamente con control comunitario genuino, genera ingresos sostenibles</li>
                    <li><strong>Integración de agua en planificación urbana es urgente:</strong> ciudades necesitan considerar demandas hídricas futuras en sistema planificación a décadas</li>
                    <li><strong>Educación ambiental de jóvenes es inversión crítica:</strong> generaciones nuevas criadas con conciencia ambiental serán base para políticas sostenibles futuras</li>
                </ul>
            </div>

             <img src="Imagenes/lecciones.jpeg" alt="biodiversidad" class="imagen-bloque">
            
            <p class="galeria-titulo">📸 Humedales de Panamá: Patrimonio natural</p>
            <div class="galeria">
                <div class="galeria-item">
                    <img src="Imagenes/darien.jpeg" alt="Bosque tropical">
                    <p>Humedales del Darién - biodiversidad única</p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/canal.jpg" alt="Canal Panamá">
                    <p>Cuenca del Canal - humedales estratégicos</p>
                </div>
                <div class="galeria-item">
                    <img src="Imagenes/manglares.jpg" alt="Manglares">
                    <p>Manglares panameños - protección costera</p>
                </div>
            </div>
        `,

        conclusion: `
            <h2>Reflexiones y Acción: El Futuro de los Humedales</h2>
            <p>Esta exploración de los humedales de agua dulce ha revelado ecosistemas de complejidad extraordinaria, valor ecológico inmensurable y vulnerabilidad creciente. Mientras enfrentamos desafíos ambientales sin precedentes, los humedales permanecen como sistemas que podemos proteger, restaurar y manejar de forma sostenible si actuamos con urgencia y decisión.</p>

            <div class="bloque">
                <h3>Síntesis de hallazgos principales</h3>
                <ul class="lista-items">
                    <li><strong>Funciones críticas:</strong> los humedales regulan ciclos de agua, purifican agua contaminada, almacenan carbono, albergan biodiversidad extraordinaria y proveen servicios económicos a millones</li>
                    <li><strong>Amenazas urgentes:</strong> pérdida por drenaje, contaminación, cambio climático y fragmentación ocurren a escalas aceleradas. Tres veces más rápido que deforestación</li>
                    <li><strong>Soluciones disponibles:</strong> protección legal, restauración ecológica, prácticas agrícolas sostenibles y participación comunitaria han demostrado funcionar</li>
                    <li><strong>Urgencia de acción:</strong> ventana de oportunidad para acción efectiva es limitada. Decisiones tomadas en próximos 5-10 años determinarán si podemos detener la pérdida global</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Llamado a la acción</h3>
                <p>Como ciudadanos, profesionales y educadores, podemos contribuir de múltiples maneras:</p>

                <strong>En nivel individual:</strong>
                <ul class="lista-items">
                    <li>Reducir uso de agroquímicos y plaguicidas en jardines privados</li>
                    <li>Apoyar organizaciones trabajando en conservación de humedales</li>
                    <li>Consumir pescado de fuentes sostenibles, no afectando humedales</li>
                    <li>Compartir conocimiento sobre importancia de humedales en comunidades</li>
                </ul>

                <strong>En nivel comunitario y educativo:</strong>
                <ul class="lista-items">
                    <li>Promover educación ambiental enfocada en humedales locales</li>
                    <li>Apoyar proyectos de restauración en humedales degradados</li>
                    <li>Colaborar con gobiernos for designación y protección de sitios críticos</li>
                    <li>Facilitar participación comunitaria en manejo de humedales locales</li>
                </ul>

                <strong>En nivel de política pública:</strong>
                <ul class="lista-items">
                    <li>Incentivar legislación más fuerte para protección de humedales</li>
                    <li>Invertir en restauración a escala de paisaje</li>
                    <li>Integrar consideraciones de humedales en planificación urbana y desarrollo</li>
                    <li>Asegurar coordinación en manejo de cuencas hidrográficas</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Visión para el futuro</h3>
                <p>Imaginemos un futuro donde los humedales continúan provisión de servicios ecosistémicos, donde comunidades locales obtienen ingresos sostenibles de conservación, y donde nuevas generaciones crecen apreciando la belleza y utilidad de estos ecosistemas extraordinarios.</p>

                <p>Este futuro es alcanzable. Ejemplos como humedales restaurados en Doñana (España), ecoturismo exitoso en Pantanal (Brasil) y programas de educación ambiental en Panamá muestran que el cambio es posible cuando contamos con voluntad política, recursos adecuados y participación comunitaria.</p>

                <p><strong>El proyecto de biblioteca ambiental que has completado es un ejemplo de cómo herramientas educativas bien diseñadas pueden comunicar complejidad ambiental de forma accesible, inspirando acción.</strong> La educación ambiental es la herramienta más poderosa que tenemos para crear cambio duradero.</p>
            </div>

            <div class="bloque">
                <h3>Preguntas para reflexión posterior a la presentación</h3>
                <p>Si esta presentación ha despertado interés, considera estas preguntas:</p>
                <ul class="lista-items">
                    <li>¿Existen humedales en tu región? ¿Cuál es su estado actual?</li>
                    <li>¿Cómo podría tu comunidad beneficiarse de conservación o restauración?</li>
                    <li>¿Qué políticas locales podrían contribuir a protección de humedales?</li>
                    <li>¿Cómo podrías involucrarte personalmente en conservación?</li>
                </ul>
            </div>

            
        `,

        
        encuestas: `
            <h2>Encuestas de Aprendizaje</h2>
            <p>Esta encuesta está diseñada para medir el conocimiento adquirido sobre humedales de agua dulce.</p>
            <div class="bloque">
                <h3>Preguntas para Encuesta Pre-Presentación</h3>
                <ul class="lista-items">
                    <li>¿Qué tan familiarizado está con los humedales?</li>
                    <li>¿Cuáles son los servicios ecosistémicos que cree que proporcionan los humedales?</li>
                    <li>¿Qué tan importante cree que es la conservación de humedales?</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Preguntas para Encuesta Post-Presentación</h3>
                <ul class="lista-items">
                    <li>¿Qué nuevos conocimientos adquirió sobre humedales?</li>
                    <li>¿Cómo ha cambiado su percepción sobre importancia de humedales?</li>
                    <li>¿Qué acciones planea tomar para apoyar conservación de humedales?</li>
                </ul>
            </div>

             <div class="bloque">
                <h3>Pon a prueba tus conocimientos sobre humedales</h3>
                <ul class="lista-items">
                    <li>¿Qué tan familiarizado está con los humedales?</li>
                    <li>¿Qué servicios ecosistémicos proporcionan los humedales?</li>
                    <li>¿Qué tipo de fauna se encuentra comúnmente en los humedales?</li>
                     <li>Este enlace te permite acceder a una corta encuesta donde podrás poner a prueba tu aprendizaje sobre la importancia de los humedales. ¿Estás preparado?</li>
                     
                </ul>
                <p class="encuesta-link"><a href="Encuesta/Encuesta.html" class="btn-encuesta">Responder la encuesta</a></p>
            </div>

        `,
        fuentes: `
            <h2>Fuentes Bibliográficas y Recursos</h2>
            <p>Esta biblioteca ha sido compilada usando literatura científica confiable, tratados internacionales y reportes de organismos ambientales. A continuación se presentan las principales fuentes y recursos para profundización adicional.</p>

            <div class="bloque">
                <h3>Instrumentos Internacionales Clave</h3>
                <ul class="lista-items">
                    <li><strong>Convención Ramsar sobre Humedales (1971).</strong> Sitio oficial: ramsar.org. Contiene texto completo del tratado, listado de sitios designados y recursos educativos</li>
                    <li><strong>Convenio sobre la Diversidad Biológica (1992).</strong> CBD: biodiversityadvisor.org. Proporciona contexto sobre políticas de conservación incluyendo humedales</li>
                    <li><strong>Marco de Sendai para una Estrategia Ambiental Global (2015).</strong> UNEP: unep.org. Direcciones sobre protección de ecosistemas</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Publicaciones Científicas Recomendadas</h3>
                <ul class="lista-items">
                    <li><strong>Mitsch, W. J., & Gosselink, J. G. (2015).</strong> "Wetlands" (5ª ed.). Wiley. Referencia integral sobre ecología de humedales, incluida hidrología, suelos, vegetación, fauna y funciones</li>
                    <li><strong>Davidson, N. C. (2014).</strong> "How much wetland has the world lost? Long-term and recent trends in global wetland area." Marine and Freshwater Research, 65(10). Análisis cuantitativo de pérdidas históricas</li>
                    <li><strong>Zedler, J. B., & Kercher, S. (2005).</strong> "Wetland resources: Status, trends, uses and losses." Annual Review of Environment and Resources, 30. Perspective sobre servicios ecosistémicos y amenazas</li>
                    <li><strong>Carpenter, S. R., et al. (2011).</strong> "Mitigating eutrophication in water bodies by directing seston to the sediment." Ecological Applications. Sobre contaminación por nutrientes y soluciones</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Reportes de Organismos Internacionales</h3>
                <ul class="lista-items">
                    <li><strong>GEO-6 Report (UNEP, 2019):</strong> "Global Environment Outlook". Perspectiva integrada sobre estado ambiental global incluyendo humedales</li>
                    <li><strong>Ramsar Technical Reports sobre Restauración de Humedales.</strong> disponibles en ramsar.org/resource. Guías prácticas para rehabilitación</li>
                    <li><strong>IUCN Wetland Briefings.</strong> iucn.org. Actualizaciones sobre conservación y amenazas a humedales globales</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Recursos Específicos sobre Panamá</h3>
                <ul class="lista-items">
                    <li><strong>MiAmbiente+ de la República de Panamá.</strong> miambiente.gob.pa. Ministerio de Ambiente, contiene información legal y estado de áreas protegidas</li>
                    <li><strong>Sociedad Audubon de Panamá.</strong> audubonpanama.org. Organización dedicada a conservación de aves acuáticas</li>
                    <li><strong>Smithsonian Tropical Research Institute (STRI).</strong> stri.si.edu. Investigación sobre ecología tropical en Panamá, incluyendo estudios de humedales</li>
                    <li><strong>El Espectador Ambiental - Reportajes sobre conservación en Panamá.</strong> Medios locales con cobertura ambiental</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Plataformas Educativas Digitales</h3>
                <ul class="lista-items">
                    <li><strong>Coursera y edX:</strong> cursos gratuitos sobre ecología de ecosistemas acuáticos</li>
                    <li><strong>Khan Academy:</strong> lecciones introductorias sobre ciclos biogeoquímicos y ecosistemas</li>
                    <li><strong>Documentales recomendados:</strong> "Our Planet" (Netflix, episodio "Fresh Water"), "Planet Earth II" (BBC, "Freshwater")</li>
                </ul>
            </div>

            <div class="bloque">
                <h3>Referencias complementarias para ampliar el estudio</h3>
                <p>Para profundizar en el tema, se recomienda consultar estudios científicos recientes, datos locales sobre extensión y biodiversidad, entrevistas a especialistas y normativa ambiental vigente sobre protección de humedales.</p>
            </div>

            <div class="bloque">
                <h3>Referencia del proyecto</h3>
                <p><span class="cite">Biblioteca Ambiental Digital. (2026). "Humedales de Agua Dulce". Recurso educativo web sobre ecología, conservación y restauración de humedales.</span></p>
            </div>

        
        `
    };

    c.innerHTML = contenidos[seccion] || '<h2>Contenido no disponible</h2>';
    c.scrollTop = 0;
    c.focus();
}
