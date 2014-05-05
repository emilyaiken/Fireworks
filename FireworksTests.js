// Step 1: Top circle moves up
staticTest($._("Step 1"), function() {
	var description = $._("Make the top circle move up by decreasing its y value (remember that lower y values are close to the top of the screen). ");
	var result;
	// hint
	var displayP = function() {
	    _ -=_;
	};
    
	// failures
	//failure #1: incrementing instead of decremnting y value
	var fail1a = structure(function() {yTop++;});
	var fail1b = structure(function() {yTop+=_;});
	var fail1c = structure(function() {yTop=yTop+_;});
	// failure #2: changing x value instead of y value
	var fail2a = structure(function() {xTop++;});
	var fail2b = structure(function() {xTop+=_;});
	var fail2c = structure(function() {xTop=yTop+_;});
	var fail2d = structure(function() {xTop--;});
	var fail2e = structure(function() {xTop-=_;});
	var fail2f = structure(function() {xTop=yTop-_;});
	var fail2g = structure(function() {xTop=_;});
	// failure #3: Moving too fast
	var fail3a = structure(function() { yTop-=$num; }, greaterThan("$num", 10));
	var fail3b = structure(function() { yTop=yTop-$num; }, greaterThan("$num", 10));
	// failure #4: Setting value instead of changing it
	var fail4a = structure(function() {yTop=$num;});
    
	// successes
	var pass1 = structure(function() {yTop--;});
	var pass2 = structure(function() {yTop = yTop - _;});
	var pass3 = structure(function() {yTop-=_;});
    
	//They failed
	if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
	    result = fail($._("Wrong way! We want to move this circle up, not down. Try decreasing the y value instead of increasing it."));
	}
	else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
	    result = fail($._("Whoops! We want to move this circle vertically, not horizontally. Try changing the x value instead of the y value."));
	}
	else if ((matches(fail3a)) || (matches(fail3b))) {
	    result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
	}
	else if ((matches(fail4a)) && !(matches(pass2))) {
	    result = fail($._("Be careful not to set the y value at a fixed number. We want to make the circle move by changing its y value in each frame."));
	}
    
	//They either passed or failed in some way that is not covered with specific messages
	else {
	    result = anyPass(match(pass1), match(pass2), match(pass3));
	}
    
	assertMatch(result, description, displayP);
    });





// Step 2: Bottom circle moves down
staticTest($._("Step 2"), function() {
	var description = $._("Now make the bottom ball move down by increasing its y value.");
	var result;
	// hint
	var displayP = function() {
	    _ +=_;
	};
    
	// failures
	//failure #1: decrementing instead of incrementing y value
	var fail1a = structure(function() {yBottom--;});
	var fail1b = structure(function() {yBottom-=_;});
	var fail1c = structure(function() {yBottom=yBottom-_;});
	// failure #2: changing x value instead of y value
	var fail2a = structure(function() {xBottom++;});
	var fail2b = structure(function() {xBottom+=_;});
	var fail2c = structure(function() {xBottom=xBottom+_;});
	var fail2d = structure(function() {xBottom--;});
	var fail2e = structure(function() {xBottom-=_;});
	var fail2f = structure(function() {xBottom=yTBottom-_;});
	var fail2g = structure(function() {xBottom=_;});
	// failure #3: Moving too fast
	var fail3a = structure(function() { yBottom+=$num; }, greaterThan("$num", 10));
	var fail3b = structure(function() { yBottom=yBottom+$num }, greaterThan("$num", 10));
	// failure #4: Setting value instead of changing it
	var fail4a = structure(function() {yBottom=$num;});
    
	// successes
	var pass1 = structure(function() {yBottom++;});
	var pass2 = structure(function() {yBottom = yBottom + _;});
	var pass3 = structure(function() {yBottom+=_;});
    
	//They failed
	if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
	    result = fail($._("Wrong way! We want to move this circle down, not up. Try increasing the y value instead of decreasing it (remember that higher y values are lower on the screen)."));
	}
	else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
	    result = fail($._("Whoops! We want to move this circle vertically, not horizontally. Try changing the x value instead of the y value."));
	}
	else if ((matches(fail3a)) || (matches(fail3b))) {
	    result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
	}
	else if ((matches(fail4a)) && !(matches(pass2))) {
	    result = fail($._("Be careful not to set the y value at a fixed number. We want to make the circle move by changing its y value in each frame."));
	}

	//They either passed or failed in some way that is not covered with specific messages
	else {
	    result = anyPass(match(pass1), match(pass2), match(pass3));
	}
    
	assertMatch(result, description, displayP);
    });





// Step 3: Right circle moves to the right
staticTest($._("Step 3"), function() {
	var description = $._("Next, let's make the right circle move to the right by increasing its x value.");
	var result;
	// hint
	var displayP = function() {
	    _ +=_;
	};
    
	// failures
	//failure #1: decrementing instead of incrementing x value
	var fail1a = structure(function() {xRight--;});
	var fail1b = structure(function() {xRight-=_;});
	var fail1c = structure(function() {xRight=xRight-_;});
	// failure #2: changing y value instead of x value
	var fail2a = structure(function() {yRight++;});
	var fail2b = structure(function() {yRight+=_;});
	var fail2c = structure(function() {yRight=yRight+_;});
	var fail2d = structure(function() {yRight--;});
	var fail2e = structure(function() {yRight-=_;});
	var fail2f = structure(function() {yRight=yRight-_;});
	var fail2g = structure(function() {yRight=_;});
	// failure #3: Moving too fast
	var fail3a = structure(function() { xRight+=$num; }, greaterThan("$num", 10));
	var fail3b = structure(function() { xRight=xRight+$num }, greaterThan("$num", 10));
	// failure #4: Setting value instead of changing it
	var fail4a = structure(function() {xRight=$num;});

	// successes
	var pass1 = structure(function() {xRight++;});
	var pass2 = structure(function() {xRight = xRight + _;});
	var pass3 = structure(function() {xRight+=_;});
    
	//They failed
	if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
	    result = fail($._("Wrong way! We want to move this circle right, not left. Try increasing the x value instead of decreasing it."));
	}
	else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
	    result = fail($._("Whoops! We want to move this circle horizontally, not vertically. Try changing the x value instead of the y value."));
	}
	else if ((matches(fail3a) || (matches(fail3b)))) {
	    result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
	}
	else if ((matches(fail4a)) && !(matches(pass2))) {
	    result = fail($._("Be careful not to set the x value at a fixed number. We want to make the circle move by changing its x value in each frame."));
	}

	//They either passed or failed in some way that is not covered with specific messages
	else {
	    result = anyPass(match(pass1), match(pass2), match(pass3));
	}
    
	assertMatch(result, description, displayP);
    });





// Step 4: Left circle moves to the left
staticTest($._("Step 4"), function() {
	var description = $._("Now for the left circle. Make this one move left by decreasing its x value.");
	var result;
	// hint
	var displayP = function() {
	    _ -=_;
	};
    
	// failures
	//failure #1: incrementing instead of decrementing x value
	var fail1a = structure(function() {xLeft++;});
	var fail1b = structure(function() {xLeft+=_;});
	var fail1c = structure(function() {xLeft=xLeft+_;});
	// failure #2: changing y value instead of x value
	var fail2a = structure(function() {yLeft++;});
	var fail2b = structure(function() {yLeft+=_;});
	var fail2c = structure(function() {yLeft=yLeft+_;});
	var fail2d = structure(function() {yLeft--;});
	var fail2e = structure(function() {yLeft-=_;});
	var fail2f = structure(function() {yLeft=yLeft-_;});
	var fail2g = structure(function() {yLeft=_;});
	// failure #3: Moving too fast
	var fail3a = structure(function() { xLeft-=$num; }, greaterThan("$num", 10));
	var fail3b = structure(function() { xLeft=xLeft-$num }, greaterThan("$num", 10));
	// failure #4: Setting value instead of changing it
	var fail4a = structure(function() {xLeft=$num;});

	// successes
	var pass1 = structure(function() {xLeft--;});
	var pass2 = structure(function() {xLeft = xLeft - _;});
	var pass3 = structure(function() {xLeft-=_;});
    
	//They failed
	if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
	    result = fail($._("Wrong way! We want to move this circle left, not right. Try decreasing the x value instead of increasing it."));
	}
	else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
	    result = fail($._("Whoops! We want to move this circle horizontally, not vertically. Try changing the x value instead of the y value."));
	}
	else if ((matches(fail3a) || (matches(fail3b)))) {
	    result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
	}
	else if ((matches(fail4a)) && !(matches(pass2))) {
	    result = fail($._("Be careful not to set the x value at a fixed number. We want to make the circle move by changing its x value in each frame."));
	}

	//They either passed or failed in some way that is not covered with specific messages
	else {
	    result = anyPass(match(pass1), match(pass2), match(pass3));
	}
    
	assertMatch(result, description, displayP);
    });







// Step 5: Fade color to black
staticTest($._("Step 5"), function() {
	var description = $._("As a bonus, we can change the color of the spheres by changing the R, G, and B values of the fill (remember that a color is determined by three numbers: R for red, G for green, and B for blue). The color black is 0 (R), 0 (G), 0 (B). Since fireworks fade to black, let's try decreasing the R, G, and B values in each frame. You can even change the effect by decreasing R, G, and B at different rates!");
	var result;
	// hint
	var displayP = function() {
	    r -=_;
	    g -=_;
	    b -=_;
	};
    
	// failures
	//failure #1: increasing instead of decreasing RGB values
	var fail1a = structure(function() {r+=_; g+=_; b+=_;});
	var fail1b = structure(function() {r++; g++; b++;});
	// failure #2: Fading out too fast
	var fail2a = structure(function() { r-=$num; }, greaterThan("$num", 5));
	var fail2b = structure(function() { r=r-$num }, greaterThan("$num", 5));
	var fail2c = structure(function() { g-=$num; }, greaterThan("$num", 5));
	var fail2d = structure(function() { g=g-$num }, greaterThan("$num", 5));
	var fail2e = structure(function() { b-=$num; }, greaterThan("$num", 5));
	var fail2f = structure(function() { b=b-$num }, greaterThan("$num", 5));
	// failure #3: Setting RGB values instead of changing them
	var fail3a = structure(function() {r=_; g=_; b=_;});

	// successes
	var pass1 = structure(function() {r-=_; g-=_; b-=_;});
	var pass2 = structure(function() {r--; g--; b--;});
    var pass3 = structurlues instead."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f))) {
        result = fail($._("If the circles fade out that quickly, we'll hardly get a chance to see them! Try decreasing by a smaller number."));
    }
    else if ((matches(fail3a)) && !(matches(pass3))) {
        result = fail($._("Be careful not to set the circles to a specific color for the entire animation. Instead, try to continuously change the color of the circles by changing the fill's RGB values in every frame."));
    }

// Step 1: Top circle moves up
staticTest($._("Step 1"), function() {
    var description = $._("Make the top circle move up by decreasing its y value (remember that lower y values are close to the top of the screen). ");
    var result;
    // hint
    var displayP = function() {
_ -=_;
    };
    
    // failures
    //failure #1: incrementing instead of decremnting y value
    var fail1a = structure(function() {yTop++;});
    var fail1b = structure(function() {yTop+=_;});
    var fail1c = structure(function() {yTop=yTop+_;});
    // failure #2: changing x value instead of y value
    var fail2a = structure(function() {xTop++;});
    var fail2b = structure(function() {xTop+=_;});
    var fail2c = structure(function() {xTop=yTop+_;});
    var fail2d = structure(function() {xTop--;});
    var fail2e = structure(function() {xTop-=_;});
    var fail2f = structure(function() {xTop=yTop-_;});
    var fail2g = structure(function() {xTop=_;});
    // failure #3: Moving too fast
    var fail3a = structure(function() { yTop-=$num; }, greaterThan("$num", 10));
    var fail3b = structure(function() { yTop=yTop-$num; }, greaterThan("$num", 10));
    // failure #4: Setting value instead of changing it
    var fail4a = structure(function() {yTop=$num;});
    
// successes
    var pass1 = structure(function() {yTop--;});
    var pass2 = structure(function() {yTop = yTop - _;});
    var pass3 = structure(function() {yTop-=_;});
    
    //They failed
    if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
        result = fail($._("Wrong way! We want to move this circle up, not down. Try decreasing the y value instead of increasing it."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
        result = fail($._("Whoops! We want to move this circle vertically, not horizontally. Try changing the x value instead of the y value."));
    }
    else if ((matches(fail3a)) || (matches(fail3b))) {
        result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
    }
    else if ((matches(fail4a)) && !(matches(pass2))) {
        result = fail($._("Be careful not to set the y value at a fixed number. We want to make the circle move by changing its y value in each frame."));
    }
    
    //They either passed or failed in some way that is not covered with specific messages
    else {
         result = anyPass(match(pass1), match(pass2), match(pass3));
    }
    
    assertMatch(result, description, displayP);
});





// Step 2: Bottom circle moves down
staticTest($._("Step 2"), function() {
    var description = $._("Now make the bottom ball move down by increasing its y value.");
    var result;
    // hint
    var displayP = function() {
_ +=_;
    };
    
    // failures
    //failure #1: decrementing instead of incrementing y value
    var fail1a = structure(function() {yBottom--;});
    var fail1b = structure(function() {yBottom-=_;});
    var fail1c = structure(function() {yBottom=yBottom-_;});
    // failure #2: changing x value instead of y value
    var fail2a = structure(function() {xBottom++;});
    var fail2b = structure(function() {xBottom+=_;});
    var fail2c = structure(function() {xBottom=xBottom+_;});
    var fail2d = structure(function() {xBottom--;});
    var fail2e = structure(function() {xBottom-=_;});
    var fail2f = structure(function() {xBottom=yTBottom-_;});
    var fail2g = structure(function() {xBottom=_;});
    // failure #3: Moving too fast
    var fail3a = structure(function() { yBottom+=$num; }, greaterThan("$num", 10));
    var fail3b = structure(function() { yBottom=yBottom+$num }, greaterThan("$num", 10));
    // failure #4: Setting value instead of changing it
    var fail4a = structure(function() {yBottom=$num;});
    
// successes
    var pass1 = structure(function() {yBottom++;});
    var pass2 = structure(function() {yBottom = yBottom + _;});
    var pass3 = structure(function() {yBottom+=_;});
    
    //They failed
    if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
        result = fail($._("Wrong way! We want to move this circle down, not up. Try increasing the y value instead of decreasing it (remember that higher y values are lower on the screen)."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
        result = fail($._("Whoops! We want to move this circle vertically, not horizontally. Try changing the x value instead of the y value."));
    }
    else if ((matches(fail3a)) || (matches(fail3b))) {
        result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
    }
    else if ((matches(fail4a)) && !(matches(pass2))) {
        result = fail($._("Be careful not to set the y value at a fixed number. We want to make the circle move by changing its y value in each frame."));
    }

    //They either passed or failed in some way that is not covered with specific messages
    else {
         result = anyPass(match(pass1), match(pass2), match(pass3));
    }
    
    assertMatch(result, description, displayP);
});





// Step 3: Right circle moves to the right
staticTest($._("Step 3"), function() {
    var description = $._("Next, let's make the right circle move to the right by increasing its x value.");
    var result;
    // hint
    var displayP = function() {
_ +=_;
    };
    
    // failures
    //failure #1: decrementing instead of incrementing x value
    var fail1a = structure(function() {xRight--;});
    var fail1b = structure(function() {xRight-=_;});
    var fail1c = structure(function() {xRight=xRight-_;});
    // failure #2: changing y value instead of x value
    var fail2a = structure(function() {yRight++;});
    var fail2b = structure(function() {yRight+=_;});
    var fail2c = structure(function() {yRight=yRight+_;});
    var fail2d = structure(function() {yRight--;});
    var fail2e = structure(function() {yRight-=_;});
    var fail2f = structure(function() {yRight=yRight-_;});
    var fail2g = structure(function() {yRight=_;});
    // failure #3: Moving too fast
    var fail3a = structure(function() { xRight+=$num; }, greaterThan("$num", 10));
    var fail3b = structure(function() { xRight=xRight+$num }, greaterThan("$num", 10));
    // failure #4: Setting value instead of changing it
    var fail4a = structure(function() {xRight=$num;});

// successes
    var pass1 = structure(function() {xRight++;});
    var pass2 = structure(function() {xRight = xRight + _;});
    var pass3 = structure(function() {xRight+=_;});
    
    //They failed
    if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
        result = fail($._("Wrong way! We want to move this circle right, not left. Try increasing the x value instead of decreasing it."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
        result = fail($._("Whoops! We want to move this circle horizontally, not vertically. Try changing the x value instead of the y value."));
    }
    else if ((matches(fail3a) || (matches(fail3b)))) {
        result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
    }
    else if ((matches(fail4a)) && !(matches(pass2))) {
        result = fail($._("Be careful not to set the x value at a fixed number. We want to make the circle move by changing its x value in each frame."));
    }

    //They either passed or failed in some way that is not covered with specific messages
    else {
         result = anyPass(match(pass1), match(pass2), match(pass3));
    }
    
    assertMatch(result, description, displayP);
});





// Step 4: Left circle moves to the left
staticTest($._("Step 4"), function() {
    var description = $._("Now for the left circle. Make this one move left by decreasing its x value.");
    var result;
    // hint
    var displayP = function() {
_ -=_;
    };
    
    // failures
    //failure #1: incrementing instead of decrementing x value
    var fail1a = structure(function() {xLeft++;});
    var fail1b = structure(function() {xLeft+=_;});
    var fail1c = structure(function() {xLeft=xLeft+_;});
    // failure #2: changing y value instead of x value
    var fail2a = structure(function() {yLeft++;});
    var fail2b = structure(function() {yLeft+=_;});
    var fail2c = structure(function() {yLeft=yLeft+_;});
    var fail2d = structure(function() {yLeft--;});
    var fail2e = structure(function() {yLeft-=_;});
    var fail2f = structure(function() {yLeft=yLeft-_;});
    var fail2g = structure(function() {yLeft=_;});
    // failure #3: Moving too fast
    var fail3a = structure(function() { xLeft-=$num; }, greaterThan("$num", 10));
    var fail3b = structure(function() { xLeft=xLeft-$num }, greaterThan("$num", 10));
    // failure #4: Setting value instead of changing it
    var fail4a = structure(function() {xLeft=$num;});

// successes
    var pass1 = structure(function() {xLeft--;});
    var pass2 = structure(function() {xLeft = xLeft - _;});
    var pass3 = structure(function() {xLeft-=_;});
    
    //They failed
    if ((matches(fail1a)) || (matches(fail1b)) || (matches(fail1c))) {
        result = fail($._("Wrong way! We want to move this circle left, not right. Try decreasing the x value instead of increasing it."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f)) || (matches(fail2g))) {
        result = fail($._("Whoops! We want to move this circle horizontally, not vertically. Try changing the x value instead of the y value."));
    }
    else if ((matches(fail3a) || (matches(fail3b)))) {
        result = fail($._("Firworks don't move THAT fast. Try changing y by a smaller amount."));
    }
    else if ((matches(fail4a)) && !(matches(pass2))) {
        result = fail($._("Be careful not to set the x value at a fixed number. We want to make the circle move by changing its x value in each frame."));
    }

    //They either passed or failed in some way that is not covered with specific messages
    else {
         result = anyPass(match(pass1), match(pass2), match(pass3));
    }
    
    assertMatch(result, description, displayP);
});







// Step 5: Fade color to black
staticTest($._("Step 5"), function() {
    var description = $._("As a bonus, we can change the color of the spheres by changing the R, G, and B values of the fill (remember that a color is determined by three numbers: R for red, G for green, and B for blue). The color black is 0 (R), 0 (G), 0 (B). Since fireworks fade to black, let's try decreasing the R, G, and B values in each frame. You can even change the effect by decreasing R, G, and B at different rates!");
    var result;
    // hint
    var displayP = function() {
r -=_;
g -=_;
b -=_;
    };
    
    // failures
    //failure #1: increasing instead of decreasing RGB values
    var fail1a = structure(function() {r+=_; g+=_; b+=_;});
    var fail1b = structure(function() {r++; g++; b++;});
    // failure #2: Fading out too fast
    var fail2a = structure(function() { r-=$num; }, greaterThan("$num", 5));
    var fail2b = structure(function() { r=r-$num }, greaterThan("$num", 5));
    var fail2c = structure(function() { g-=$num; }, greaterThan("$num", 5));
    var fail2d = structure(function() { g=g-$num }, greaterThan("$num", 5));
    var fail2e = structure(function() { b-=$num; }, greaterThan("$num", 5));
    var fail2f = structure(function() { b=b-$num }, greaterThan("$num", 5));
    // failure #3: Setting RGB values instead of changing them
    var fail3a = structure(function() {r=_; g=_; b=_;});

// successes
    var pass1 = structure(function() {r-=_; g-=_; b-=_;});
    var pass2 = structure(function() {r--; g--; b--;});
    var pass3 = structure(function() {r=r-_; g=g-_; b=b-_;});
    
    //They failed
    if ((matches(fail1a)) || (matches(fail1b))) {
        result = fail($._("Increasing the RGB values will cause the circles to fade to white. Let's try fading to black by decreasing the RGB values instead."));
    }
    else if ((matches(fail2a)) || (matches(fail2b)) || (matches(fail2c)) || (matches(fail2d)) || (matches(fail2e)) || (matches(fail2f))) {
        result = fail($._("If the circles fade out that quickly, we'll hardly get a chance to see them! Try decreasing by a smaller number."));
    }
    else if ((matches(fail3a)) && !(matches(pass3))) {
        result = fail($._("Be careful not to set the circles to a specific color for the entire animation. Instead, try to continuously change the color of the circles by changing the fill's RGB values in every frame."));
    }

    //They either passed or failed in some way that is not covered with specific messages
    else {
         result = anyPass(match(pass1), match(pass2), match(pass3));
    }
    
    assertMatch(result, description, displayP);
});