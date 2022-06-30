import BlogModel from "../models/Blog.js";

export const createPost = async (req, res) => {
    try {

        const doc = new BlogModel({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            imgUrl: req.body.imgUrl,
            user: req.userId,
        });

        const post = await doc.save();
      
        res.json(post);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось создать пост"
        });
  }
};

export const deletePost = async (req, res) => {
    
    const postId = req.params.id;

        BlogModel.findByIdAndDelete(postId)
            .then(data => {
                if (!data) {
                    return res.status(400).json({
                        message: `Не возможно удалить статью с id: ${postId}. Возможно ее нет!`
                    })
                } else {
                    res.json({
                        message: "Статья успешно удалена"
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: `Не удалось найти статью с id: ${postId}`
                });
            })

};

export const updatePost = async (req, res) => {
    
    const postId = req.params.id;

    BlogModel.findByIdAndUpdate(postId, req.body)
        .then(data => {
            if (!data) {
                return res.status(404).json({
                    message: `Не возможно обновить статью с id: ${postId}. Возможно ее нет!`
                })
            } else {
                res.json({
                    message: "Статья успешно обновлена"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: `Не удалось найти статью с id: ${postId}`
            });
        })

};

export const getOnePost = async (req, res) => {
  
    const postId = req.params.id;

    BlogModel.findByIdAndUpdate(postId, { $inc: { viewsCount: 1 } }, { returnDocument: 'after' })
        .then(data => {
            
            if (!data) {
                return res.status(404).json({
                    message: `Не возможно найти статью с id: ${postId}`
                })
            } else {
                res.json({
                    message: "Данные успешно возвращены"
                });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: `Не удалось найти статью с id: ${postId}`
            });
        });

};

export const getAllPosts = async (req, res) => {

    try {
        
        const posts = await BlogModel.find().populate('user').exec();

        res.json(posts);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Не удалось найти статьи`
        });
    }

};

export const getAllTags = async (req, res) => {
    try {

        const posts = await BlogModel.find().limit(5).exec();

        const tags = posts
            .flatMap(data => data.tags)
            .filter((tag, index, array) => array.indexOf(tag) === index);

        res.json(tags);
   
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Не удалось найти теги`
        });
    }
};

export const getPopularePosts = async (req, res) => {
    try {

        const popularPosts = await BlogModel.find().sort({viewsCount: -1}).exec();

        res.json(popularPosts);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: `Не удалось найти популярные статьи`
        });
    }  
};