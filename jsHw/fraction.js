class Fraction {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
      this.simplify();
    }
  
    static add(a, b) {
      let numerator = a.numerator * b.denominator + b.numerator * a.denominator;
      let denominator = a.denominator * b.denominator;
      return new Fraction(numerator, denominator);
    }
  
    static subtract(a, b) {
      let numerator = a.numerator * b.denominator - b.numerator * a.denominator;
      let denominator = a.denominator * b.denominator;
      return new Fraction(numerator, denominator);
    }
  
    static multiply(a, b) {
      let numerator = a.numerator * b.numerator;
      let denominator = a.denominator * b.denominator;
      return new Fraction(numerator, denominator);
    }
  
    static divide(a, b) {
      let numerator = a.numerator * b.denominator;
      let denominator = a.denominator * b.numerator;
      return new Fraction(numerator, denominator);
    }
  
    simplify() {
      let gcd = function(a, b) {
        return b ? gcd(b, a % b) : a;
      };
      let gcdValue = gcd(this.numerator, this.denominator);
      this.numerator /= gcdValue;
      this.denominator /= gcdValue;
    }
  
    toString() {
      return `${this.numerator}/${this.denominator}`;
    }
  }
  
  
  let a = new Fraction(2, 8);
  let b = new Fraction(1, 3);

  let sum = Fraction.add(a, b);
  console.log(sum.toString());

  let difference = Fraction.subtract(a, b);
  console.log(difference.toString());
  let product = Fraction.multiply(a, b);
  console.log(product.toString());

  let quotient = Fraction.divide(a, b);
  console.log(quotient.toString());