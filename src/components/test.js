
import React from 'react';
import data from '../data';
// Require Editor JS files.

import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;
class EditorComponent extends React.Component {
  constructor () {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Example text'
    };
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
  }

  render () {
    return <FroalaEditor
			  model={this.state.model}
			  onModelChange={this.handleModelChange}
           />
  }
}
export default EditorComponent;