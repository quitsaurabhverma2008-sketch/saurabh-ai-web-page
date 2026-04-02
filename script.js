/* ================================================
   SAURABH AI - ADVANCED ANIMATIONS & INTERACTIONS
   Version 2.0 - March 2026
   ================================================ */

// ================================================
// ALL 67 AI MODELS DATA
// ================================================
const ALL_MODELS = [
    // ==================== GROQ MODELS (8) ====================
    {
        id: 'llama-3.3-70b-versatile',
        name: 'Sage',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'chat',
        icon: 'S',
        context: '131K',
        description: 'Best quality balanced performance. Fastest 70B model. Great for general conversations and complex tasks.',
        badge: 'Default'
    },
    {
        id: 'qwen/qwen3-32b',
        name: 'Poly',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'multilingual',
        icon: 'P',
        context: '131K',
        description: 'Multilingual excellence with superior creative writing capabilities across 50+ languages.',
        badge: ''
    },
    {
        id: 'meta-llama/llama-3.1-8b-instant',
        name: 'Quick',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'chat',
        icon: 'Q',
        context: '131K',
        description: 'Fastest responses with 560 tokens/second. Perfect for quick answers and instant responses.',
        badge: 'Fastest'
    },
    {
        id: 'meta-llama/llama-4-scout-17b-16e-instruct',
        name: 'Scout',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'vision',
        icon: 'S',
        context: '10M',
        description: '10 million token context! Multimodal model for text and image understanding.',
        badge: 'Long Context'
    },
    {
        id: 'moonshotai/kimi-k2-instruct',
        name: 'Kimi K2',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'reasoning',
        icon: 'K',
        context: '128K',
        description: 'Mixture-of-experts model. All-rounder with exceptional reasoning capabilities.',
        badge: ''
    },
    {
        id: 'moonshotai/kimi-k2-instruct-0905',
        name: 'Kimi K2 Long',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'long_context',
        icon: 'K',
        context: '256K',
        description: 'Extended 256K context window for analyzing long documents and codebases.',
        badge: 'Long Context'
    },
    {
        id: 'openai/gpt-oss-120b',
        name: 'GPT-OSS',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'reasoning',
        icon: 'G',
        context: '131K',
        description: '120B open-weight model with strong reasoning and analysis capabilities.',
        badge: ''
    },
    {
        id: 'groq/compound',
        name: 'Compound',
        provider: 'GROQ',
        providerColor: '#ec4899',
        category: 'agentic',
        icon: 'C',
        context: '131K',
        description: 'Groq\'s compound AI system with built-in tools for complex tasks.',
        badge: 'Tools'
    },

    // ==================== NVIDIA MODELS (59) ====================
    
    // REASONING (11)
    {
        id: 'deepseek-ai/deepseek-v3-0324',
        name: 'DeepSeek V3.2',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'D',
        context: '128K',
        description: '685B sparse attention reasoning model. State-of-the-art performance on math and logic.',
        badge: 'SoTA',
        runs: '16.73M'
    },
    {
        id: 'moonshotai/kimi-k2',
        name: 'Kimi K2 NVIDIA',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'K',
        context: '128K',
        description: 'Mixture-of-experts with strong reasoning. Excellent for complex problem-solving.',
        runs: '21.48M'
    },
    {
        id: 'deepseek-ai/deepseek-prover-v2',
        name: 'DeepSeek V3.1',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'D',
        context: '128K',
        description: 'Fast reasoning with 128K context. Optimized for mathematical proofs.',
        runs: '12.72M'
    },
    {
        id: 'deepseek-ai/deepseek-r1',
        name: 'DeepSeek R1',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'D',
        context: '64K',
        description: 'State-of-art reasoning model for math, logic, and step-by-step problem solving.',
        runs: 'High'
    },
    {
        id: 'qwen/qwq-32b',
        name: 'QwQ-32B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'Q',
        context: '32K',
        description: 'Reasoning model specialized for hard mathematical and logical problems.',
        runs: '3.7M'
    },
    {
        id: 'maritimeai/marin-8b-instruct',
        name: 'Marin 8B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'M',
        context: '8K',
        description: 'Reasoning, math, and science. Great for educational and academic tasks.',
        runs: '472K'
    },
    {
        id: 'nvidia/nemotron-ultra-253b-v1',
        name: 'Nemotron Ultra',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'N',
        context: '128K',
        description: 'NVIDIA\'s best general-purpose model. Excellent across all tasks.',
        runs: 'High'
    },
    {
        id: 'nvidia/nemotron-super-253b-v1',
        name: 'Nemotron Super',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'N',
        context: '64K',
        description: 'Strong mathematical performance with 253B parameters.',
        runs: 'High'
    },
    {
        id: 'openai/gpt-oss-120b',
        name: 'GPT-OSS 120B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'G',
        context: '32K',
        description: 'Largest open-weight model available. Exceptional for complex reasoning.',
        runs: 'High'
    },
    {
        id: 'microsoft/phi-4-mini-reasoning',
        name: 'Phi-4 Flash Reasoning',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'P',
        context: '4K',
        description: 'Edge-optimized reasoning model. Fast and efficient.',
        runs: '451K'
    },
    {
        id: 'upstage/solar-10.7b-instruct',
        name: 'Solar 10.7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'reasoning',
        icon: 'S',
        context: '4K',
        description: 'Instruction-following, reasoning, and math. Compact and powerful.',
        runs: '459K'
    },

    // CODING (5)
    {
        id: 'mistralai/devstral-123b',
        name: 'Devstral 123B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'coding',
        icon: 'D',
        context: '256K',
        description: 'State-of-the-art open code model with 256K context. Best for large codebases.',
        badge: 'SoTA',
        runs: '5.86M'
    },
    {
        id: 'qwen/qwen3-coder-480b',
        name: 'Qwen3 Coder 480B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'coding',
        icon: 'Q',
        context: '256K',
        description: 'Agentic coding model with 256K context. Perfect for autonomous code generation.',
        badge: 'Agentic',
        runs: '3.76M'
    },
    {
        id: 'qwen/qwen2.5-coder-7b-instruct',
        name: 'Qwen2.5 Coder 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'coding',
        icon: 'Q',
        context: '32K',
        description: 'Mid-size code model. Great balance of speed and capability.',
        runs: '580K'
    },
    {
        id: 'mistralai/codestral-7b',
        name: 'Codestral 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'coding',
        icon: 'C',
        context: '32K',
        description: 'Code completion model optimized for developer productivity.',
        runs: '571K'
    },
    {
        id: 'mistralai/magistral-small-2411',
        name: 'Magistral Small',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'coding',
        icon: 'M',
        context: '32K',
        description: 'High performance reasoning model with excellent code understanding.',
        runs: '3.6M'
    },

    // VISION (10)
    {
        id: 'google/gemma-3-27b-it',
        name: 'Gemma 3 27B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'G',
        context: '8K',
        description: 'Google\'s best open multimodal model. Excellent for image understanding.',
        badge: 'Multimodal',
        runs: '6.37M'
    },
    {
        id: 'meta/llama-4-scout-17b-16e-instruct',
        name: 'Llama 4 Scout',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'L',
        context: '10M',
        description: '10 million token context! Revolutionary multimodal understanding.',
        badge: 'Long Context',
        runs: '24K'
    },
    {
        id: 'meta/llama-4-maverick-17b-128e-instruct',
        name: 'Llama 4 Maverick',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'L',
        context: '128K',
        description: 'General purpose multimodal model. Great for diverse tasks.',
        runs: '6.19M'
    },
    {
        id: 'nvidia/cosmos-nemotron-v1',
        name: 'Cosmos Nemotron',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'N',
        context: '8K',
        description: 'Text, image, and video understanding. NVIDIA\'s vision model.',
        runs: '14'
    },
    {
        id: 'microsoft/phi-3.5-vision-instruct',
        name: 'Phi-3.5 Vision',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'P',
        context: '4K',
        description: 'Multimodal reasoning from images. Efficient edge deployment.',
        runs: '614K'
    },
    {
        id: 'google/paligemma-3b-mix-448',
        name: 'PaliGemma',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'P',
        context: '2K',
        description: 'Vision language model. Lightweight and efficient.',
        runs: '243K'
    },
    {
        id: 'google/gemma-2-27b-it',
        name: 'Gemma 2 27B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'G',
        context: '8K',
        description: "Text, code, and vision. Google's versatile open model.",
        runs: '877K'
    },
    {
        id: 'opencv/openvino-internvl2-14b',
        name: 'InternVL2 14B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'I',
        context: '8K',
        description: 'Strong vision-language understanding. Great for document analysis.',
        runs: 'High'
    },
    {
        id: 'microsoft/phi-4-multimodal-instruct',
        name: 'Phi-4 Multimodal',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'P',
        context: '16K',
        description: "Image and audio understanding. Microsoft's latest multimodal.",
        runs: '454K'
    },
    {
        id: 'nvidia/nv-dinov2-v2',
        name: 'NV-DINOv2',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'vision',
        icon: 'N',
        context: 'N/A',
        description: 'Visual foundation model embeddings. For image similarity and retrieval.',
        runs: '1.24M'
    },

    // CHAT (15)
    {
        id: 'mistralai/mistral-large-3',
        name: 'Mistral Large 3',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'M',
        context: '128K',
        description: 'State-of-art general purpose MoE VLM. Best for complex conversations.',
        badge: 'SoTA',
        runs: '7.42M'
    },
    {
        id: 'mistralai/mistral-small-3.1-24b-instruct',
        name: 'Mistral Small 3.1',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'M',
        context: '32K',
        description: 'Efficient, multilingual, and fast. Great balance of capability and speed.',
        runs: '2.35M'
    },
    {
        id: 'mistralai/mistral-medium-3-instruct',
        name: 'Mistral Medium 3',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'M',
        context: '128K',
        description: 'Enterprise-grade multimodal. Excellent for business applications.',
        runs: '4.75M'
    },
    {
        id: 'microsoft/phi-3.5-mini-instruct',
        name: 'Phi-3.5 Mini',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'P',
        context: '128K',
        description: 'Multilingual, fast, and efficient. Microsoft\'s lightweight champion.',
        runs: '7.88M'
    },
    {
        id: 'mistralai/mistral-7b-instruct-v0.3',
        name: 'Mistral 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'M',
        context: '8K',
        description: 'Instruction following, creative text. Classic and reliable.',
        runs: '538K'
    },
    {
        id: 'google/gemma-2-7b-it',
        name: 'Gemma 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'G',
        context: '8K',
        description: 'Text understanding and code generation. Google\'s efficient model.',
        runs: '656K'
    },
    {
        id: 'upstage/buffalo-7b-instruct',
        name: 'Breeze 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'B',
        context: '8K',
        description: 'Traditional Chinese focus. Great for Chinese language tasks.',
        runs: '443K'
    },
    {
        id: 'rakutenai/rakutenai-7b-instruct',
        name: 'RakutenAI 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'R',
        context: '8K',
        description: 'Reasoning and text generation. Optimized for Japanese content.',
        runs: '442K'
    },
    {
        id: 'qwen/qwen2-7b-instruct',
        name: 'Qwen2 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'Q',
        context: '8K',
        description: 'Chinese/English, coding, math. Alibaba\'s versatile model.',
        runs: '630K'
    },
    {
        id: 'ai21/jamba-1.5-mini-instruct',
        name: 'Jamba 1.5 Mini',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'J',
        context: '8K',
        description: 'MoE-based LLM. Efficient hybrid architecture.',
        runs: '489K'
    },
    {
        id: 'google/gemma-3n-e2b-it',
        name: 'Gemma 3N E2B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'G',
        context: '8K',
        description: 'Edge computing AI. Text, audio, and image support.',
        runs: '614K'
    },
    {
        id: 'google/gemma-3n-e4b-it',
        name: 'Gemma 3N E4B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'G',
        context: '8K',
        description: 'Edge computing with higher capability. Best for resource-constrained devices.',
        runs: '716K'
    },
    {
        id: 'nvidia/nemotron-mini-4b-instruct',
        name: 'Nemotron Mini 4B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'N',
        context: '4K',
        description: 'On-device inference, RAG. Perfect for embedding in applications.',
        runs: '494K'
    },
    {
        id: 'spolczanski/bielik-11b-v2.3-instruct',
        name: 'Bielik 11B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'B',
        context: '8K',
        description: 'Polish language processing. Excellent for Central European languages.',
        runs: '450K'
    },
    {
        id: 'aisingapore/sealion-7b-instruct',
        name: 'Sea Lion 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'chat',
        icon: 'S',
        context: '8K',
        description: 'Southeast Asian languages. Optimized for regional languages.',
        runs: 'Low'
    },

    // AGENTIC (3)
    {
        id: '医者ai/step-3.5-flash-thinking',
        name: 'Step 3.5 Flash',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'agentic',
        icon: 'S',
        context: '128K',
        description: '200B reasoning engine. Built for autonomous agent workflows.',
        badge: 'Agentic',
        runs: '9.48M'
    },
    {
        id: 'deepseek-ai/seed-oss-36b',
        name: 'Seed-OSS 36B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'agentic',
        icon: 'S',
        context: '128K',
        description: 'Long-context, reasoning, agentic. Perfect for complex task automation.',
        badge: 'Agentic',
        runs: '3.68M'
    },
    {
        id: 'moonshotai/kimi-k2-thinking',
        name: 'Kimi K2 Thinking',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'agentic',
        icon: 'K',
        context: '256K',
        description: 'Native INT4 quantization. Enhanced tool use for agents.',
        badge: 'Agentic',
        runs: '3.57M'
    },

    // LONG CONTEXT (4)
    {
        id: 'moonshotai/kimi-k2-instruct',
        name: 'Kimi K2 Long',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'long_context',
        icon: 'K',
        context: '256K',
        description: 'Longest context window available. Perfect for analyzing entire books.',
        badge: 'Long Context',
        runs: '12.96M'
    },
    {
        id: 'mistralai/devstral-123b',
        name: 'Devstral Long',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'long_context',
        icon: 'D',
        context: '256K',
        description: '256K context for code and documents. Analyze entire codebases.',
        runs: '5.86M'
    },
    {
        id: 'microsoft/phi-3-medium-128k-instruct',
        name: 'Phi-3 Medium 128K',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'long_context',
        icon: 'P',
        context: '128K',
        description: 'Lightweight with high-quality reasoning. Efficient long context.',
        runs: '467K'
    },
    {
        id: 'meta/llama-4-scout-17b-16e-instruct',
        name: 'Llama 4 Scout Long',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'long_context',
        icon: 'L',
        context: '10M',
        description: '10 MILLION token context! Unmatched for ultra-long documents.',
        badge: 'Ultra Long',
        runs: '24K'
    },

    // MULTILINGUAL (5)
    {
        id: 'nvidia/nemotron-hindi-4b-instruct',
        name: 'Nemotron Hindi 4B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'multilingual',
        icon: 'N',
        context: '4K',
        description: 'Hindi-English bilingual. Perfect for Indian languages.',
        badge: 'Hindi',
        runs: '543K'
    },
    {
        id: 'thudm/chatglm3-6b',
        name: 'ChatGLM3 6B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'multilingual',
        icon: 'C',
        context: '8K',
        description: 'Chinese/English translation. Tsinghua\'s bilingual model.',
        runs: '454K'
    },
    {
        id: 'baichuan-inc/baichuan2-13b-chat',
        name: 'Baichuan 2 13B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'multilingual',
        icon: 'B',
        context: '4K',
        description: 'Chinese/English chat, coding, math. Baichuan\'s flagship.',
        runs: '453K'
    },
    {
        id: 'qwen/qwen2-7b-instruct',
        name: 'Qwen2 7B Multi',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'multilingual',
        icon: 'Q',
        context: '8K',
        description: 'Multilingual support including Chinese, English, and more.',
        runs: '630K'
    },
    {
        id: 'microsoft/phi-3.5-mini-instruct',
        name: 'Phi-3.5 Mini Multi',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'multilingual',
        icon: 'P',
        context: '128K',
        description: 'Multilingual with 128K context. Fast and capable.',
        runs: '7.88M'
    },

    // SAFETY (3)
    {
        id: 'meta/llama-guard-4-8b',
        name: 'Llama Guard 4',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'safety',
        icon: 'L',
        context: '8K',
        description: 'Safety classification. Identifies harmful content.',
        badge: 'Safety',
        runs: '431K'
    },
    {
        id: 'ibm/granite-guardian-3.0-8b',
        name: 'Granite Guardian 3.0',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'safety',
        icon: 'G',
        context: '8K',
        description: 'Jailbreak, bias, violence detection. IBM\'s safety model.',
        badge: 'Safety',
        runs: '418K'
    },
    {
        id: 'nvidia/nemotron-safety-4b',
        name: 'Nemotron Safety 4B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'safety',
        icon: 'N',
        context: '4K',
        description: 'Context-aware safety reasoning. NVIDIA\'s safety solution.',
        badge: 'Safety',
        runs: '517K'
    },

    // EMBEDDINGS (2)
    {
        id: 'nvidia/nv-embed-v1',
        name: 'NV-Embed v1',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'embeddings',
        icon: 'N',
        context: 'N/A',
        description: 'High-quality text embeddings. For semantic search and RAG.',
        badge: 'Embeddings',
        runs: '3.11M'
    },
    {
        id: 'nvidia/nv-embedqa-nv-embed-v2',
        name: 'NV-EmbedCode 7B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'embeddings',
        icon: 'N',
        context: 'N/A',
        description: 'Code retrieval embeddings. For code search and similarity.',
        badge: 'Embeddings',
        runs: '231K'
    },

    // TOOL CALLING (2)
    {
        id: 'mistralai/nemotron-mistral-8b-instruct',
        name: 'Mistral Nemotron',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'tool_calling',
        icon: 'M',
        context: '128K',
        description: 'Agentic workflows and function calling. Perfect for tool use.',
        badge: 'Tools',
        runs: '891K'
    },
    {
        id: 'moonshotai/kimi-k2',
        name: 'Kimi K2 Tools',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'tool_calling',
        icon: 'K',
        context: '128K',
        description: 'MoE all-rounder with tools. Strong function calling.',
        badge: 'Tools',
        runs: '21.48M'
    },

    // TTS (2)
    {
        id: 'magpie/magpie-tts-flow-1m',
        name: 'Magpie TTS Flow',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'tts',
        icon: 'M',
        context: 'N/A',
        description: 'Expressive text-to-speech. Natural sounding voice synthesis.',
        badge: 'TTS',
        runs: '885'
    },
    {
        id: 'magpie/magpie-tts-zeroshot-v0.1',
        name: 'Magpie TTS Zeroshot',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'tts',
        icon: 'M',
        context: 'N/A',
        description: 'Zero-shot voice cloning TTS. Clone any voice from samples.',
        badge: 'TTS',
        runs: '1.5K'
    },

    // TRANSLATION (1)
    {
        id: 'nvidia/nv-riva-translate-4b',
        name: 'Riva Translate 4B',
        provider: 'NVIDIA',
        providerColor: '#76b900',
        category: 'translation',
        icon: 'R',
        context: '4K',
        description: '12 languages translation. NVIDIA\'s speech and text translator.',
        badge: 'Translation',
        runs: '492K'
    }
];

// ================================================
// WAIT FOR DOM TO LOAD
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        initLoader();
    } catch(e) { console.error('Loader error:', e); }
    
    try {
        initThreeJS();
    } catch(e) { console.error('ThreeJS error:', e); }
    
    try {
        initParticles();
    } catch(e) { console.error('Particles error:', e); }
    
    try {
        initScrollAnimations();
    } catch(e) { console.error('Scroll error:', e); }
    
    try {
        initNavbar();
    } catch(e) { console.error('Navbar error:', e); }
    
    try {
        initTiltEffect();
    } catch(e) { console.error('Tilt error:', e); }
    
    try {
        initCustomCursor();
    } catch(e) { console.error('Cursor error:', e); }
    
    try {
        initModelTabs();
    } catch(e) { console.error('ModelTabs error:', e); }
    
    try {
        initModelsGrid();
    } catch(e) { console.error('ModelsGrid error:', e); }
    
    try {
        initStatsCounter();
    } catch(e) { console.error('Stats error:', e); }
    
    try {
        initThemeToggle();
    } catch(e) { console.error('Theme error:', e); }
    
    try {
        initMobileMenu();
    } catch(e) { console.error('MobileMenu error:', e); }
    
    try {
        initDemoChat();
    } catch(e) { console.error('DemoChat error:', e); }
    
    try {
        initToast();
    } catch(e) { console.error('Toast error:', e); }
    
    // Fallback: Force hide loader after 3 seconds
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 3000);
    
    console.log('🚀 Saurabh AI v2.0 initialized!');
});

// ================================================
// LOADER
// ================================================
function initLoader() {
    const loader = document.getElementById('loader');
    const percentEl = document.getElementById('loaderPercent');
    
    if (!loader) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        if (percentEl) percentEl.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                triggerInitialAnimations();
            }, 500);
        }
    }, 200);
}

function triggerInitialAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el, index) => {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => {
            el.classList.add('animated');
        }, delay);
    });
}

// ================================================
// THREE.JS 3D BACKGROUND
// ================================================
function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
        new THREE.TetrahedronGeometry(1.2, 0),
        new THREE.OctahedronGeometry(1, 0),
        new THREE.IcosahedronGeometry(0.8, 0),
        new THREE.TorusGeometry(0.6, 0.2, 16, 100),
        new THREE.DodecahedronGeometry(0.7, 0)
    ];
    
    const colors = [0x6366f1, 0x8b5cf6, 0x06b6d4, 0xec4899, 0x22c55e];
    
    for (let i = 0; i < 40; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const material = new THREE.MeshBasicMaterial({
            color: color,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.x = (Math.random() - 0.5) * 60;
        mesh.position.y = (Math.random() - 0.5) * 60;
        mesh.position.z = (Math.random() - 0.5) * 40 - 15;
        
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.015,
                y: (Math.random() - 0.5) * 0.015,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.02 + 0.01,
            floatOffset: Math.random() * Math.PI * 2,
            originalY: mesh.position.y
        };
        
        scene.add(mesh);
        shapes.push(mesh);
    }
    
    // Create particle system
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1500;
    const positions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 120;
        positions[i + 1] = (Math.random() - 0.5) * 120;
        positions[i + 2] = (Math.random() - 0.5) * 60 - 25;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.07,
        transparent: true,
        opacity: 0.7
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    camera.position.z = 18;
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        shapes.forEach((shape) => {
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;
            
            shape.position.y = shape.userData.originalY + Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.5;
        });
        
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.0001;
        
        camera.position.x += (mouseX * 4 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 4 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ================================================
// PARTICLE SYSTEM
// ================================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 25;
    const duration = Math.random() * 20 + 15;
    
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#ec4899', '#22c55e'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        background: ${color};
        box-shadow: 0 0 ${size * 3}px ${color};
        animation-delay: -${delay}s;
        animation-duration: ${duration}s;
    `;
    
    container.appendChild(particle);
    
    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle(container);
    });
}

// ================================================
// SCROLL ANIMATIONS
// ================================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ================================================
// NAVBAR
// ================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ================================================
// 3D TILT EFFECT
// ================================================
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// ================================================
// CUSTOM CURSOR
// ================================================
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const trail = document.getElementById('cursorTrail');
    
    if (!cursor || !trail) return;
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        trail.style.display = 'none';
        return;
    }
    
    let trailPositions = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        trailPositions.push({ x: e.clientX, y: e.clientY });
        if (trailPositions.length > trailLength) {
            trailPositions.shift();
        }
        
        if (trailPositions.length > 0) {
            const lastPos = trailPositions[trailPositions.length - 1];
            trail.style.left = lastPos.x + 'px';
            trail.style.top = lastPos.y + 'px';
            trail.style.opacity = trailPositions.length / trailLength;
        }
    });
    
    document.querySelectorAll('[data-hover3d], a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
}

// ================================================
// MODEL TABS
// ================================================
function initModelTabs() {
    const tabs = document.querySelectorAll('.model-tab');
    const grid = document.getElementById('modelsGrid');
    
    if (!tabs.length || !grid) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            renderModels(category);
        });
    });
}

// ================================================
// MODELS GRID
// ================================================
let currentPage = 1;
const itemsPerPage = 9;
let currentModels = [];

function initModelsGrid() {
    renderModels('all');
}

function renderModels(category, page = 1) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;
    
    let models = category === 'all' 
        ? ALL_MODELS 
        : ALL_MODELS.filter(m => m.category === category);
    
    currentModels = models;
    
    const totalPages = Math.ceil(models.length / itemsPerPage);
    currentPage = Math.min(page, totalPages);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageModels = models.slice(startIndex, endIndex);
    
    grid.innerHTML = pageModels.map(model => `
        <div class="model-card" data-animate="fade-up" onclick="showModelInfo('${model.id}')">
            <div class="model-status"></div>
            <div class="model-card-header">
                <div class="model-icon" style="background: linear-gradient(135deg, ${model.providerColor}, ${model.providerColor}88);">
                    ${model.icon}
                </div>
                <div class="model-info">
                    <h4>${model.name}</h4>
                    <span class="model-provider">${model.provider}</span>
                </div>
            </div>
            <p class="model-description">${model.description}</p>
            <div class="model-meta">
                <span>📊 ${model.context} Context</span>
                ${model.badge ? `<span style="background: ${model.providerColor}; padding: 2px 8px; border-radius: 10px;">${model.badge}</span>` : ''}
            </div>
        </div>
    `).join('');
    
    // Update pagination
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
    
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    
    // Animate new cards
    grid.querySelectorAll('.model-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.1}s`;
        card.classList.add('animated');
    });
}

function showModelInfo(modelId) {
    const model = ALL_MODELS.find(m => m.id === modelId);
    if (!model) return;
    
    showToast(`📋 ${model.name}: ${model.description}`);
}

// ================================================
// STATS COUNTER
// ================================================
function initStatsCounter() {
    const counters = document.querySelectorAll('.stat-card .stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
}

// ================================================
// THEME TOGGLE
// ================================================
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    
    toggle.addEventListener('click', () => {
        showToast('🌙 Theme toggled! (Dark mode active)');
    });
}

// ================================================
// MOBILE MENU
// ================================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuBtn || !navMenu) return;
    
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

// ================================================
// DEMO CHAT - LIVE API CONNECTION
// ================================================
let chatHistory = [];
const API_BASE = 'https://saurabh-ai.onrender.com';

function initDemoChat() {
    const demoInput = document.getElementById('demoInput');
    const sendBtn = document.getElementById('sendBtn');
    const modelSelect = document.getElementById('demoModel');
    
    if (!demoInput || !sendBtn) return;
    
    sendBtn.addEventListener('click', sendMessage);
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    if (modelSelect) {
        modelSelect.addEventListener('change', function() {
            updateModelIndicator(this.value);
        });
        updateModelIndicator(modelSelect.value);
    }
}

function updateModelIndicator(modelId) {
    const indicator = document.getElementById('selectedModelIndicator');
    if (!indicator) return;
    
    const modelNames = {
        'llama-3.3-70b-versatile': 'Sage (L3.3 70B)',
        'qwen/qwen3-32b': 'Poly (Qwen3 32B)',
        'meta-llama/llama-3.1-8b-instant': 'Quick (L3.1 8B)',
        'moonshotai/kimi-k2-instruct': 'Kimi K2',
        'moonshotai/kimi-k2-instruct-0905': 'Kimi K2 Long',
        'openai/gpt-oss-120b': 'GPT-OSS 120B',
        'meta-llama/llama-4-scout-17b-16e-instruct': 'Scout (Llama4)',
        'groq/compound': 'Compound'
    };
    
    indicator.textContent = modelNames[modelId] || 'Auto Best';
    indicator.dataset.model = modelId;
}

function sendMessage() {
    const demoInput = document.getElementById('demoInput');
    const modelSelect = document.getElementById('demoModel');
    
    const message = demoInput.value.trim();
    if (!message) return;
    
    const selectedModel = modelSelect ? modelSelect.value : 'llama-3.3-70b-versatile';
    
    demoInput.value = '';
    addUserMessage(message);
    chatHistory.push({ role: 'user', content: message });
    
    const botTextEl = addBotMessage('');
    botTextEl.innerHTML = '<span class="typing-indicator"><span>.</span><span>.</span><span>.</span></span>';
    
    sendToAPI(message, selectedModel, botTextEl);
}

function addUserMessage(message) {
    const chat = document.getElementById('demoChat');
    const msg = document.createElement('div');
    msg.className = 'chat-message user';
    msg.innerHTML = `
        <div class="message-content">
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

function addBotMessage(content) {
    const chat = document.getElementById('demoChat');
    const modelIndicator = document.getElementById('selectedModelIndicator');
    const currentModel = modelIndicator ? modelIndicator.textContent : 'Auto Best';
    const msg = document.createElement('div');
    msg.className = 'chat-message bot';
    msg.innerHTML = `
        <div class="avatar">
            <svg viewBox="0 0 100 100">
                <polygon points="50,5 95,85 5,85" fill="none" stroke="#fff" stroke-width="3"/>
                <circle cx="50" cy="55" r="15" fill="none" stroke="#fff" stroke-width="2"/>
                <circle cx="50" cy="55" r="6" fill="#fff"/>
            </svg>
        </div>
        <div class="message-content">
            <span class="model-badge">${currentModel}</span>
            <p class="bot-text"></p>
            <span class="time">Just now</span>
        </div>
    `;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
    return msg.querySelector('.bot-text');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function sendToAPI(message, model, botTextEl) {
    try {
        const response = await fetch(`${API_BASE}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model,
                messages: chatHistory,
                skip_behavior: false
            })
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;
                    
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.choices && parsed.choices[0].delta.content) {
                            fullResponse += parsed.choices[0].delta.content;
                            botTextEl.innerHTML = formatResponse(fullResponse);
                        }
                    } catch (e) {}
                }
            }
        }
        
        chatHistory.push({ role: 'assistant', content: fullResponse });
        
    } catch (error) {
        console.error('API Error:', error);
        botTextEl.innerHTML = `<span style="color: #ef4444;">
            ⚠️ Demo is connected to the live server.<br>
            Server might be sleeping (Render free tier).<br>
            <a href="${API_BASE}" target="_blank" style="color: #06b6d4;">Click here to wake it up!</a>
        </span>`;
    }
}

function formatResponse(text) {
    return escapeHtml(text)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// ================================================
// TOAST NOTIFICATION
// ================================================
let toastTimeout;

function initToast() {
    // Toast initialized
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ================================================
// PAGINATION HANDLERS
// ================================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.pagination-btn.prev')) {
        if (currentPage > 1) {
            const activeTab = document.querySelector('.model-tab.active');
            const category = activeTab ? activeTab.dataset.category : 'all';
            renderModels(category, currentPage - 1);
        }
    }
    
    if (e.target.closest('.pagination-btn.next')) {
        const activeTab = document.querySelector('.model-tab.active');
        const category = activeTab ? activeTab.dataset.category : 'all';
        const totalPages = Math.ceil(currentModels.length / itemsPerPage);
        if (currentPage < totalPages) {
            renderModels(category, currentPage + 1);
        }
    }
});

// ================================================
// SMOOTH SCROLL FOR NAV LINKS
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================================
// CONSOLE LOGO
// ================================================
console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   ██╗    ██╗███████╗██╗      ██████╗ ██████╗       ║
║   ██║    ██║██╔════╝██║     ██╔═══██╗██╔══██╗      ║
║   ██║ █╗ ██║█████╗  ██║     ██║   ██║██████╔╝      ║
║   ██║███╗██║██╔══╝  ██║     ██║   ██║██╔══██╗      ║
║   ╚███╔███╔╝███████╗███████╗╚██████╔╝██║  ██║      ║
║    ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝      ║
║                                                       ║
║   🤖 Version 2.0 | March 2026                        ║
║   📊 67+ AI Models | GROQ + NVIDIA                  ║
║   🌐 saurabh-ai.onrender.com                         ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
`);
