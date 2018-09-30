var array = [1,2,3,4,5,6,7,8,9,10];

	function sIncrease(i, ii) { // від наменшого до набільшого
	if (i > ii)
	return 1;
	else if (i < ii)
	return -1;
	else
	return 0;
	}
array.sort(sIncrease);