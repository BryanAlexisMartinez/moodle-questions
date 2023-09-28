import React, { useState, useRef } from 'react';

function EditorHtml() {
    const [html, setHtml] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const textareaRef = useRef(null);

  const menuItems = [
    { symbol: '<!DOCTYPE>', tag: '<!DOCTYPE>', description: 'Define el tipo de documento' },
    { symbol: 'h1', tag: '<h1></h1>', description: 'Encabezado 1' },
    { symbol: 'h2', tag: '<h2></h2>', description: 'Encabezado 2' },
    { symbol: 'h3', tag: '<h3></h3>', description: 'Encabezado 3' },
    { symbol: 'h4', tag: '<h4></h4>', description: 'Encabezado 4' },
    { symbol: 'h5', tag: '<h5></h5>', description: 'Encabezado 5' },
    { symbol: 'h6', tag: '<h6></h6>', description: 'Encabezado 6' },
    { symbol: 'B', tag: '<strong></strong>', description: 'Define texto en negrita' },
    { symbol: 'I', tag: '<em></em>', description: 'Texto en cursiva' },
    { symbol: 'U', tag: '<u></u>', description: 'Texto subrayado' },
    { symbol: 'S', tag: '<strike></strike>', description: 'Texto tachado' },
    { symbol: 'AlignLeft', tag: '<div style="text-align: left;"></div>', description: 'Alinear a la izquierda' },
    { symbol: 'AlignRight', tag: '<div style="text-align: right;"></div>', description: 'Alinear a la derecha' },
    { symbol: 'AlignCenter', tag: '<div style="text-align: center;"></div>', description: 'Alinear al centro' },
    { symbol: 'Justify', tag: '<div style="text-align: justify;"></div>', description: 'Justificar texto' },
    { symbol: 'UL', tag: '<ul><li></li></ul>', description: 'Lista desordenada' },
    { symbol: 'OL', tag: '<ol><li></li></ol>', description: 'Lista ordenada' },
    { symbol: 'Blockquote', tag: '<blockquote></blockquote>', description: 'Define una sección que tiene otra fuente' },
    { symbol: 'Image', tag: '<img src="#" alt="" />', description: 'Imagen, sustituir el # por el link de la imagen.' },

    { symbol: 'Font', tag: '', description: 'Cambiar fuente' },
    { symbol: 'a', tag: '<a href="#"></a>', description: 'Enlace, sustituir el # por la URL.' },
    { symbol: 'body', tag: '<body></body>', description: 'Define el cuerpo del documento' },
    { symbol: 'col', tag: '<col></col>', description: 'Define las propiedades de la columna para cada columna del elemento <colgroup>' },
    { symbol: 'div', tag: '<div></div>', description: 'División genérica' },
    { symbol: 'footer', tag: '<footer></footer>', description: 'Pie de página' },
    { symbol: 'table', tag: '<table></table>', description: 'Tabla' },
    { symbol: 'tbody', tag: '<tbody></tbody>', description: 'Cuerpo de la tabla' },
    { symbol: 'td', tag: '<td></td>', description: 'Celda de la tabla' },
    { symbol: 'th', tag: '<th></th>', description: 'Celda de encabezado de la tabla' },
    { symbol: 'tr', tag: '<tr></tr>', description: 'Fila de la tabla' },
    { symbol: 'video', tag: '<video></video>', description: 'Video' },
    { symbol: 'span', tag: '<span></span>', description: 'Span' },
    { symbol: 'section', tag: '<section></section>', description: 'Section' },
    { symbol: 'textarea', tag: '<textarea></textarea>', description: 'Textarea' },
    { symbol: 'track', tag: '<track></track>', description: 'Track' },
    { symbol: 'option', tag: '<option></option>', description: 'Option' },
    { symbol: 'nav', tag: '<nav></nav>', description: 'Navigation' },
    { symbol: 'head', tag: '<head></head>', description: 'Cabeza del documento' },

    { symbol: 'title', tag: '<title></title>', description: 'Título del documento' },
    { symbol: 'link', tag: '<link></link>', description: 'Enlace externo' },
    { symbol: 'meta', tag: '<meta></meta>', description: 'Metadatos' },
    { symbol: 'style', tag: '<style></style>', description: 'Estilos CSS' },
    { symbol: 'article', tag: '<article></article>', description: 'Define un artículo' },
    { symbol: 'aside', tag: '<aside></aside>', description: 'Define el contenido lateral del contenedor de una página' },
    { symbol: 'header', tag: '<header></header>', description: 'Encabezado' },
    { symbol: 'small', tag: '<small></small>', description: 'Texto pequeño' },
    { symbol: 'cite', tag: '<cite></cite>', description: 'Define el título de un trabajo' },
    { symbol: 'mark', tag: '<mark></mark>', description: 'Texto resaltado' },
    { symbol: 'form', tag: '<form></form>', description: 'Formulario' },
    { symbol: 'embed', tag: '<embed></embed>', description: 'Contenido multimedia' },
    { symbol: 'label', tag: '<label></label>', description: 'Etiqueta' },
    { symbol: 'select', tag: '<select></select>', description: 'Selección' },
    { symbol: 'input', tag: '<input></input>', description: 'Campo de entrada' },
    { symbol: 'fieldset', tag: '<fieldset></fieldset>', description: 'Grupo de controles de formulario' },
    { symbol: 'tfoot', tag: '<tfoot></tfoot>', description: 'Pie de tabla' },
    { symbol: 'AñadirComentario', tag: '<!- ... ->', description: 'Añade un comentario dentro del archivo' },
    { symbol: 'abreviación', tag: '<abbr></abbr>', description: 'Define una abreviación' },

    { symbol: 'address', tag: '<address></address>', description: 'Define la información de contacto del autor/propietario del documento' },
    { symbol: 'area', tag: '<area></area>', description: 'Define un área dentro de un mapa de imagen' },
    { symbol: 'audio', tag: '<audio></audio>', description: 'Define contenido de sonido' },
    { symbol: 'base', tag: '<base></base>', description: 'Especifica la base donde se abrirán todas las URL del documento' },
    { symbol: 'bdi', tag: '<bdi></bdi>', description: 'Aisla una parte del texto que puede tener un formato diferente del texto externo' },
    { symbol: 'bdo', tag: '<bdo></bdo>', description: 'Sobreescribe la dirección del texto' },
    { symbol: 'br', tag: '<br/>', description: 'Define un salto de línea' },
    { symbol: 'button', tag: '<button></button>', description: 'Define un botón clickeable' },
    { symbol: 'caption', tag: '<caption></caption>', description: 'Define el título de una tabla' },
    { symbol: 'canvas', tag: '<canvas></canvas>', description: 'Se usa para dibujar gráficos en pantalla' },
    { symbol: 'code', tag: '<code></code>', description: 'Define un trozo de código de programación' },
    { symbol: 'colgroup', tag: '<colgroup></colgroup>', description: 'Especifica un grupo de una o más columnas de una tabla' },
    { symbol: 'command', tag: '<command></command>', description: 'Define un botón command al que un usuario puede invocar' },
    { symbol: 'datalist', tag: '<datalist></datalist>', description: 'Especifica en un imput una lista pre-definida de opciones' },
    { symbol: 'dd', tag: '<dd></dd>', description: 'Define la descripción de un item en una lista de definición' },
    { symbol: 'del', tag: '<del></del>', description: 'Define un texto que ha sido definido en un Mdocument' },
    { symbol: 'details', tag: '<details></details>', description: 'DEfine detalles adicionales que el usuario puede ver o esconder' },
    { symbol: 'dfn', tag: '<dfn></dfn>', description: 'Define el término de una definición' },


    { symbol: 'dialog', tag: '<dialog></dialog>', description: 'Define una caja o ventana de diálogo' },
    { symbol: 'dl', tag: '<dl></dl>', description: 'Define una lista de definición' },
    { symbol: 'dt', tag: '<dt></dt>', description: 'Define un término (item) en una lista de definición' },
    { symbol: 'figcaption', tag: '<figcaption></figcaption>', description: 'Define el título para una figura <figure>' },
    { symbol: 'figure', tag: '<figure></figure>', description: 'Especifica auto-contenido' },
    { symbol: 'hgroup', tag: '<hgroup></hgroup>', description: 'Grupo de encabezado (<h1> a <h6>)' },
    { symbol: 'hr', tag: '<hr></hr>', description: 'Define un cambio de temática a partir de una línea dibujada' },
    { symbol: 'h1', tag: '<h1></h1>', description: 'Encabezado 1' },
    { symbol: 'html', tag: '<html></html>', description: 'Define la raíz del documento' },
    { symbol: 'i', tag: '<i></i>', description: 'Define una parte del texto de modo alternativo' },
    { symbol: 'iframe', tag: '<iframe></iframe>', description: 'Define un frame en línea' },
    { symbol: 'ins', tag: '<ins></ins>', description: 'Define texto que ha sido insertado en un documento' },
    { symbol: 'kbody', tag: '<kbody></kbody>', description: 'Define entrada del teclado' },
    { symbol: 'keygen', tag: '<keygen></keygen>', description: 'Define un campo generador de claves para formularios' },
    { symbol: 'legend', tag: '<legend></legend>', description: 'Define un título para los elementos <fieldset>, <figure>, <details>' },
    { symbol: 'li', tag: '<li></li>', description: 'Define un item de una lista' },
    { symbol: 'map', tag: '<map></map>', description: 'Define un mapa de imagen del cliente' },
    { symbol: 'menu', tag: '<menu></menu>', description: 'Define la lista de un menú' },
    { symbol: 'meter', tag: '<meter></meter>', description: 'Define una medida escalar en un rango conocido' },

    { symbol: 'noscript', tag: '<noscript></noscript>', description: 'Define un contenido alternativo para los usuarios que no soportan scripts del cliente' },
    { symbol: 'object', tag: '<object></object>', description: 'Define un objeto embebido' },
    { symbol: 'optgroup', tag: '<optgroup></optgroup>', description: 'Define un grupo de opciones relacionadas en una lista desplegable' },
    { symbol: 'output', tag: '<output></output>', description: 'Define el resultado de un cálculo' },
    { symbol: 'param', tag: '<param></param>', description: 'Define un parámetro para un objeto' },
    { symbol: 'pre', tag: '<pre></pre>', description: 'Define un texto pre-formateado' },
    { symbol: 'progress', tag: '<progress></progress>', description: 'Representa el progeso de una tarea en una barra' },
    { symbol: 'q', tag: '<q></q>', description: 'Define una cita corta' },
    { symbol: 'rp', tag: '<rp></rp>', description: 'Define que debe mostrar en navegadores que no soportan scripts de ruby' },
    { symbol: 'rt', tag: '<rt></rt>', description: 'Define una pronunciación de caracteres' },
    { symbol: 'ruby', tag: '<ruby></ruby>', description: 'Define una notación de ruby' },
    { symbol: 'samp', tag: '<samp></samp>', description: 'Define un ejemplo de salida de un programa' },
    { symbol: 'script', tag: '<script></script>', description: 'Define un script del lado del cliente' },
    { symbol: 'source', tag: '<source></source>', description: 'Define los recursos para elementos multimedia' },
    { symbol: 'sub', tag: '<sub></sub>', description: 'Define un texto que es subíndice' },
    { symbol: 'summary', tag: '<summary></summary>', description: 'Define un encabezado visible para el elemento <details>' },
    { symbol: 'sup', tag: '<sup></sup>', description: 'Define un texto que es superíndice' },
    { symbol: 'thead', tag: '<thead></thead>', description: 'Agrupa los encabezados de una tabla' },
    { symbol: 'time', tag: '<time></time>', description: 'Define fecha/hora' },

    { symbol: 'ul', tag: '<ul></ul>', description: 'Define una lista desordenada' },
    { symbol: 'var', tag: '<var></var>', description: 'Define una variable' },
    { symbol: 'wbr', tag: '<wbr></wbr>', description: 'Define un posible salto de línea' },

];

const handleTagSelection = (tag) => {
    const currentHtml = html;
    const cursorPosition = textareaRef.current.selectionStart;
    const newHtml =
      currentHtml.slice(0, cursorPosition) +
      tag +
      currentHtml.slice(cursorPosition);
    setHtml(newHtml);
    setSelectedTag(tag);
  };

const fontOptions = [
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Times New Roman', value: 'Times New Roman, serif' },
  { label: 'Courier New', value: 'Courier New, monospace' },
  { label: 'Verdana', value: 'Verdana, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
];

return (
  <div>
    <h1>Editor HTML</h1>
    {selectedTag && (
      <div>
        <h2>Descripción:</h2>
        <p>
          <strong>{selectedTag}</strong>: {menuItems.find((item) => item.tag === selectedTag)?.description}
        </p>
      </div>
    )}
    <div>
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleTagSelection(item.tag)}
          style={{ marginRight: '5px' }}
        >
          {item.symbol}
        </button>
      ))}
    </div>
    <div>
      <textarea
        ref={textareaRef}
        id="html-textarea"
        placeholder="Ingresa etiquetas HTML aquí"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
      <h2>Resultado HTML:</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          maxHeight: '400px',
          overflowY: 'scroll',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);
}

export default EditorHtml;