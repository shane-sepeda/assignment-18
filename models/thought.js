thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);
module.exports = thought;