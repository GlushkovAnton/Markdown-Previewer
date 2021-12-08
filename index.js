
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
      
      return (
        <div className="main">
          <Title />                
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          <MarkdownPreview markdown={this.state.markdown} />
      
        </div>
      );
    }
  }
  
  const Editor = (props) => {
    return (
      <div >
        
       <textarea 
        id="editor"
        onChange={props.onChange}
        type="text"
        value={props.markdown}
         
       />
      </div>
    );
  };
  
  const Title = (props) => {
    return (
      <div className="title">
        <h1> My Markdown Previewer </h1> 
        
      </div>
    );
  };
  
  class MarkdownPreview extends React.Component {
    
    createMarkup() {
      return { __html: marked(this.props.markdown) }
    }
    
    render() {
      return (
        <div id="preview" className="prew" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
      )
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
  `
  
  
  
  
  ReactDOM.render(<App />, document.getElementById('root'));