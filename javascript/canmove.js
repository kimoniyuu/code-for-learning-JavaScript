function canMove(piece, currentPosition, targetPosition) {
    const currentFile = currentPosition[0].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const currentRank = parseInt(currentPosition[1]);
    const targetFile = targetPosition[0].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    const targetRank = parseInt(targetPosition[1]);
    const fileDifference = Math.abs(targetFile - currentFile);
    const rankDifference = Math.abs(targetRank - currentRank);
  
    switch (piece) {
      case "Pawn":
        if (currentFile === targetFile) {
          if (rankDifference === 1) {
            return true;
          }
          if (rankDifference === 2 && currentRank === 2) {
            return true;
          }
        }
        break;
  
      case "Knight":
        return (fileDifference === 1 && rankDifference === 2) || (fileDifference === 2 && rankDifference === 1);
  
      case "Bishop":
        return fileDifference === rankDifference;
  
      case "Rook":
        return currentFile === targetFile || currentRank === targetRank;
  
      case "Queen":
        return currentFile === targetFile || currentRank === targetRank || fileDifference === rankDifference;
  
      case "King":
        return fileDifference <= 1 && rankDifference <= 1;
  
      default:
        return false; 
    }
  
    return false;
  }
  
  
  console.log(canMove("Rook", "A8", "H8"));    
  console.log(canMove("Bishop", "A7", "G1"));  
  console.log(canMove("Queen", "C4", "D5"));   
  