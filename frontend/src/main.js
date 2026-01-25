import './styles.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';

document.addEventListener('DOMContentLoaded', () => {
  Prism.highlightAll();
});
