function imgSrcSet(output,name,alt) {
    var $srcSetOutput;
    	$srcSetOutput = '<img srcset="' + name + '-small.jpg 320w,';
    	$srcSetOutput += name + '-medium.jpg 460w,';
    	$srcSetOutput += name + '-large.jpg 768w,';
    	$srcSetOutput += name + '-extralarge.jpg 1025w"';
    	$srcSetOutput += 'sizes="(max-width:320px) 100%,';
    	$srcSetOutput += '(max-width:640px) 100%,';
    	$srcSetOutput += '(max-width:768px) 100%,';
    	$srcSetOutput += '100%"';
    	$srcSetOutput += 'src="' + name + '-extralarge.jpg" alt="' + alt + '">';
    document.write($srcSetOutput);
    return true;
};