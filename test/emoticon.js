class Emoticon
{
	constructor(position, size, type)
	{
		this.position = position;
		this.size = size;
		this.type = type;
	}

	show()
	{
		push();

		fill(color('white'));
		strokeWeight(3);

		/**
		 * Print the head.
		 */
		ellipse(this.position.x, this.position.y, this.size, this.size);

		/**
		 * Print the smile.
		 */
		if (this.type == 0)
		{
			arc(this.position.x, this.position.y, this.size * 0.6, this.size * 0.5, (PI / 6), PI - (PI / 6));
		}
		else if (this.type == 1)
		{
			arc(this.position.x, this.position.y + this.size * 0.3, this.size * 0.6, this.size * 0.5, PI + (PI / 6), TWO_PI - (PI / 6));
		}
		

		fill(color('black'));

		/**
		 * Print the eyes.
		 */
		ellipse(this.position.x - (this.size * 0.15), this.position.y - (this.size / 4), this.size * 0.06, 7);
		ellipse(this.position.x + (this.size * 0.15), this.position.y - (this.size / 4), this.size * 0.06, 7);

		pop();
	}
}