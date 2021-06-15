import { HttpHeaders } from '@angular/common/http';
import { Layout } from 'app/layout/layout.types';

// Types
export type Scheme = 'auto' | 'dark' | 'light';
export type Theme = 'default' | string;
 
/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface AppConfig {
    layout: Layout;
    scheme: Scheme;
    theme: Theme;
    host: string;
}

/**
 * Default configuration for the entire application. This object is used by
 * FuseConfigService to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * FuseConfigService and its methods.
 */
export const appConfig: AppConfig = {
    layout: 'classy',
    scheme: 'light',
    theme: 'default',
    host: 'https://sandbox-nellys-coin.ejaraapis.xyz'
}

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'client-id': 'a59cd6bf3f',
        'api-key': '2]2&J#jnL@P]%O0)&e!GwqtOT',
        //'Authorization': `Bearer ${this.token}`
        
    })

  }
