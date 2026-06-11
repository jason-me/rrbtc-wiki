import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3cd'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '531'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/accessibility',
            component: ComponentCreator('/tags/accessibility', '777'),
            exact: true
          },
          {
            path: '/tags/accounting',
            component: ComponentCreator('/tags/accounting', '7fa'),
            exact: true
          },
          {
            path: '/tags/acquisition',
            component: ComponentCreator('/tags/acquisition', '1b8'),
            exact: true
          },
          {
            path: '/tags/addresses',
            component: ComponentCreator('/tags/addresses', 'cc7'),
            exact: true
          },
          {
            path: '/tags/adoption',
            component: ComponentCreator('/tags/adoption', '5fd'),
            exact: true
          },
          {
            path: '/tags/ai',
            component: ComponentCreator('/tags/ai', '144'),
            exact: true
          },
          {
            path: '/tags/air-gapped',
            component: ComponentCreator('/tags/air-gapped', '8a5'),
            exact: true
          },
          {
            path: '/tags/analytics',
            component: ComponentCreator('/tags/analytics', '894'),
            exact: true
          },
          {
            path: '/tags/android',
            component: ComponentCreator('/tags/android', '4aa'),
            exact: true
          },
          {
            path: '/tags/api',
            component: ComponentCreator('/tags/api', '042'),
            exact: true
          },
          {
            path: '/tags/asic',
            component: ComponentCreator('/tags/asic', '803'),
            exact: true
          },
          {
            path: '/tags/atm',
            component: ComponentCreator('/tags/atm', '438'),
            exact: true
          },
          {
            path: '/tags/austin',
            component: ComponentCreator('/tags/austin', '648'),
            exact: true
          },
          {
            path: '/tags/automation',
            component: ComponentCreator('/tags/automation', 'b06'),
            exact: true
          },
          {
            path: '/tags/beginner-friendly',
            component: ComponentCreator('/tags/beginner-friendly', '2be'),
            exact: true
          },
          {
            path: '/tags/bip-78',
            component: ComponentCreator('/tags/bip-78', 'a18'),
            exact: true
          },
          {
            path: '/tags/bitaxe',
            component: ComponentCreator('/tags/bitaxe', 'ef7'),
            exact: true
          },
          {
            path: '/tags/bitcoin',
            component: ComponentCreator('/tags/bitcoin', '12c'),
            exact: true
          },
          {
            path: '/tags/bitcoin-core',
            component: ComponentCreator('/tags/bitcoin-core', '307'),
            exact: true
          },
          {
            path: '/tags/bitcoin-core-fork',
            component: ComponentCreator('/tags/bitcoin-core-fork', '23d'),
            exact: true
          },
          {
            path: '/tags/bitcoin-knots',
            component: ComponentCreator('/tags/bitcoin-knots', 'e95'),
            exact: true
          },
          {
            path: '/tags/bitcoin-only',
            component: ComponentCreator('/tags/bitcoin-only', '4fe'),
            exact: true
          },
          {
            path: '/tags/blackbox',
            component: ComponentCreator('/tags/blackbox', '8ab'),
            exact: true
          },
          {
            path: '/tags/bluetooth',
            component: ComponentCreator('/tags/bluetooth', 'a5d'),
            exact: true
          },
          {
            path: '/tags/board-game',
            component: ComponentCreator('/tags/board-game', '08e'),
            exact: true
          },
          {
            path: '/tags/bolt-12',
            component: ComponentCreator('/tags/bolt-12', 'e0e'),
            exact: true
          },
          {
            path: '/tags/bootcamp',
            component: ComponentCreator('/tags/bootcamp', '82a'),
            exact: true
          },
          {
            path: '/tags/braiins',
            component: ComponentCreator('/tags/braiins', 'b7e'),
            exact: true
          },
          {
            path: '/tags/brc-20',
            component: ComponentCreator('/tags/brc-20', '70f'),
            exact: true
          },
          {
            path: '/tags/browser-extension',
            component: ComponentCreator('/tags/browser-extension', '51b'),
            exact: true
          },
          {
            path: '/tags/business',
            component: ComponentCreator('/tags/business', '639'),
            exact: true
          },
          {
            path: '/tags/cashu',
            component: ComponentCreator('/tags/cashu', '34c'),
            exact: true
          },
          {
            path: '/tags/chaum',
            component: ComponentCreator('/tags/chaum', '6ac'),
            exact: true
          },
          {
            path: '/tags/circular-economy',
            component: ComponentCreator('/tags/circular-economy', 'f3f'),
            exact: true
          },
          {
            path: '/tags/cli',
            component: ComponentCreator('/tags/cli', 'ca4'),
            exact: true
          },
          {
            path: '/tags/coincorner',
            component: ComponentCreator('/tags/coincorner', '5f0'),
            exact: true
          },
          {
            path: '/tags/coinjoin',
            component: ComponentCreator('/tags/coinjoin', '73a'),
            exact: true
          },
          {
            path: '/tags/coinkite',
            component: ComponentCreator('/tags/coinkite', '55c'),
            exact: true
          },
          {
            path: '/tags/cold-storage',
            component: ComponentCreator('/tags/cold-storage', '2f7'),
            exact: true
          },
          {
            path: '/tags/collaborative',
            component: ComponentCreator('/tags/collaborative', '277'),
            exact: true
          },
          {
            path: '/tags/community',
            component: ComponentCreator('/tags/community', 'df5'),
            exact: true
          },
          {
            path: '/tags/consensus',
            component: ComponentCreator('/tags/consensus', '6ec'),
            exact: true
          },
          {
            path: '/tags/controversy',
            component: ComponentCreator('/tags/controversy', '0cb'),
            exact: true
          },
          {
            path: '/tags/cost-saving',
            component: ComponentCreator('/tags/cost-saving', '59a'),
            exact: true
          },
          {
            path: '/tags/cryptography',
            component: ComponentCreator('/tags/cryptography', 'cda'),
            exact: true
          },
          {
            path: '/tags/curriculum',
            component: ComponentCreator('/tags/curriculum', 'fee'),
            exact: true
          },
          {
            path: '/tags/custody',
            component: ComponentCreator('/tags/custody', '97f'),
            exact: true
          },
          {
            path: '/tags/data',
            component: ComponentCreator('/tags/data', '43c'),
            exact: true
          },
          {
            path: '/tags/datum',
            component: ComponentCreator('/tags/datum', 'cd9'),
            exact: true
          },
          {
            path: '/tags/decentralization',
            component: ComponentCreator('/tags/decentralization', '4ee'),
            exact: true
          },
          {
            path: '/tags/decentralized',
            component: ComponentCreator('/tags/decentralized', '447'),
            exact: true
          },
          {
            path: '/tags/design',
            component: ComponentCreator('/tags/design', '8ab'),
            exact: true
          },
          {
            path: '/tags/desktop',
            component: ComponentCreator('/tags/desktop', '4b0'),
            exact: true
          },
          {
            path: '/tags/development',
            component: ComponentCreator('/tags/development', '3ae'),
            exact: true
          },
          {
            path: '/tags/development-kit',
            component: ComponentCreator('/tags/development-kit', 'b75'),
            exact: true
          },
          {
            path: '/tags/disaster-prep',
            component: ComponentCreator('/tags/disaster-prep', '62a'),
            exact: true
          },
          {
            path: '/tags/diy',
            component: ComponentCreator('/tags/diy', '23f'),
            exact: true
          },
          {
            path: '/tags/ecash',
            component: ComponentCreator('/tags/ecash', 'f12'),
            exact: true
          },
          {
            path: '/tags/economics',
            component: ComponentCreator('/tags/economics', '875'),
            exact: true
          },
          {
            path: '/tags/education',
            component: ComponentCreator('/tags/education', '642'),
            exact: true
          },
          {
            path: '/tags/elections',
            component: ComponentCreator('/tags/elections', '4f9'),
            exact: true
          },
          {
            path: '/tags/electricity',
            component: ComponentCreator('/tags/electricity', 'a40'),
            exact: true
          },
          {
            path: '/tags/enclosure',
            component: ComponentCreator('/tags/enclosure', 'a48'),
            exact: true
          },
          {
            path: '/tags/enterprise',
            component: ComponentCreator('/tags/enterprise', '06a'),
            exact: true
          },
          {
            path: '/tags/events',
            component: ComponentCreator('/tags/events', '254'),
            exact: true
          },
          {
            path: '/tags/exchange',
            component: ComponentCreator('/tags/exchange', 'cbc'),
            exact: true
          },
          {
            path: '/tags/family-friendly',
            component: ComponentCreator('/tags/family-friendly', 'b48'),
            exact: true
          },
          {
            path: '/tags/firmware',
            component: ComponentCreator('/tags/firmware', 'd81'),
            exact: true
          },
          {
            path: '/tags/full-node',
            component: ComponentCreator('/tags/full-node', 'd59'),
            exact: true
          },
          {
            path: '/tags/getonzero',
            component: ComponentCreator('/tags/getonzero', '7ab'),
            exact: true
          },
          {
            path: '/tags/gift-cards',
            component: ComponentCreator('/tags/gift-cards', '935'),
            exact: true
          },
          {
            path: '/tags/gifting',
            component: ComponentCreator('/tags/gifting', '1c9'),
            exact: true
          },
          {
            path: '/tags/halving',
            component: ComponentCreator('/tags/halving', '0e2'),
            exact: true
          },
          {
            path: '/tags/hardware',
            component: ComponentCreator('/tags/hardware', 'dfa'),
            exact: true
          },
          {
            path: '/tags/hardware-integration',
            component: ComponentCreator('/tags/hardware-integration', '801'),
            exact: true
          },
          {
            path: '/tags/hardware-wallet',
            component: ComponentCreator('/tags/hardware-wallet', 'a6c'),
            exact: true
          },
          {
            path: '/tags/hashpower',
            component: ComponentCreator('/tags/hashpower', '1b9'),
            exact: true
          },
          {
            path: '/tags/hashrate-marketplace',
            component: ComponentCreator('/tags/hashrate-marketplace', 'b6b'),
            exact: true
          },
          {
            path: '/tags/hermes-agent',
            component: ComponentCreator('/tags/hermes-agent', '681'),
            exact: true
          },
          {
            path: '/tags/home-mining',
            component: ComponentCreator('/tags/home-mining', '7f0'),
            exact: true
          },
          {
            path: '/tags/immutability',
            component: ComponentCreator('/tags/immutability', 'e9f'),
            exact: true
          },
          {
            path: '/tags/infrastructure',
            component: ComponentCreator('/tags/infrastructure', 'a79'),
            exact: true
          },
          {
            path: '/tags/inheritance',
            component: ComponentCreator('/tags/inheritance', '20f'),
            exact: true
          },
          {
            path: '/tags/inscriptions',
            component: ComponentCreator('/tags/inscriptions', 'e55'),
            exact: true
          },
          {
            path: '/tags/keys',
            component: ComponentCreator('/tags/keys', '38a'),
            exact: true
          },
          {
            path: '/tags/kyc',
            component: ComponentCreator('/tags/kyc', 'b59'),
            exact: true
          },
          {
            path: '/tags/layer-2',
            component: ComponentCreator('/tags/layer-2', '4de'),
            exact: true
          },
          {
            path: '/tags/ldk',
            component: ComponentCreator('/tags/ldk', 'e18'),
            exact: true
          },
          {
            path: '/tags/legacy',
            component: ComponentCreator('/tags/legacy', '392'),
            exact: true
          },
          {
            path: '/tags/light-client',
            component: ComponentCreator('/tags/light-client', '871'),
            exact: true
          },
          {
            path: '/tags/lightning',
            component: ComponentCreator('/tags/lightning', '99f'),
            exact: true
          },
          {
            path: '/tags/llm',
            component: ComponentCreator('/tags/llm', '916'),
            exact: true
          },
          {
            path: '/tags/local',
            component: ComponentCreator('/tags/local', '495'),
            exact: true
          },
          {
            path: '/tags/local-business',
            component: ComponentCreator('/tags/local-business', '16d'),
            exact: true
          },
          {
            path: '/tags/lora',
            component: ComponentCreator('/tags/lora', '989'),
            exact: true
          },
          {
            path: '/tags/map',
            component: ComponentCreator('/tags/map', '096'),
            exact: true
          },
          {
            path: '/tags/marketplace',
            component: ComponentCreator('/tags/marketplace', '1e5'),
            exact: true
          },
          {
            path: '/tags/mempool',
            component: ComponentCreator('/tags/mempool', 'f8b'),
            exact: true
          },
          {
            path: '/tags/merchant',
            component: ComponentCreator('/tags/merchant', '28d'),
            exact: true
          },
          {
            path: '/tags/merchant-tools',
            component: ComponentCreator('/tags/merchant-tools', 'f0f'),
            exact: true
          },
          {
            path: '/tags/mesh',
            component: ComponentCreator('/tags/mesh', '4be'),
            exact: true
          },
          {
            path: '/tags/mesh-networking',
            component: ComponentCreator('/tags/mesh-networking', '78e'),
            exact: true
          },
          {
            path: '/tags/mining',
            component: ComponentCreator('/tags/mining', 'f36'),
            exact: true
          },
          {
            path: '/tags/mint',
            component: ComponentCreator('/tags/mint', 'b78'),
            exact: true
          },
          {
            path: '/tags/mixing',
            component: ComponentCreator('/tags/mixing', '06d'),
            exact: true
          },
          {
            path: '/tags/mobile',
            component: ComponentCreator('/tags/mobile', '04d'),
            exact: true
          },
          {
            path: '/tags/multisig',
            component: ComponentCreator('/tags/multisig', 'ae2'),
            exact: true
          },
          {
            path: '/tags/natural-gas',
            component: ComponentCreator('/tags/natural-gas', '0fb'),
            exact: true
          },
          {
            path: '/tags/nfc',
            component: ComponentCreator('/tags/nfc', '9a6'),
            exact: true
          },
          {
            path: '/tags/nfts',
            component: ComponentCreator('/tags/nfts', 'c1b'),
            exact: true
          },
          {
            path: '/tags/no-kyc',
            component: ComponentCreator('/tags/no-kyc', '242'),
            exact: true
          },
          {
            path: '/tags/node',
            component: ComponentCreator('/tags/node', '474'),
            exact: true
          },
          {
            path: '/tags/node-management',
            component: ComponentCreator('/tags/node-management', '582'),
            exact: true
          },
          {
            path: '/tags/nodes',
            component: ComponentCreator('/tags/nodes', '495'),
            exact: true
          },
          {
            path: '/tags/noise-reduction',
            component: ComponentCreator('/tags/noise-reduction', '9cc'),
            exact: true
          },
          {
            path: '/tags/non-custodial',
            component: ComponentCreator('/tags/non-custodial', 'eb7'),
            exact: true
          },
          {
            path: '/tags/non-kyc',
            component: ComponentCreator('/tags/non-kyc', '265'),
            exact: true
          },
          {
            path: '/tags/nostr',
            component: ComponentCreator('/tags/nostr', 'fcb'),
            exact: true
          },
          {
            path: '/tags/obfuscation',
            component: ComponentCreator('/tags/obfuscation', '19d'),
            exact: true
          },
          {
            path: '/tags/ocean',
            component: ComponentCreator('/tags/ocean', 'b16'),
            exact: true
          },
          {
            path: '/tags/offline',
            component: ComponentCreator('/tags/offline', 'eeb'),
            exact: true
          },
          {
            path: '/tags/on-chain',
            component: ComponentCreator('/tags/on-chain', '13e'),
            exact: true
          },
          {
            path: '/tags/onboarding',
            component: ComponentCreator('/tags/onboarding', 'b8e'),
            exact: true
          },
          {
            path: '/tags/open-source',
            component: ComponentCreator('/tags/open-source', 'b1e'),
            exact: true
          },
          {
            path: '/tags/opendime',
            component: ComponentCreator('/tags/opendime', 'e9a'),
            exact: true
          },
          {
            path: '/tags/opentimestamps',
            component: ComponentCreator('/tags/opentimestamps', '3fd'),
            exact: true
          },
          {
            path: '/tags/opsec',
            component: ComponentCreator('/tags/opsec', '16c'),
            exact: true
          },
          {
            path: '/tags/optimization',
            component: ComponentCreator('/tags/optimization', '734'),
            exact: true
          },
          {
            path: '/tags/ordinals',
            component: ComponentCreator('/tags/ordinals', 'f9a'),
            exact: true
          },
          {
            path: '/tags/os',
            component: ComponentCreator('/tags/os', 'd02'),
            exact: true
          },
          {
            path: '/tags/p-2-p',
            component: ComponentCreator('/tags/p-2-p', '9c6'),
            exact: true
          },
          {
            path: '/tags/payjoin',
            component: ComponentCreator('/tags/payjoin', 'fc8'),
            exact: true
          },
          {
            path: '/tags/payment-processor',
            component: ComponentCreator('/tags/payment-processor', 'c6b'),
            exact: true
          },
          {
            path: '/tags/payments',
            component: ComponentCreator('/tags/payments', '56c'),
            exact: true
          },
          {
            path: '/tags/payouts',
            component: ComponentCreator('/tags/payouts', 'f9c'),
            exact: true
          },
          {
            path: '/tags/personal-finance',
            component: ComponentCreator('/tags/personal-finance', '6d7'),
            exact: true
          },
          {
            path: '/tags/physical-card',
            component: ComponentCreator('/tags/physical-card', '190'),
            exact: true
          },
          {
            path: '/tags/plebdevs',
            component: ComponentCreator('/tags/plebdevs', '136'),
            exact: true
          },
          {
            path: '/tags/plug-and-play',
            component: ComponentCreator('/tags/plug-and-play', '6d3'),
            exact: true
          },
          {
            path: '/tags/policy',
            component: ComponentCreator('/tags/policy', 'c1d'),
            exact: true
          },
          {
            path: '/tags/pool',
            component: ComponentCreator('/tags/pool', 'b5e'),
            exact: true
          },
          {
            path: '/tags/pool-mining',
            component: ComponentCreator('/tags/pool-mining', '7fe'),
            exact: true
          },
          {
            path: '/tags/pos',
            component: ComponentCreator('/tags/pos', '5a0'),
            exact: true
          },
          {
            path: '/tags/presenter',
            component: ComponentCreator('/tags/presenter', '699'),
            exact: true
          },
          {
            path: '/tags/privacy',
            component: ComponentCreator('/tags/privacy', '856'),
            exact: true
          },
          {
            path: '/tags/profitability',
            component: ComponentCreator('/tags/profitability', 'c31'),
            exact: true
          },
          {
            path: '/tags/proof-of-work',
            component: ComponentCreator('/tags/proof-of-work', '0fb'),
            exact: true
          },
          {
            path: '/tags/protocol',
            component: ComponentCreator('/tags/protocol', '8cf'),
            exact: true
          },
          {
            path: '/tags/python',
            component: ComponentCreator('/tags/python', 'e1c'),
            exact: true
          },
          {
            path: '/tags/raspberry-pi',
            component: ComponentCreator('/tags/raspberry-pi', '8f7'),
            exact: true
          },
          {
            path: '/tags/reference-implementation',
            component: ComponentCreator('/tags/reference-implementation', '4df'),
            exact: true
          },
          {
            path: '/tags/resale',
            component: ComponentCreator('/tags/resale', '4f4'),
            exact: true
          },
          {
            path: '/tags/resilient-communications',
            component: ComponentCreator('/tags/resilient-communications', '2d7'),
            exact: true
          },
          {
            path: '/tags/reward',
            component: ComponentCreator('/tags/reward', '6ea'),
            exact: true
          },
          {
            path: '/tags/rewards',
            component: ComponentCreator('/tags/rewards', 'fbc'),
            exact: true
          },
          {
            path: '/tags/risk',
            component: ComponentCreator('/tags/risk', '6fd'),
            exact: true
          },
          {
            path: '/tags/runes',
            component: ComponentCreator('/tags/runes', 'a4e'),
            exact: true
          },
          {
            path: '/tags/samourai',
            component: ComponentCreator('/tags/samourai', '150'),
            exact: true
          },
          {
            path: '/tags/scalability',
            component: ComponentCreator('/tags/scalability', '555'),
            exact: true
          },
          {
            path: '/tags/scripts',
            component: ComponentCreator('/tags/scripts', '224'),
            exact: true
          },
          {
            path: '/tags/security',
            component: ComponentCreator('/tags/security', '84b'),
            exact: true
          },
          {
            path: '/tags/security-element',
            component: ComponentCreator('/tags/security-element', '240'),
            exact: true
          },
          {
            path: '/tags/segwit',
            component: ComponentCreator('/tags/segwit', '650'),
            exact: true
          },
          {
            path: '/tags/self-custodial',
            component: ComponentCreator('/tags/self-custodial', 'f2d'),
            exact: true
          },
          {
            path: '/tags/self-hosted',
            component: ComponentCreator('/tags/self-hosted', '639'),
            exact: true
          },
          {
            path: '/tags/self-hosting',
            component: ComponentCreator('/tags/self-hosting', 'e4a'),
            exact: true
          },
          {
            path: '/tags/server',
            component: ComponentCreator('/tags/server', 'e9e'),
            exact: true
          },
          {
            path: '/tags/services',
            component: ComponentCreator('/tags/services', 'a6e'),
            exact: true
          },
          {
            path: '/tags/signing',
            component: ComponentCreator('/tags/signing', 'ee4'),
            exact: true
          },
          {
            path: '/tags/signing-device',
            component: ComponentCreator('/tags/signing-device', '02a'),
            exact: true
          },
          {
            path: '/tags/social-media',
            component: ComponentCreator('/tags/social-media', '47f'),
            exact: true
          },
          {
            path: '/tags/software',
            component: ComponentCreator('/tags/software', '1eb'),
            exact: true
          },
          {
            path: '/tags/solo-mining',
            component: ComponentCreator('/tags/solo-mining', '87f'),
            exact: true
          },
          {
            path: '/tags/sound-money',
            component: ComponentCreator('/tags/sound-money', '413'),
            exact: true
          },
          {
            path: '/tags/sovereignty',
            component: ComponentCreator('/tags/sovereignty', '0c8'),
            exact: true
          },
          {
            path: '/tags/spectrum',
            component: ComponentCreator('/tags/spectrum', 'ce9'),
            exact: true
          },
          {
            path: '/tags/spending',
            component: ComponentCreator('/tags/spending', '5a0'),
            exact: true
          },
          {
            path: '/tags/stratum',
            component: ComponentCreator('/tags/stratum', 'c17'),
            exact: true
          },
          {
            path: '/tags/stratum-v-2',
            component: ComponentCreator('/tags/stratum-v-2', '0b5'),
            exact: true
          },
          {
            path: '/tags/submarine-swaps',
            component: ComponentCreator('/tags/submarine-swaps', '9ee'),
            exact: true
          },
          {
            path: '/tags/supply-cap',
            component: ComponentCreator('/tags/supply-cap', '6d6'),
            exact: true
          },
          {
            path: '/tags/synthesis',
            component: ComponentCreator('/tags/synthesis', '3dd'),
            exact: true
          },
          {
            path: '/tags/taproot',
            component: ComponentCreator('/tags/taproot', 'd11'),
            exact: true
          },
          {
            path: '/tags/taxes',
            component: ComponentCreator('/tags/taxes', 'b5e'),
            exact: true
          },
          {
            path: '/tags/testing',
            component: ComponentCreator('/tags/testing', '08a'),
            exact: true
          },
          {
            path: '/tags/texas',
            component: ComponentCreator('/tags/texas', '71a'),
            exact: true
          },
          {
            path: '/tags/tides',
            component: ComponentCreator('/tags/tides', '344'),
            exact: true
          },
          {
            path: '/tags/timestamping',
            component: ComponentCreator('/tags/timestamping', '69b'),
            exact: true
          },
          {
            path: '/tags/tools',
            component: ComponentCreator('/tags/tools', '6d6'),
            exact: true
          },
          {
            path: '/tags/tor',
            component: ComponentCreator('/tags/tor', '976'),
            exact: true
          },
          {
            path: '/tags/trading',
            component: ComponentCreator('/tags/trading', 'eb5'),
            exact: true
          },
          {
            path: '/tags/transaction-graph',
            component: ComponentCreator('/tags/transaction-graph', '4f5'),
            exact: true
          },
          {
            path: '/tags/transactions',
            component: ComponentCreator('/tags/transactions', '286'),
            exact: true
          },
          {
            path: '/tags/utxo',
            component: ComponentCreator('/tags/utxo', '4da'),
            exact: true
          },
          {
            path: '/tags/utxo-management',
            component: ComponentCreator('/tags/utxo-management', 'a10'),
            exact: true
          },
          {
            path: '/tags/ux',
            component: ComponentCreator('/tags/ux', '340'),
            exact: true
          },
          {
            path: '/tags/venue',
            component: ComponentCreator('/tags/venue', 'b01'),
            exact: true
          },
          {
            path: '/tags/verifiable',
            component: ComponentCreator('/tags/verifiable', '404'),
            exact: true
          },
          {
            path: '/tags/voucher',
            component: ComponentCreator('/tags/voucher', '52e'),
            exact: true
          },
          {
            path: '/tags/vouchers',
            component: ComponentCreator('/tags/vouchers', '35c'),
            exact: true
          },
          {
            path: '/tags/vpn',
            component: ComponentCreator('/tags/vpn', 'de2'),
            exact: true
          },
          {
            path: '/tags/wallet',
            component: ComponentCreator('/tags/wallet', '2d6'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '759'),
            routes: [
              {
                path: '/comparisons/',
                component: ComponentCreator('/comparisons/', '3c9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/comparisons/bitcoin-core-vs-knots',
                component: ComponentCreator('/comparisons/bitcoin-core-vs-knots', 'd95'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/comparisons/collaborative-custody-providers',
                component: ComponentCreator('/comparisons/collaborative-custody-providers', '0d3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/comparisons/mining-payout-schemas',
                component: ComponentCreator('/comparisons/mining-payout-schemas', '856'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/comparisons/node-operating-systems',
                component: ComponentCreator('/comparisons/node-operating-systems', '752'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/comparisons/privacy-stacks',
                component: ComponentCreator('/comparisons/privacy-stacks', 'a85'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/',
                component: ComponentCreator('/concepts/', '5c0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/accessibility-in-bitcoin',
                component: ComponentCreator('/concepts/accessibility-in-bitcoin', 'a7c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/ai-and-bitcoin',
                component: ComponentCreator('/concepts/ai-and-bitcoin', '0d2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/bitcoin-address-types',
                component: ComponentCreator('/concepts/bitcoin-address-types', '6f5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/bitcoin-education',
                component: ComponentCreator('/concepts/bitcoin-education', '48e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/bitcoin-nfts',
                component: ComponentCreator('/concepts/bitcoin-nfts', 'b78'),
                exact: true
              },
              {
                path: '/concepts/bitcoin-node-types',
                component: ComponentCreator('/concepts/bitcoin-node-types', 'f1d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/bitcoin-protocol',
                component: ComponentCreator('/concepts/bitcoin-protocol', '42b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/chaumian-ecash',
                component: ComponentCreator('/concepts/chaumian-ecash', 'e22'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/circular-economy',
                component: ComponentCreator('/concepts/circular-economy', '555'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/custody-models',
                component: ComponentCreator('/concepts/custody-models', 'fbd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/home-mining',
                component: ComponentCreator('/concepts/home-mining', 'e45'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/lightning-network',
                component: ComponentCreator('/concepts/lightning-network', 'a94'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/mesh-networks',
                component: ComponentCreator('/concepts/mesh-networks', '255'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/mining-payout-schemas',
                component: ComponentCreator('/concepts/mining-payout-schemas', 'b68'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/multisig',
                component: ComponentCreator('/concepts/multisig', 'cfb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/no-kyc-acquisition',
                component: ComponentCreator('/concepts/no-kyc-acquisition', '30b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/nostr',
                component: ComponentCreator('/concepts/nostr', '782'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/p2p-exchange',
                component: ComponentCreator('/concepts/p2p-exchange', '56b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/payjoin',
                component: ComponentCreator('/concepts/payjoin', '249'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/privacy-stacks',
                component: ComponentCreator('/concepts/privacy-stacks', 'a86'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/proof-of-work',
                component: ComponentCreator('/concepts/proof-of-work', 'faf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/concepts/utxo-model',
                component: ComponentCreator('/concepts/utxo-model', '256'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/',
                component: ComponentCreator('/entities/', 'a65'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/alby',
                component: ComponentCreator('/entities/alby', '7da'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/axe-os',
                component: ComponentCreator('/entities/axe-os', '5e7'),
                exact: true
              },
              {
                path: '/entities/azteco',
                component: ComponentCreator('/entities/azteco', '5b9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/base58',
                component: ComponentCreator('/entities/base58', '10f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bisq',
                component: ComponentCreator('/entities/bisq', 'eb7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bitaxe',
                component: ComponentCreator('/entities/bitaxe', 'e18'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bitcoin-commons',
                component: ComponentCreator('/entities/bitcoin-commons', 'ef4'),
                exact: true
              },
              {
                path: '/entities/bitcoin-core',
                component: ComponentCreator('/entities/bitcoin-core', '499'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bitcoin-knots',
                component: ComponentCreator('/entities/bitcoin-knots', 'd6f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bitrefill',
                component: ComponentCreator('/entities/bitrefill', 'c7c'),
                exact: true
              },
              {
                path: '/entities/blockstream-green',
                component: ComponentCreator('/entities/blockstream-green', 'a45'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bluewallet',
                component: ComponentCreator('/entities/bluewallet', '898'),
                exact: true
              },
              {
                path: '/entities/bolt-card',
                component: ComponentCreator('/entities/bolt-card', 'b98'),
                exact: true
              },
              {
                path: '/entities/braiins-hashpower',
                component: ComponentCreator('/entities/braiins-hashpower', '4b0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/breez',
                component: ComponentCreator('/entities/breez', 'd9a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/btcmap',
                component: ComponentCreator('/entities/btcmap', 'b5e'),
                exact: true
              },
              {
                path: '/entities/btcpay-server',
                component: ComponentCreator('/entities/btcpay-server', '93e'),
                exact: true
              },
              {
                path: '/entities/c-lightning',
                component: ComponentCreator('/entities/c-lightning', '007'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/caravan',
                component: ComponentCreator('/entities/caravan', 'b95'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/casa',
                component: ComponentCreator('/entities/casa', '0bb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/casdcr',
                component: ComponentCreator('/entities/casdcr', '385'),
                exact: true
              },
              {
                path: '/entities/cashu',
                component: ComponentCreator('/entities/cashu', '88e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/coinatmradar',
                component: ComponentCreator('/entities/coinatmradar', '09d'),
                exact: true
              },
              {
                path: '/entities/coldcard',
                component: ComponentCreator('/entities/coldcard', 'dba'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/comparepower',
                component: ComponentCreator('/entities/comparepower', '54a'),
                exact: true
              },
              {
                path: '/entities/datum',
                component: ComponentCreator('/entities/datum', 'fff'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/electrum',
                component: ComponentCreator('/entities/electrum', '912'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/feed-filter',
                component: ComponentCreator('/entities/feed-filter', 'f04'),
                exact: true
              },
              {
                path: '/entities/fold',
                component: ComponentCreator('/entities/fold', 'b21'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/hash-rate-index',
                component: ComponentCreator('/entities/hash-rate-index', 'f5b'),
                exact: true
              },
              {
                path: '/entities/hashguard',
                component: ComponentCreator('/entities/hashguard', '7cd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/hashrate-autopilot',
                component: ComponentCreator('/entities/hashrate-autopilot', 'e49'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/hodl-up',
                component: ComponentCreator('/entities/hodl-up', 'e8e'),
                exact: true
              },
              {
                path: '/entities/hodlhodl',
                component: ComponentCreator('/entities/hodlhodl', '68a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/hwi',
                component: ComponentCreator('/entities/hwi', '3dd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/ibexpay',
                component: ComponentCreator('/entities/ibexpay', '2c0'),
                exact: true
              },
              {
                path: '/entities/joinmarket',
                component: ComponentCreator('/entities/joinmarket', '357'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/kaboom-racks',
                component: ComponentCreator('/entities/kaboom-racks', '1e0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/ledger',
                component: ComponentCreator('/entities/ledger', '4bc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/lnbits',
                component: ComponentCreator('/entities/lnbits', '2bb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/muun',
                component: ComponentCreator('/entities/muun', '0fa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/mynode',
                component: ComponentCreator('/entities/mynode', 'e5f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/nunchuk',
                component: ComponentCreator('/entities/nunchuk', '956'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/nutstash',
                component: ComponentCreator('/entities/nutstash', '0b3'),
                exact: true
              },
              {
                path: '/entities/ocean-xyz',
                component: ComponentCreator('/entities/ocean-xyz', 'bf2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/opennode',
                component: ComponentCreator('/entities/opennode', '4cb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/oshi-app',
                component: ComponentCreator('/entities/oshi-app', 'e57'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/payjoin-dev-kit',
                component: ComponentCreator('/entities/payjoin-dev-kit', 'f32'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/phoenix',
                component: ComponentCreator('/entities/phoenix', '5e8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/plebdevs',
                component: ComponentCreator('/entities/plebdevs', '544'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/pleblab',
                component: ComponentCreator('/entities/pleblab', '3ca'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/polar',
                component: ComponentCreator('/entities/polar', 'fa3'),
                exact: true
              },
              {
                path: '/entities/public-pool',
                component: ComponentCreator('/entities/public-pool', '16f'),
                exact: true
              },
              {
                path: '/entities/raspiblitz',
                component: ComponentCreator('/entities/raspiblitz', '18e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/robosats',
                component: ComponentCreator('/entities/robosats', '957'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/ronindojo',
                component: ComponentCreator('/entities/ronindojo', '371'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/sahil-chaturvedi',
                component: ComponentCreator('/entities/sahil-chaturvedi', '309'),
                exact: true
              },
              {
                path: '/entities/samourai-wallet',
                component: ComponentCreator('/entities/samourai-wallet', '918'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/sats-card',
                component: ComponentCreator('/entities/sats-card', '1a9'),
                exact: true
              },
              {
                path: '/entities/seedsigner',
                component: ComponentCreator('/entities/seedsigner', '5f4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/shushminer',
                component: ComponentCreator('/entities/shushminer', '43a'),
                exact: true
              },
              {
                path: '/entities/simple-proof',
                component: ComponentCreator('/entities/simple-proof', '1b5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/sparrow-wallet',
                component: ComponentCreator('/entities/sparrow-wallet', 'dbd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/specter-desktop',
                component: ComponentCreator('/entities/specter-desktop', '38d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/start-os',
                component: ComponentCreator('/entities/start-os', '1c2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/stonewall',
                component: ComponentCreator('/entities/stonewall', '59d'),
                exact: true
              },
              {
                path: '/entities/stowaway',
                component: ComponentCreator('/entities/stowaway', '2df'),
                exact: true
              },
              {
                path: '/entities/stratum-v2',
                component: ComponentCreator('/entities/stratum-v2', '49b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/strike',
                component: ComponentCreator('/entities/strike', '267'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/tapsigner',
                component: ComponentCreator('/entities/tapsigner', '37a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/trezor',
                component: ComponentCreator('/entities/trezor', '40b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/umbrel',
                component: ComponentCreator('/entities/umbrel', '39a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/unchained-capital',
                component: ComponentCreator('/entities/unchained-capital', 'c19'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/upstream-data',
                component: ComponentCreator('/entities/upstream-data', '757'),
                exact: true
              },
              {
                path: '/entities/wasabi-wallet',
                component: ComponentCreator('/entities/wasabi-wallet', 'b59'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/whirlpool',
                component: ComponentCreator('/entities/whirlpool', '178'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/zeus',
                component: ComponentCreator('/entities/zeus', '802'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/license',
                component: ComponentCreator('/license', 'bee'),
                exact: true
              },
              {
                path: '/log',
                component: ComponentCreator('/log', '5ea'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/',
                component: ComponentCreator('/presentations/', 'cf3'),
                exact: true
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/', 'e68'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-001',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-001', '710'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-002',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-002', '5fb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-003',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-003', '8e3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-004',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-004', '374'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-005',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-005', '907'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-006',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-006', '9e0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-007',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-007', 'a7b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-008',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-008', '8c5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-009',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-009', '29c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-010',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-010', 'bbf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-011',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-011', '04c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-012',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-012', 'c44'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-013',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-013', '847'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-014',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-014', '70d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-015',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-015', '94b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-016',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-016', '1ba'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-017',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-017', '099'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-018',
                component: ComponentCreator('/presentations/bisq-to-bitcoin-retirement-2025-10-10/slide-018', 'b43'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/', '0e1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-001',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-001', '90d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-002',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-002', '030'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-003',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-003', '635'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-004',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-004', '8b1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-005',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-005', 'ef0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-006',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-006', '22f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-007',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-007', 'd5d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-008',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-008', 'bf5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-009',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-009', '509'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-010',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-010', 'db2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-011',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-011', '53c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-012',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-012', '7e7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-013',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-013', '256'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-014',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-014', '34c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitchat-and-chill-2025-08-14/slide-015',
                component: ComponentCreator('/presentations/bitchat-and-chill-2025-08-14/slide-015', 'b19'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/', '2aa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-001',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-001', '5ad'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-002',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-002', 'ccf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-003',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-003', '5b1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-004',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-004', '44a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-005',
                component: ComponentCreator('/presentations/bitcoin-protocol-meetup-2-2022-07-14/slide-005', '0cd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/', '601'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-001',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-001', 'ed0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-002',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-002', 'dfb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-003',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-003', 'c0a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-004',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-004', '1f1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-005',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-005', 'd8f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-006',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-006', '827'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-007',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-007', 'f98'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-008',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-008', '401'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-009',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-009', 'a05'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-010',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-010', '317'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-011',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-011', 'abf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-012',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-012', 'fcc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-013',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-013', '4c7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-014',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-014', '552'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-015',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-015', '197'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-016',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-016', '482'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-017',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-017', '319'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-018',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop1-2025-05-16/slide-018', 'a67'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/', '43f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-001',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-001', 'e52'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-002',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-002', 'f60'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-003',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-003', '920'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-004',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-004', 'def'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-005',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-005', '790'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-006',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-006', 'edb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-007',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-007', 'b3d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-008',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-008', 'aef'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-009',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-009', '9f2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-010',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-010', '9d2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-011',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-011', '46b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-012',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-012', '6b7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-013',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-013', 'c42'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-014',
                component: ComponentCreator('/presentations/bitcoindesign-gaad-workshop2-2025-05-16/slide-014', '64a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/', 'e65'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-001',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-001', '433'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-002',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-002', 'd52'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-003',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-003', 'c07'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-004',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-004', 'ab4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-005',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-005', '568'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-006',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-006', '833'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-007',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-007', 'd83'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-008',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-008', 'f27'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-009',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-009', '1a0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-010',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-010', '11b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-011',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-011', '58d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-012',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-012', 'e28'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-013',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-013', '00f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-014',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-014', 'e27'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-015',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-015', 'd84'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-016',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-016', 'c1d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-017',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-017', 'f23'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-018',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-018', '6b6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-019',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-019', '558'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-020',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-020', '149'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/cashu-mints-meetup-10-2023-03-09/slide-021',
                component: ComponentCreator('/presentations/cashu-mints-meetup-10-2023-03-09/slide-021', '821'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/', '683'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-001',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-001', '79b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-002',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-002', 'dcf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-003',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-003', '91f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-004',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-004', '27d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-005',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-005', '858'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-006',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-006', '98a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-007',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-007', 'ac0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-008',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-008', 'ed6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-009',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-009', 'c54'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-010',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-010', '7d5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-011',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-011', '1e2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-012',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-012', '3b8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-013',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-013', 'cf7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-014',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-014', 'e2a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-015',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-015', 'd0f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-016',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-016', '16f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-017',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-017', '226'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-018',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-018', 'af4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-019',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-019', 'e8a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-020',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-020', '3a9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-021',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-021', '108'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-022',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-022', '8cb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-023',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-023', 'a1f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-024',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-024', '55b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-025',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-025', '3d1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-home-mining-bitaxe-2025-04/slide-026',
                component: ComponentCreator('/presentations/decentralized-home-mining-bitaxe-2025-04/slide-026', '4bf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/', '429'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-001',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-001', '316'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-002',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-002', '823'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-003',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-003', '6d3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-004',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-004', '098'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-005',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-005', '8ac'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-006',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-006', 'a65'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-007',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-007', '446'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-008',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-008', '17d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-009',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-009', 'e5b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-010',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-010', '83b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-011',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-011', 'd01'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-012',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-012', '1be'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-013',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-013', '1ee'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-014',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-014', '0ef'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-015',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-015', '0e4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-016',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-016', '9ef'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-017',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-017', 'bee'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-018',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-018', '9b2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-019',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-019', '0ea'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-020',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-020', '304'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-021',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-021', 'c5d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-022',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-022', '863'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-023',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-023', '0b9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-024',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-024', 'bcf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-025',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-025', '729'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-026',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-026', '3af'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-027',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-027', 'b6e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-028',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-028', 'a72'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-029',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-029', 'bf3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-030',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-030', '9ff'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-031',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-031', '52d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-032',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-032', '292'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-033',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-033', 'ce8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/decentralized-mining-workshop-meetup-30/slide-034',
                component: ComponentCreator('/presentations/decentralized-mining-workshop-meetup-30/slide-034', 'cc3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/', '9c7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-001',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-001', '619'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-002',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-002', '492'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-003',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-003', '8c8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-004',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-004', '4d0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-005',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-005', '145'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-006',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-006', 'a5e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-007',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-007', '78d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/feed-filter-demo-2025-12-11/slide-008',
                component: ComponentCreator('/presentations/feed-filter-demo-2025-12-11/slide-008', '6ca'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-hashpower-datum-outline',
                component: ComponentCreator('/presentations/mining-hashpower-datum-outline', 'acb'),
                exact: true
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/', 'c3c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-001',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-001', 'dd2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-002',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-002', '0b7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-003',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-003', 'd79'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-004',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-004', 'fac'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-005',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-005', '62d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-006',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-006', 'af4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-007',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-007', '3bb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-008',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-008', '58f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-009',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-009', 'c53'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-010',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-010', '698'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-011',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-011', 'e44'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-012',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-012', 'ade'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-013',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-013', 'df8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-014',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-014', '282'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-015',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-015', 'e2c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-016',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-016', '3f2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-017',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-017', '258'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14/slide-018',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14/slide-018', '6d9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-outline',
                component: ComponentCreator('/presentations/mining-like-the-big-players-outline', '28e'),
                exact: true
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/', '55f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-001',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-001', '3c8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-002',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-002', 'd90'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-003',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-003', 'b8d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-004',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-004', '404'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-005',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-005', 'df8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-006',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-006', 'ba5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-007',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-007', 'e67'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-008',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-008', '7d7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-009',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-009', '007'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-010',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-010', '7eb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-011',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-011', 'c0c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-012',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-012', '1ff'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-013',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-013', 'f50'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mobile-privacy-meetup-5-2022-10-13/slide-014',
                component: ComponentCreator('/presentations/mobile-privacy-meetup-5-2022-10-13/slide-014', '87f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/', '03b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-001',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-001', '5d4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-002',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-002', 'ddc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-003',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-003', 'cdd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-004',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-004', 'de4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-005',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-005', '09c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-006',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-006', 'd64'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-007',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-007', 'f12'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-008',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-008', '706'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-009',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-009', 'bf3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-010',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-010', '7f5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-011',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-011', '8fd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-012',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-012', 'db9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-013',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-013', '4b2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-014',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-014', '3d1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-015',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-015', '04e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-016',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-016', '01b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/node-builder-workshop-2025-11-13/slide-017',
                component: ComponentCreator('/presentations/node-builder-workshop-2025-11-13/slide-017', '9f5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/', '15c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-001',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-001', 'c11'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-002',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-002', '01f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-003',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-003', 'eee'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-004',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-004', '3f2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-005',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-005', '8b0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-006',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-006', '1b5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-007',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-007', '6c0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-008',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-008', '1ad'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-009',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-009', '2f3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-010',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-010', '912'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-011',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-011', '4b8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-012',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-012', '300'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-013',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-013', '3b5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-014',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-014', 'b1f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-015',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-015', '333'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-016',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-016', '189'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-017',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-017', 'c5a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-018',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-018', '629'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-019',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-019', '2ae'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-020',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-020', '457'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-021',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-021', 'a2a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-022',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-022', '526'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-023',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-023', '9e5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-024',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-024', '89e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-025',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-025', 'ac5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-026',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-026', '1b3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-027',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-027', '2f2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-028',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-028', 'f16'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-029',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-029', '470'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-030',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-030', '894'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-031',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-031', 'b72'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-032',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-032', '78a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-033',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-033', '904'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-034',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-034', 'a9e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-035',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-035', 'afc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-036',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-036', '2fa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-037',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-037', '4a2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-038',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-038', '7eb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-039',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-039', '31a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-040',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-040', '96b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-041',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-041', '513'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-042',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-042', 'a79'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-043',
                component: ComponentCreator('/presentations/round-rock-bitcoiners-26-larp-2024-07-29/slide-043', '2dc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/', 'f4d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-001',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-001', '1a6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-002',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-002', '277'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-003',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-003', 'bd0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-004',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-004', '36a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-005',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-005', 'd9c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-006',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-006', '302'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-007',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-007', '5c6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-008',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-008', 'bad'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-009',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-009', '64e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-010',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-010', 'fbe'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-011',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-011', '337'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-012',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-012', '8ac'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-013',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-013', '4f2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-014',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-014', 'a66'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-015',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-015', 'a7a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-016',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-016', '6da'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-017',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-017', '8b0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-018',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-018', '32c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-019',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-019', 'add'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-020',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-020', 'eec'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-021',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-021', '232'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-022',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-022', 'e96'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-023',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-023', 'f0a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-024',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-024', '5f9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-025',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-025', 'bdc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-026',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-026', '9aa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-027',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-027', 'a71'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-028',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-028', '99c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-029',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-029', '310'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-030',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-030', '658'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-031',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-031', '2b8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-032',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-032', 'a14'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-033',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-033', '078'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-034',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-034', 'ed2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-035',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-035', '008'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-036',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-036', '21f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-037',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-037', 'ca9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-038',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-038', 'bb1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-039',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-039', '135'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-040',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-040', '65b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-041',
                component: ComponentCreator('/presentations/rr-bitcoiners-18-plebdevs-2023-11-09/slide-041', '0e5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/', '0a1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-001',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-001', '138'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-002',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-002', 'f46'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-003',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-003', '415'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-004',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-004', '89a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-005',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-005', 'e19'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-006',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-006', 'b9f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-007',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-007', '059'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-008',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-008', '1ee'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-009',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-009', '80e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-010',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-010', '011'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-011',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-011', '632'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-012',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-012', 'b75'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-013',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-013', '2cb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-014',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-014', 'f36'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-015',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-015', 'e2e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-016',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-016', '694'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-017',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-017', '5fb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-018',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-018', '52a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-019',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-019', 'c23'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-020',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-020', 'cbf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-021',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-021', '5e0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-022',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-022', 'e9e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-023',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-023', '965'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-024',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-024', '4da'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-025',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-025', '74b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-026',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-026', 'dbe'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-027',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-027', '731'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-028',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-028', 'da5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-029',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-029', '5f0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-030',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-030', 'f3c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-031',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-031', '666'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-032',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-032', 'fb6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-033',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-033', 'a0d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-034',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-034', '212'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-035',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-035', '3aa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-036',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-036', '872'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-037',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-037', 'db3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-038',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-038', '25e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-039',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-039', 'b13'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-040',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-040', 'c45'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-041',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-041', 'f62'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-042',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-042', '263'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-043',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-043', '543'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-044',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-044', '518'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-045',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-045', '244'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-046',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-046', '5d9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-047',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-047', '256'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-048',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-048', '3e3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-049',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-049', 'ab6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-050',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-050', '6f3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-051',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-051', '287'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-052',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-052', '62b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-053',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-053', '39c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-054',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-054', '72d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-055',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-055', 'e73'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-056',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-056', '507'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-057',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-057', '3d2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-058',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-058', 'ae5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-059',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-059', '6f5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-060',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-060', '8b3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-061',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-061', '1e5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-062',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-062', '312'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-063',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-063', '4fd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-064',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-064', 'eb5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-065',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-065', '849'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-066',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-066', '80b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-067',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-067', '53c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-068',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-068', '776'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-069',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-069', '9dc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-070',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-070', '7a4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/understand-how-bitcoin-works-2026-01-08/slide-071',
                component: ComponentCreator('/presentations/understand-how-bitcoin-works-2026-01-08/slide-071', 'dc2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/', '095'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-001',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-001', '555'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-002',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-002', 'dea'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-003',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-003', '3b3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-004',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-004', 'b7a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-005',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-005', '0df'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-006',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-006', '740'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-007',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-007', 'cb7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-008',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-008', 'b36'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-009',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-009', 'cea'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-010',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-010', 'e10'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-011',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-011', '246'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-012',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-012', '1a9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-013',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-013', '26c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-014',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-014', 'c4e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-015',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-015', 'b92'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-multisig-meetup-7-2022-12-08/slide-016',
                component: ComponentCreator('/presentations/what-is-multisig-meetup-7-2022-12-08/slide-016', '92f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/', 'b73'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-001',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-001', '4dd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-002',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-002', 'a1b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-003',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-003', 'a7f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-004',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-004', 'ebc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-005',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-005', '4cc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-006',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-006', 'bb9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-007',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-007', '39a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-008',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-008', '3d1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-009',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-009', '22f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-010',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-010', '201'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-011',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-011', '6a5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-012',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-012', '495'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-013',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-013', '69a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-014',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-014', 'fec'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-015',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-015', 'dcf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-016',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-016', '317'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/what-is-nostr-meetup-8-2023-01-12/slide-017',
                component: ComponentCreator('/presentations/what-is-nostr-meetup-8-2023-01-12/slide-017', 'ab0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/', 'e60'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-001',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-001', 'cf6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-002',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-002', 'c45'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-003',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-003', 'f71'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-004',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-004', '00e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-005',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-005', '4af'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-006',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-006', 'be3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-007',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-007', '420'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-008',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-008', '9cf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-009',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-009', '096'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-010',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-010', '593'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-011',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-011', '59f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-012',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-012', '88d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-013',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-013', '517'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-014',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-014', '439'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-015',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-015', '875'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-016',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-016', '639'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-017',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-017', 'e91'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-018',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-018', 'd28'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-019',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-019', 'ef4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-020',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-020', 'c8d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-021',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-021', 'dcb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-022',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-022', '663'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-023',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-023', 'b41'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-024',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-024', 'dbb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-lightning-plus-ai-2024-08-13/slide-025',
                component: ComponentCreator('/presentations/why-lightning-plus-ai-2024-08-13/slide-025', '0f5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/', 'df8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-001',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-001', 'dd0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-002',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-002', '22f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-003',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-003', 'd43'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-004',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-004', 'ab0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-005',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-005', '352'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-006',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-006', '6a3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-007',
                component: ComponentCreator('/presentations/why-privacy-matters-meetup-3-2022-08-11/slide-007', '293'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/', '0a2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-001',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-001', '42f'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-002',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-002', 'b6a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-003',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-003', '3e6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-004',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-004', 'ebc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-005',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-005', '1e7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-006',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-006', 'ad0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-007',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-007', '4cc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-008',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-008', '2a0'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/why-run-a-node-meetup-4-2022-09-08/slide-009',
                component: ComponentCreator('/presentations/why-run-a-node-meetup-4-2022-09-08/slide-009', 'c41'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-outline',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-outline', '4a5'),
                exact: true
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/', '8e9'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-001',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-001', '5b7'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-002',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-002', '4b1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-003',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-003', '1ba'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-004',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-004', '33a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-005',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-005', '63d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-006',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-006', '0be'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-007',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-007', 'cad'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-008',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-008', '088'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-009',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-009', 'aaa'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-010',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-010', '3a3'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-011',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-011', '127'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-012',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-012', '1bf'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-013',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-013', 'b53'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-014',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-014', 'ea1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-015',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-015', '35b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-016',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-016', '24b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-017',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-017', 'fff'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-018',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-018', '904'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-019',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-019', '85e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-020',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-020', 'ff1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-021',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-021', '97b'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-022',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-022', '495'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-023',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-023', '3c6'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-024',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-024', 'd5a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-025',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-025', 'e10'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-026',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-026', 'cd5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-027',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-027', '839'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-028',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22/slide-028', 'e1c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/queries/',
                component: ComponentCreator('/queries/', 'd6e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/queries/how-do-i-start-mining-at-home',
                component: ComponentCreator('/queries/how-do-i-start-mining-at-home', 'bfe'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/queries/what-privacy-stack-should-i-use-for-mobile',
                component: ComponentCreator('/queries/what-privacy-stack-should-i-use-for-mobile', '87a'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/queries/which-custody-model-fits-my-threat-model',
                component: ComponentCreator('/queries/which-custody-model-fits-my-threat-model', '601'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/summaries/',
                component: ComponentCreator('/summaries/', '103'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/summaries/getonzero-synthesis',
                component: ComponentCreator('/summaries/getonzero-synthesis', '32c'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/summaries/mining-decentralization',
                component: ComponentCreator('/summaries/mining-decentralization', 'ec4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/summaries/privacy-as-a-spectrum',
                component: ComponentCreator('/summaries/privacy-as-a-spectrum', '459'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '486'),
                exact: true,
                sidebar: "wikiSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
