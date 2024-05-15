import { Icon01d } from "./animated-icons/Icon01d";
import { Icon01n } from "./animated-icons/Icon01n";
import { Icon02d } from "./animated-icons/Icon02d";
import { Icon02n } from "./animated-icons/Icon02n";
import { Icon03d } from "./animated-icons/Icon03d";
import { Icon03n } from "./animated-icons/Icon03n";
import { Icon04d } from "./animated-icons/Icon04d";
import { Icon04n } from "./animated-icons/Icon04n";
import { Icon09d } from "./animated-icons/Icon09d";
import { Icon09n } from "./animated-icons/Icon09n";
import { Icon10d } from "./animated-icons/Icon10d";
import { Icon10n } from "./animated-icons/Icon10n";
import { Icon11d } from "./animated-icons/Icon11d";
import { Icon11n } from "./animated-icons/Icon11n";
import { Icon13d } from "./animated-icons/Icon13d";
import { Icon13n } from "./animated-icons/Icon13n";
import { Icon50d } from "./animated-icons/Icon50d";
import { Icon50n } from "./animated-icons/Icon50n";
import { FunctionComponent, SVGProps } from "react";

// Define a type for the icon components
type IconComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

// Define a type for the mapping object
type IconMapping = {
  [key: string]: IconComponent;
};

// Mapping OpenWeatherMap icon codes to your icon components
export const iconMapping: IconMapping = {
  "01d": Icon01d,
  "01n": Icon01n,
  "02d": Icon02d,
  "02n": Icon02n,
  "03d": Icon03d,
  "03n": Icon03n,
  "04d": Icon04d,
  "04n": Icon04n,
  "09d": Icon09d,
  "09n": Icon09n,
  "10d": Icon10d,
  "10n": Icon10n,
  "11d": Icon11d,
  "11n": Icon11n,
  "13d": Icon13d,
  "13n": Icon13n,
  "50d": Icon50d,
  "50n": Icon50n,
};
