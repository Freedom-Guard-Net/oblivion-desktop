import { Language } from './type';

const italian: Language = {
    global: {},
    status: {
        connecting: 'Connessione in corso ...',
        connected: 'Connessione stabilita',
        connected_confirm: 'Sei connesso',
        disconnecting: 'Disconnessione in corso ...',
        disconnected: 'Non sei connesso',
        ip_check: 'Recupero informazioni ...',
        keep_trying: 'Attendi un momento per riprovare ...'
    },
    home: {
        title_warp_based: 'Basato su Warp',
        drawer_settings_warp: 'Impostazioni Warp',
        drawer_settings_routing_rules: 'Regole di instradamento',
        drawer_settings_app: 'Impostazioni app',
        drawer_settings_scanner: 'Impostazioni scanner',
        drawer_settings_network: 'Impostazioni rete',
        drawer_log: 'Log dell\'app',
        drawer_update: 'Aggiornamento',
        drawer_update_label: 'Nuova versione',
        drawer_speed_test: 'Test di velocità',
        drawer_about: 'Informazioni sull\'app',
        drawer_lang: 'Cambia lingua'
    },
    toast: {
        ip_check_please_wait: 'Attendi alcuni secondi per riprovare!',
        ir_location:
            'Cloudflare si è connesso a un IP con posizione iraniana, diversa dal tuo IP originale, che può aggirare la censura ma non le sanzioni. Non preoccuparti! Puoi cambiare posizione nelle impostazioni utilizzando le opzioni "Gool" o "Psiphon".',
        btn_submit: 'Capito',
        copied: 'Copiato!',
        cleared: 'Log cancellato!',
        please_wait: 'Attendi ...',
        offline: 'Non sei connesso a Internet!',
        settings_changed: 'Per applicare le impostazioni è necessario riconnettersi.'
    },
    settings: {
        title: 'Impostazioni Warp',
        more: 'Altre impostazioni',
        method_warp: 'Warp',
        method_warp_desc: 'Attivazione di Warp',
        method_gool: 'Gool',
        method_gool_desc: 'Attivazione di WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: 'Attivazione di Psiphon',
        method_psiphon_location: 'Seleziona paese',
        method_psiphon_location_auto: 'Automatico',
        method_psiphon_location_desc: 'Seleziona IP del paese desiderato',
        endpoint: 'Endpoint',
        endpoint_desc: 'Combinazione di IP o nome dominio con porta',
        license: 'Licenza',
        license_desc: 'La licenza consuma il doppio',
        option: 'Impostazioni dell\'app',
        network: 'Impostazioni di rete',
        proxy_mode: 'Configurazione',
        proxy_mode_desc: 'Seleziona la modalità di configurazione del proxy',
        port: 'Porta proxy',
        port_desc: 'Definisci la porta del proxy dell\'app',
        share_vpn: 'Connessione LAN',
        share_vpn_desc: 'Condivisione del proxy sulla rete',
        dns: 'Selezione DNS',
        dns_desc: 'Limitazione pubblicità e contenuti per adulti',
        dns_error: 'Disponibile per i metodi Warp e Gool',
        ip_data: 'Controllo IP',
        ip_data_desc: 'Visualizza IP e posizione dopo la connessione',
        data_usage: 'Utilizzo dati',
        data_usage_desc: 'Mostra velocità e utilizzo dati in tempo reale',
        dark_mode: 'Modalità scura',
        dark_mode_desc: 'Definisci la modalità di visualizzazione dell\'app',
        lang: 'Lingua dell\'app',
        lang_desc: 'Cambia la lingua dell\'interfaccia utente',
        open_login: 'Esecuzione automatica',
        open_login_desc: 'Avvia all\'avvio del sistema',
        auto_connect: 'Connessione automatica',
        auto_connect_desc: 'Connetti all\'avvio dell\'app',
        system_tray: 'Nascondi',
        system_tray_desc: 'Non mostrare l\'icona dell\'app sulla barra delle attività',
        force_close: 'Chiusura forzata',
        force_close_desc: 'Non posizionare l\'app nella barra delle notifiche',
        shortcut: 'Collegamenti rapidi',
        shortcut_desc: 'Collegamenti rapidi nella schermata iniziale',
        restore: 'Ripristina',
        restore_desc: 'Applica le impostazioni predefinite dell\'app',
        scanner: 'Impostazioni scanner',
        scanner_alert:
            'Lo scanner si attiva solo se stai utilizzando l\'endpoint predefinito dell\'app.',
        scanner_ip_type: 'Tipo di endpoint',
        scanner_ip_type_auto: 'Automatico',
        scanner_ip_type_desc: 'Trova l\'IP dell\'endpoint',
        scanner_rtt: 'Tempo di risposta',
        scanner_rtt_default: 'Predefinito',
        scanner_rtt_desc: 'Definisci l\'RTT',
        scanner_reserved: 'Riservato',
        scanner_reserved_desc: 'Usa il Reserved personalizzato di WireGuard',
        routing_rules: 'Lista nera',
        routing_rules_desc: 'Impedisci al traffico di passare attraverso Warp',
        routing_rules_disabled: 'Disattivato',
        routing_rules_items: 'Elemento',
        profile: 'Profilo',
        profile_desc: 'Endpoint salvati da te'
    },
    tabs: {
        home: 'Connessione',
        warp: 'Warp',
        network: 'Rete',
        scanner: 'Scanner',
        app: 'App'
    },
    modal: {
        endpoint_title: 'Endpoint',
        license_title: 'Licenza',
        license_desc:
            'L\'app non richiede obbligatoriamente una licenza Warp per funzionare, ma puoi inserirla qui se desideri.',
        port_title: 'Porta proxy',
        license_clear: 'Rimuovi',
        restore_title: 'Ripristina modifiche',
        restore_desc:
            'Conferma il ripristino delle modifiche per riportare tutte le impostazioni dell\'app ai valori predefiniti. La connessione verrà interrotta.',
        routing_rules_sample: 'Esempio',
        endpoint_default: 'Predefinito',
        endpoint_suggested: 'Consigliato',
        endpoint_latest: 'Recenti',
        endpoint_update: 'Scarica endpoint consigliati',
        endpoint_paste: 'Incolla endpoint attivo',
        profile_title: 'Profilo',
        profile_name: 'Nome',
        profile_endpoint: 'Endpoint',
        profile_limitation: (value) => `Puoi aggiungere un massimo di ${value} endpoint.`,
        confirm: 'Conferma',
        update: 'Aggiorna',
        cancel: 'Annulla'
    },
    log: {
        title: 'Log dell\'app',
        desc: 'Eventuali log generati dall\'app verranno mostrati qui.',
        error_invalid_license: 'La licenza inserita non è valida; rimuovila.',
        error_too_many_connected: 'Limite di licenze raggiunto; rimuovila.',
        error_access_denied: 'Esegui l\'app come Amministratore.',
        error_failed_set_endpoint:
            'Errore nella configurazione dell\'endpoint; controlla il valore o riprova.',
        error_warp_identity: 'Errore di autenticazione su Cloudflare; riprova.',
        error_script_failed: 'Errore nell\'esecuzione dell\'app; riprova.',
        error_object_null: 'Errore nell\'esecuzione dell\'app; riprova.',
        error_port_already_in_use: (value) =>
            `La porta ${value} è già in uso da un altra app; cambiala.`,
        error_port_socket: 'Utilizza un\'altra porta.',
        error_unknown_flag: 'Un comando errato è stato eseguito in background.',
        error_deadline_exceeded: 'Il tempo limite della connessione è scaduto; riprova.',
        error_configuration_encountered: 'Errore nella configurazione del proxy!',
        error_desktop_not_supported: 'L\'ambiente desktop non è supportato!',
        error_configuration_not_supported:
            'La configurazione del proxy non è supportata sul tuo sistema operativo, ma puoi utilizzare manualmente il proxy Warp.',
        error_configuring_proxy: (value) => `Errore nella configurazione del proxy per ${value}!`,
        error_wp_not_found: `Il file warp-plus non è presente accanto al pacchetto dell'app!`,
        error_wp_stopped: `Il file warp-plus ha riscontrato un problema durante l'esecuzione!`,
        error_connection_failed: 'Impossibile connettersi a 1.1.1.1.',
        error_country_failed: 'Impossibile connettersi al paese selezionato.'
    },
    about: {
        title: 'Informazioni sul programma',
        desc: 'Questo programma è una versione non ufficiale ma affidabile dell\'app Oblivion, sviluppata per Windows, Linux e Mac.\nOblivion Desktop, ispirato all\'interfaccia utente della versione originale creata da Yousef Ghobadi, è progettato per consentire l\'accesso libero a Internet. Qualsiasi modifica del nome o uso commerciale non è consentita.',
        slogan: 'Internet per tutti o per nessuno!'
    },
    systemTray: {
        connect: 'Connetti',
        connecting: 'Connessione in corso...',
        connected: 'Connesso',
        disconnecting: 'Disconnessione in corso...',
        settings: 'Impostazioni',
        settings_warp: '   Warp   ',
        settings_network: '   Rete   ',
        settings_scanner: '   Scanner   ',
        settings_app: '   Applicazione   ',
        about: 'Informazioni',
        log: 'Log',
        speed_test: 'Test di velocità',
        exit: 'Esci'
    },
    update: {
        available: 'Nuovo aggiornamento disponibile',
        available_message: (value) => `Un nuovo aggiornamento per ${value} è disponibile. Vuoi scaricarlo?`,
        ready: 'Pronto',
        ready_message: (value) =>
            `${value} è pronto per iniziare il processo di aggiornamento. Riavviare?`
    },
    speedTest: {
        title: 'Test di velocità',
        initializing: 'Preparazione in corso...',
        click_start: 'Fai clic per avviare il test',
        error_msg: 'Si è verificato un errore durante il test di velocità. Riprova.',
        server_unavailable: 'Il server del test di velocità non è disponibile',
        download_speed: 'Velocità di download',
        upload_speed: 'Velocità di upload',
        latency: 'Latenza',
        jitter: 'Jitter'
    }    
};
export default italian;
