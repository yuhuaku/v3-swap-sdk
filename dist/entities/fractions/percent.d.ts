import { Rounding } from '../../constants';
import { formatInF, Fraction } from './fraction';
export declare class Percent extends Fraction {
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: formatInF, rounding?: Rounding): string;
}
