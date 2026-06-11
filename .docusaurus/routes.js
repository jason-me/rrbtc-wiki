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
    component: ComponentCreator('/', 'a23'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fcd'),
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
            component: ComponentCreator('/', '5cd'),
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
                component: ComponentCreator('/concepts/bitcoin-nfts', 'a0c'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/axe-os', 'be5'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/bitcoin-commons', '873'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/bitrefill', '122'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/blockstream-green',
                component: ComponentCreator('/entities/blockstream-green', 'a45'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bluewallet',
                component: ComponentCreator('/entities/bluewallet', '1d5'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/bolt-card',
                component: ComponentCreator('/entities/bolt-card', '242'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/btcmap', 'ccc'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/btcpay-server',
                component: ComponentCreator('/entities/btcpay-server', '593'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/casdcr', '2d1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/cashu',
                component: ComponentCreator('/entities/cashu', '88e'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/coinatmradar',
                component: ComponentCreator('/entities/coinatmradar', '7d2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/coldcard',
                component: ComponentCreator('/entities/coldcard', 'dba'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/comparepower',
                component: ComponentCreator('/entities/comparepower', 'e34'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/feed-filter', 'dc8'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/fold',
                component: ComponentCreator('/entities/fold', 'b21'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/hash-rate-index',
                component: ComponentCreator('/entities/hash-rate-index', '075'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/hodl-up', 'a06'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/ibexpay', '822'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/nutstash', 'e92'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/polar', '1bd'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/public-pool',
                component: ComponentCreator('/entities/public-pool', 'dbc'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/sahil-chaturvedi', 'dda'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/samourai-wallet',
                component: ComponentCreator('/entities/samourai-wallet', '918'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/sats-card',
                component: ComponentCreator('/entities/sats-card', '24d'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/seedsigner',
                component: ComponentCreator('/entities/seedsigner', '5f4'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/shushminer',
                component: ComponentCreator('/entities/shushminer', '189'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/stonewall', '655'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/entities/stowaway',
                component: ComponentCreator('/entities/stowaway', '85b'),
                exact: true,
                sidebar: "wikiSidebar"
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
                component: ComponentCreator('/entities/upstream-data', 'bf0'),
                exact: true,
                sidebar: "wikiSidebar"
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
                path: '/log',
                component: ComponentCreator('/log', '5ea'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/',
                component: ComponentCreator('/presentations/', '3cb'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-hashpower-datum-outline',
                component: ComponentCreator('/presentations/mining-hashpower-datum-outline', '7e1'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/mining-like-the-big-players-2026-05-14',
                component: ComponentCreator('/presentations/mining-like-the-big-players-2026-05-14', 'ec2'),
                exact: true,
                sidebar: "wikiSidebar"
              },
              {
                path: '/presentations/zero-dollar-manifesto-sahil-2024-06-22',
                component: ComponentCreator('/presentations/zero-dollar-manifesto-sahil-2024-06-22', 'b40'),
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
