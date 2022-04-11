f=0
setup=draw=_=>{
  createCanvas(1200,b=500)
	v=vertex
	f++
	background(0)
	fill(0)
	stroke(b) 
	for(y=100;y<b;y+=10) {
		beginShape()
		for(x=0;x<b;++x)
			v(x,y-90/(1+pow(x-150,4)/10e6)*noise(x/30+f/50+y))
		v(x,2e4)
		endShape()
	}
}