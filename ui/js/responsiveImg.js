// requires picturefill
function responsiveImg(output,name,alt) {
    var $pfOutput;
    $pfOutput = '<span data-picture data-alt="' + alt + '">';
		$pfOutput += '<span data-src="' + name + '-small.jpg"     data-media="(min-width: 320px) and (-webkit-min-device-pixel-ratio: 1)"></span>';
		$pfOutput += '<span data-src="' + name + '-medium.jpg"></span>';
		$pfOutput += '<span data-src="' + name + '-large.jpg"      data-media="(min-width: 768px)"></span>';
		$pfOutput += '<span data-src="' + name + '-extralarge.jpg" data-media="(min-width: 1025px)"></span>';
		$pfOutput += '<noscript>';
			$pfOutput += '<img src="' + name + '-large.jpg" alt="' + alt + '">/';
		$pfOutput += '</noscript>';
	$pfOutput += '</span>';
    document.write($pfOutput);
    return true;
};