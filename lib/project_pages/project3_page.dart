import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart'; // conditional import for web only

class PdfEmbed extends StatelessWidget {
  final String pdfUrl;
  final String viewType;

  const PdfEmbed({
    super.key,
    required this.pdfUrl,
    this.viewType = 'project3-pdf',
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, pdfUrl);
      return SizedBox(
        height: 600,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('PDF preview only available on web.');
    }
  }
}

class Project3Page extends StatelessWidget {
  const Project3Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Data Analytics for Design Opportunities'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 900),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'AI Data Analytics for Design Opportunities',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'UX Analysis for Gaming Chair Design',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),
                Wrap(
                  spacing: 32,
                  runSpacing: 24,
                  children: const [
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Company', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('SUTD: 60.002 AI Applications in Design'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Natural Language Processing (NLP), Prompt Engineering, Web Scraping, Retrieval-Augmented Generation (RAG), Data Processing & Collection'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Mar 2025 – Apr 2025'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Python, OpenAI GPT-3.5/4o, LangChain Framework, ChromaDB, Tavily & Youtube Data API, BeautifulSoup, Pandas & Pydantic'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),
                const Text(
                  'This project investigated online reviews of gaming chairs using AI-based data analytics to uncover latent user needs and design opportunities. By clustering user sentiments and tagging recurring pain points, we translated insights into tangible design suggestions for improving comfort, support, and functionality.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 40),
                const Text(
                  'Project Report:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                const PdfEmbed(
                  pdfUrl: 'https://drive.google.com/file/d/1oAj3sCltl3ZjaT5Ls9ZXM-DpKvzraGV8/preview',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}