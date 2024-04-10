## Input
```
<|im_start|>system
You are a helpful assistant<|im_end|>
<|im_start|>user
class Solution {
public:
    string intToRoman(int num) {
        string ones[] = {"","I","II","III","IV","V","VI","VII","VIII","IX"};
        string tens[] = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
        string hrns[] = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
        string ths[]={"","M","MM","MMM"};
        
        return ths[num/1000] + hrns[(num%1000)/100] + tens[(num%100)/10] + ones[num%10];
    }
};<|im_end|>
<|im_start|>assistant
```

## Output
<img width="643" alt="Screenshot 2024-03-02 at 1 18 19 PM" src="https://github.com/kearns-cu/CPSC_298_Kearns/assets/90280289/a04b0971-4785-499e-8348-727f1caec807">

```
[100264, 9125, 198, 2675, 527, 264, 11190, 18328, 100265, 198, 100264, 882, 198, 1058, 12761, 341, 898, 512, 262, 925, 528, 1271, 62080, 1577, 1661, 8, 341, 286, 925, 6305, 1318, 284, 5324, 2247, 40, 2247, 5660, 2247, 23440, 2247, 3166, 2247, 53, 2247, 26376, 2247, 53, 5660, 2247, 53, 23440, 2247, 5511, 27788, 286, 925, 22781, 1318, 284, 5324, 2247, 55, 2247, 6277, 2247, 31200, 2247, 37630, 2247, 43, 2247, 43, 55, 2247, 43, 6277, 2247, 43, 31200, 2247, 39046, 27788, 286, 925, 18514, 4511, 1318, 284, 5324, 2247, 34, 2247, 3791, 2247, 54973, 2247, 6620, 2247, 35, 2247, 5744, 2247, 35, 3791, 2247, 35, 54973, 2247, 10190, 27788, 286, 925, 270, 82, 1318, 16160, 2247, 44, 2247, 8195, 2247, 87773, 27788, 1827, 286, 471, 270, 82, 24146, 14, 1041, 15, 60, 489, 18514, 4511, 9896, 2470, 4, 1041, 15, 5738, 1041, 60, 489, 22781, 9896, 2470, 4, 1041, 5738, 605, 60, 489, 6305, 24146, 4, 605, 947, 262, 457, 11308, 100265, 198, 100264, 78191, 198]
```

## Explanation
Large Language Models (LLMs) like GPT work by breaking down what we write into smaller pieces, almost like chopping a sentence into individual words or even smaller bits. These bits are called tokens, and it's the job of something called a tokenizer to do this chopping. Once everything is broken down, the LLM takes over, using what it has learned from reading lots of text to make guesses about what should come next in a sentence or how to answer a question. When we talk about Mixture of Experts (MoE), we're referring to a cool trick where the model can pick and choose from a bunch of specializd experts inside it, each good at handling different types of tasks. This helps the LLM be more accurate and efficient. For tasks like Coding Assistance, where the goal is to help people write code better or fix mistakes, all these pieces come together beautifully. The tokenizer breaks down the code into tokens, the LLM figures out what needs to be done, and MoE might step in to fine-tune the process, making sure you get the best help possible. 

