const chessBoard = (dimension) => {
	for (let i = 0; i < dimension; i++) {
		let pattern = i % 2 ? '# ' : ' #';
		let row = '';
		while (row.length < dimension) {
			row += pattern;
		}
		console.log(row);
	}
}

chessBoard(8);
