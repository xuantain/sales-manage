var React = require('react');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			type: 'text',
			valueLink: '',
			styleClass: '',
			placeholder: 'text here'
		}
	},
	render: function() {
		return (
			<div className={'mgb5px input-group col-xs-6 col-sm-6 '+this.props.styleClass}>
				<span className='input-group-addon w20'>{this.props.title}</span>
				<input ref={this.props.ref} className='form-control' 
							type={this.props.type} 
							valueLink={this.props.valueLink}
							placeholder={this.props.placeholder}/>
			</div>
		)
	}
});
