import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        this.refs.editor.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                // document.execCommand('insertHTML', false, '=');
                return false;
            }
        })
    }

    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div>
                    <button>B</button><button>I</button><button>U</button><button onClick={() => console.log(this.refs.editor.innerHTML)}>M</button>
                </div>
                <div
                    ref="editor"
                    onKeyUp={() => { console.log('test'); return false }}
                    contentEditable="true"
                    style={{ width: "100%", height: "100%", border: "2px solid black" }} />
            </div>
        );
    }
}

export default App;
