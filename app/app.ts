import NativescriptGlimmer from 'nativescript-glimmer';
import { ResolverDelegate } from 'nativescript-glimmer/lib/glimmer/context';
import Resolver from 'nativescript-glimmer/lib/glimmer/resolver';

const resolverDelegate = new ResolverDelegate();
const resolver = new Resolver();
const app = new NativescriptGlimmer('<GlimmerMobile />', {}, resolverDelegate, resolver);

app.render();
