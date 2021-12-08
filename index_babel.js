class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "main"
    }, /*#__PURE__*/React.createElement(Title, null), /*#__PURE__*/React.createElement(Editor, {
      markdown: this.state.markdown,
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement(MarkdownPreview, {
      markdown: this.state.markdown
    }));
  }

}

const Editor = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("textarea", {
    id: "editor",
    onChange: props.onChange,
    type: "text",
    value: props.markdown
  }));
};

const Title = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("h1", null, " My Markdown Previewer "));
};

class MarkdownPreview extends React.Component {
  createMarkup() {
    return {
      __html: marked(this.props.markdown)
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "preview",
      className: "prew",
      dangerouslySetInnerHTML: this.createMarkup()
    });
  }

}

const placeholder = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));