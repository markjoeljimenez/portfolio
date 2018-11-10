const create = {
	filePath: function(node) {
		const date = this.datePath(node);

		return `${node.sourceInstanceName}/${date}/${node.childMarkdownRemark.frontmatter.title}`
	},

	datePath: function(node) {
		const formattedDate = new Date(node.childMarkdownRemark.frontmatter.date);
	
		return `${formattedDate.getFullYear().toString().substr(-2)}/${formattedDate.getMonth()}/${(formattedDate.getDate()) < 10 ? '0' + formattedDate.getDate() : formattedDate.getDate()}`;
	}
}

module.exports = create;
