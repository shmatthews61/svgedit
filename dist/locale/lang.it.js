var svgEditorLang_it = (function () {
  'use strict';

  var lang_it = {
    lang: 'it',
    dir: 'ltr',
    common: {
      ok: 'OK',
      cancel: 'Cancel',
      key_backspace: 'Backspace',
      key_del: 'Del',
      key_down: 'Down',
      key_up: 'Up',
      more_opts: 'more_opts',
      url: 'url',
      width: 'width',
      height: 'height'
    },
    misc: {
      powered_by: 'powered_by'
    },
    ui: {
      toggle_stroke_tools: 'toggle_stroke_tools',
      palette_info: 'palette_info',
      zoom_level: 'zoom_level',
      panel_drag: 'panel_drag',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties'
    },
    properties: {
      id: "Identifica l'elemento",
      fill_color: 'fill_color',
      stroke_color: 'stroke_color',
      stroke_style: 'stroke_style',
      stroke_width: 'stroke_width',
      pos_x: 'pos_x',
      pos_y: 'pos_y',
      linecap_butt: 'linecap_butt',
      linecap_round: 'linecap_round',
      linecap_square: 'linecap_square',
      linejoin_bevel: 'linejoin_bevel',
      linejoin_miter: 'linejoin_miter',
      linejoin_round: 'linejoin_round',
      angle: "Cambia l'angolo di rotazione",
      blur: "Cambia l'intensità della sfocatura",
      opacity: "Cambia l'opacità dell'oggetto selezionato",
      circle_cx: 'circle_cx',
      circle_cy: 'circle_cy',
      circle_r: 'circle_r',
      ellipse_cx: "Cambia la coordinata Cx dell'ellisse",
      ellipse_cy: "Cambia la coordinata Cy dell'ellisse",
      ellipse_rx: "Cambia l'asse x dell'ellisse",
      ellipse_ry: "Cambia l'asse y dell'ellisse",
      line_x1: 'line_x1',
      line_x2: 'line_x2',
      line_y1: 'line_y1',
      line_y2: 'line_y2',
      rect_height: "Cambia l'altezza rettangolo",
      rect_width: 'rect_width',
      corner_radius: "Cambia il raggio dell'angolo",
      image_width: "Cambia la larghezza dell'immagine",
      image_height: "Cambia l'altezza dell'immagine",
      image_url: 'image_url',
      node_x: 'node_x',
      node_y: 'node_y',
      seg_type: 'seg_type',
      straight_segments: 'straight_segments',
      curve_segments: 'curve_segments',
      text_contents: 'text_contents',
      font_family: 'font_family',
      font_size: 'font_size',
      bold: 'bold',
      italic: 'italic'
    },
    tools: {
      main_menu: 'main_menu',
      bkgnd_color_opac: 'bkgnd_color_opac',
      connector_no_arrow: 'connector_no_arrow',
      fitToContent: 'fitToContent',
      fit_to_all: 'fit_to_all',
      fit_to_canvas: "Adatta all'area di disegno",
      fit_to_layer_content: 'fit_to_layer_content',
      fit_to_sel: 'fit_to_sel',
      align_relative_to: 'align_relative_to',
      relativeTo: 'relativeTo',
      page: 'page',
      largest_object: 'largest_object',
      selected_objects: 'selected_objects',
      smallest_object: 'smallest_object',
      new_doc: 'new_doc',
      open_doc: 'open_doc',
      export_img: 'export_img',
      save_doc: 'save_doc',
      import_doc: 'import_doc',
      align_to_page: 'align_to_page',
      align_bottom: 'align_bottom',
      align_center: 'align_center',
      align_left: 'align_left',
      align_middle: 'align_middle',
      align_right: 'align_right',
      align_top: 'align_top',
      mode_select: 'mode_select',
      mode_fhpath: 'mode_fhpath',
      mode_line: 'mode_line',
      mode_connect: 'mode_connect',
      mode_rect: 'mode_rect',
      mode_square: 'mode_square',
      mode_fhrect: 'mode_fhrect',
      mode_ellipse: 'mode_ellipse',
      mode_circle: 'mode_circle',
      mode_fhellipse: 'mode_fhellipse',
      mode_path: 'mode_path',
      mode_shapelib: 'mode_shapelib',
      mode_text: 'mode_text',
      mode_image: 'mode_image',
      mode_zoom: 'mode_zoom',
      mode_eyedropper: 'mode_eyedropper',
      no_embed: "NOTA: L'immagine non può essere incorporata: dipenderà dal percorso assoluto per essere vista",
      undo: 'undo',
      redo: 'redo',
      tool_source: 'tool_source',
      wireframe_mode: 'wireframe_mode',
      toggle_grid: 'toggle_grid',
      clone: 'clone',
      del: 'del',
      group_elements: 'group_elements',
      make_link: 'make_link',
      set_link_url: 'set_link_url',
      to_path: 'to_path',
      reorient_path: 'reorient_path',
      ungroup: 'ungroup',
      docprops: 'docprops',
      imagelib: 'imagelib',
      move_bottom: 'move_bottom',
      move_top: 'move_top',
      node_clone: 'node_clone',
      node_delete: 'node_delete',
      node_link: 'node_link',
      add_subpath: 'add_subpath',
      openclose_path: 'openclose_path',
      source_save: 'source_save',
      cut: 'cut',
      copy: 'copy',
      paste: 'paste',
      paste_in_place: 'paste_in_place',
      delete: 'delete',
      group: 'group',
      move_front: 'move_front',
      move_up: 'move_up',
      move_down: 'move_down',
      move_back: 'move_back'
    },
    layers: {
      layer: 'Layer',
      layers: 'layers',
      del: 'del',
      move_down: 'move_down',
      new: 'new',
      rename: 'rename',
      move_up: 'move_up',
      dupe: 'dupe',
      merge_down: 'merge_down',
      merge_all: 'merge_all',
      move_elems_to: 'move_elems_to',
      move_selected: 'move_selected'
    },
    config: {
      image_props: 'image_props',
      doc_title: 'doc_title',
      doc_dims: "Dimensioni dell'area di disegno",
      included_images: 'included_images',
      image_opt_embed: 'image_opt_embed',
      image_opt_ref: "Usa l'identificativo di riferimento",
      editor_prefs: 'editor_prefs',
      icon_size: 'icon_size',
      language: 'language',
      background: "Sfondo dell'editor",
      editor_img_url: 'editor_img_url',
      editor_bg_note: "Nota: Lo sfondo non verrà salvato con l'immagine.",
      icon_large: 'icon_large',
      icon_medium: 'icon_medium',
      icon_small: 'icon_small',
      icon_xlarge: 'icon_xlarge',
      select_predefined: 'select_predefined',
      units_and_rulers: 'units_and_rulers',
      show_rulers: 'show_rulers',
      base_unit: 'base_unit',
      grid: 'grid',
      snapping_onoff: 'snapping_onoff',
      snapping_stepsize: 'snapping_stepsize',
      grid_color: 'grid_color'
    },
    shape_cats: {
      basic: 'basic',
      object: 'object',
      symbol: 'symbol',
      arrow: 'arrow',
      flowchart: 'flowchart',
      animal: 'animal',
      game: 'game',
      dialog_balloon: 'dialog_balloon',
      electronics: 'electronics',
      math: 'math',
      music: 'music',
      misc: 'misc',
      raphael_1: 'raphael_1',
      raphael_2: 'raphael_2'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: "Non c'è contenuto cui adeguarsi",
      dupeLayerName: "C'è già un livello con questo nome!",
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: "Sposta gli elementi selezionali al livello '%s'?",
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: "Scrivi un nuovo URL per l'immagine",
      defsFailOnSave: "NOTA: A causa dlle caratteristiche del tuo browser, l'immagine potrà apparire errata (senza elementi o gradazioni) finché non sarà salvata.",
      loadingImage: "Sto caricando l'immagine. attendere prego...",
      saveFromBrowser: "Seleziona \"Salva con nome...\" nel browser per salvare l'immagine con nome %s .",
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLloadFail: 'Unable to load from URL',
      retrieving: 'Retrieving \'%s\' ...',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_it;

}());
