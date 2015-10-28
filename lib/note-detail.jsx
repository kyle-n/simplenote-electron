import React from 'react'

export default React.createClass({

	getDefaultProps: function() {
		return {
			note: {},
			onChangeContent: function() {}
		};
	},

	getInitialState: function() {
		return {
			content: this.noteContent(this.props.note)
		};
	},

	componentWillReceiveProps: function (nextProps, context){
		this.setState({content: this.noteContent(nextProps.note)});
	},

	noteContent: function(note) {
		if (!note) return "";
		var data = note.data;
		return data ? data.content : null;
	},

	onChangeContent: function(e) {
		var v = this.refs.content.getDOMNode().value;
		this.props.onChangeContent(v);
	},

	render: function() {
		var disabled = this.props.note && this.props.note.data.deleted;
		return (
			<div className="editor-wrapper">
				<textarea ref="content" disabled={disabled} className="editor" value={this.state.content} onChange={this.onChangeContent}/>
			</div>
		)
	}

})